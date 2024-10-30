<?php

declare(strict_types=1);

namespace BeycanPress\Chainium;

use WP_REST_Request;
use BeycanPress\Chainium\Response;
use BeycanPress\Chainium\Entity\User;

class RestAPI
{
    /**
     * @var array<string>
     */
    private array $errorCodes = [
        1 => 'MEMBERSHIP_NOT_FOUND',
        2 => 'REGISTER',
    ];

    /**
     * constructor
     */
    public function __construct()
    {
        User::$currentUserId = get_current_user_id();
        add_action('rest_api_init', [$this, 'registerRoutes']);
    }

    /**
     * register routes
     *
     * @return void
     */
    public function registerRoutes(): void
    {
        $this->registerRoute('login', 'login', 'POST');
        $this->registerRoute('register', 'register', 'POST');
        $this->registerRoute('get-sign-message', 'getSignMessage', 'POST');
        $this->registerRoute('matching-control', 'matchingControl', 'POST');
        $this->registerRoute('remove-matching', 'removeMatching', 'POST');
        $this->registerRoute('address-match', 'addressMatch', 'POST');
        $this->registerRoute('address-change', 'addressChange', 'POST');
    }

    /**
     * @param string $route
     * @param string $callback
     * @param string $method
     * @return void
     */
    private function registerRoute(string $route, string $callback, string $method = 'GET'): void
    {
        register_rest_route('chainium-api', '/' . $route, [
            'methods' => $method,
            'callback' => [$this, $callback],
            'permission_callback' => '__return_true',
        ]);
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function getSignMessage(WP_REST_Request $request): void
    {
        try {
            $user = new User($request->get_param('address'));
        } catch (\Exception $e) {
            Response::error($e->getMessage());
        }

        Response::success($user->getSignMessage());
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function matchingControl(WP_REST_Request $request): void
    {
        try {
            $user = new User($request->get_param('address'));
            $wlUser = $user->getWlUser();

            if ($wlUser && $wlUser->walletAddress == $request->get_param('address')) {
                Response::error(
                    esc_html__('This account is already paired with the wallet address below!', 'chainium'),
                    'ALREADY_MATCHING',
                    [
                        'address' => $wlUser->walletAddress
                    ]
                );
            } elseif ($wlUser && $wlUser->walletAddress != $request->get_param('address')) {
                Response::error(
                    esc_html__('Are you sure you want to replace the address below with the new address?', 'chainium'),
                    'ADDRESS_CHANGE',
                    [
                        'oldAddress' => $wlUser->walletAddress,
                        'newAddress' => $request->get_param('address')
                    ]
                );
            }

            $wlUser = (new Models\User())->findOneByWalletAddress($request->get_param('address'));
            if ($wlUser && $wlUser->userId != User::$currentUserId) {
                Response::error(
                    esc_html__(
                        'This wallet address has already been matched with another account.',
                        'chainium'
                    ),
                    'MATCHING_ANOTHER_ACCOUNT',
                    null
                );
            }
        } catch (\Exception $e) {
            Response::error($e->getMessage());
        }

        Response::success();
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function removeMatching(WP_REST_Request $request): void
    {
        $address = $request->get_param('address');
        $signature = $request->get_param('signature');

        $this->signatureValidateProcess($address, $signature, function ($user): void {
            $user->delete();
        });

        Response::success(esc_html__('The matching has been successfully removed!', 'chainium'));
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function addressMatch(WP_REST_Request $request): void
    {
        $address = $request->get_param('address');
        $signature = $request->get_param('signature');

        $this->signatureValidateProcess($address, $signature, function ($user): void {
            $user->insert();
        });

        Response::success(esc_html__('The matching has been successfully completed!', 'chainium'));
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function addressChange(WP_REST_Request $request): void
    {
        $address = $request->get_param('address');
        $signature = $request->get_param('signature');

        $this->signatureValidateProcess($address, $signature, function ($user): void {
            $user->change();
        });

        Response::success(esc_html__('The address change has been successfully completed!', 'chainium'));
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function login(WP_REST_Request $request): void
    {
        User::$currentUserId = 0;
        $address = $request->get_param('address');
        $signature = $request->get_param('signature');
        $redirectTo = $this->getRedirectUrl($request->get_param('redirectTo'));

        $this->signatureValidateProcess($address, $signature, function ($user): void {
            $user->login();
        });

        Response::success(esc_html__('Successfully logged in!', 'chainium'), compact('redirectTo'));
    }

    /**
     * @param WP_REST_Request $request
     * @return void
     */
    public function register(WP_REST_Request $request): void
    {
        User::$currentUserId = 0;
        $email = $request->get_param('email');
        $username = $request->get_param('username');
        $address = $request->get_param('address');
        $signature = $request->get_param('signature');
        $redirectTo = $this->getRedirectUrl($request->get_param('redirectTo'));

        if (!$email || !$username) {
            Response::error(esc_html__('Please fill out the required fields.', 'chainium'));
        }

        if (false == is_email($email)) {
            Response::error(esc_html__('You entered an invalid email address!', 'chainium'));
        }

        if (false == validate_username($username)) {
            Response::error(esc_html__('You entered an invalid username!', 'chainium'));
        }

        if ((new Models\User())->findOneByWalletAddress($address)) {
            Response::error(esc_html__('This wallet address is already paired with an account!', 'chainium'));
        }

        if (email_exists($email)) {
            Response::error(esc_html__('This email address is already registered!', 'chainium'));
        } elseif (username_exists($username)) {
            Response::error(esc_html__('This username is already registered!', 'chainium'));
        }

        $this->signatureValidateProcess($address, $signature, function ($user) use ($username, $email): void {
            $user->registerAndLogin($username, $email);
        });

        Response::success(
            esc_html__(
                'Successfully registered & logged in! Your password has been sent to your email address.',
                'chainium'
            ),
            compact('redirectTo')
        );
    }

    /**
     * @param string $address
     * @param string $signature
     * @param callable $callback
     * @return void
     */
    private function signatureValidateProcess(string $address, string $signature, callable $callback): void
    {
        try {
            $user = new User($address);
        } catch (\Exception $e) {
            Response::error($e->getMessage());
        }

        if (!$user->validateHex($signature)) {
            Response::error(esc_html__('An invalid signature!', 'chainium'));
        }

        if ($user->verifySignature($signature)) {
            try {
                $callback($user);
            } catch (\Exception $e) {
                Response::error($e->getMessage(), $this->errorCodes[$e->getCode()]);
            }
        } else {
            Response::error(esc_html__('Signature err, try again.', 'chainium'));
        }
    }

    /**
     * @param string $redirectTo
     * @return string
     */
    private function getRedirectUrl(string $redirectTo): string
    {
        return $redirectTo ? $redirectTo : admin_url();
    }
}
