<?php

declare(strict_types=1);

namespace BeycanPress\Chainium\Entity;

use BeycanPress\Chainium\Models\User as UserModel;
use MultipleChain\SignatureFactory\SignatureFactory;

class User
{
    /**
     * @var object|null
     */
    private ?object $user = null;

    /**
     * @var string
     */
    private string $signature;

    /**
     * @var object|null
     */
    private ?object $wlUser;

    /**
     * @var string
     */
    private string $address;

    /**
     * @var UserModel
     */
    private UserModel $userModel;

    /**
     * @var int
     */
    public static int $currentUserId = 0;

    /**
     * @param string $address
     */
    public function __construct(string $address)
    {
        if (!$this->validateAddress($address)) {
            throw new \Exception(esc_html__('An invalid wallet address!', 'chainium'));
        }

        $this->address = $address;

        $this->userModel = new UserModel();

        $this->attach();
    }

    /**
     * @param string $address
     * @return bool
     */
    public function validateAddress(string $address): bool
    {
        return (preg_match('/^0x[a-fA-F0-9]{40}$/', $address) >= 1);
    }

    /**
     * @param string $address
     * @return bool
     */
    public function validateHex(string $address): bool
    {
        return (preg_match('/^0x[a-fA-F0-9]*$/', $address) >= 1);
    }

    /**
     * @return string
     */
    public function getSignMessage(): string
    {
        $nonce = $this->createNewNonce($this->address);
        return 'chainium' . wp_hash($nonce . $this->getIp(), 'nonce');
    }

    /**
     * @return string|null
     */
    public static function getIp(): ?string
    {
        $ip = null;
        if (isset($_SERVER['REMOTE_ADDR'])) {
            $ip = esc_url_raw(wp_unslash($_SERVER['REMOTE_ADDR']));
            $ip = rest_is_ip_address($ip);
            if (false === $ip) {
                $ip = null;
            }
        }

        return $ip;
    }

    /**
     * New nonce create method
     * @param string|null $externalKey
     * @return string
     */
    public static function createNewNonce(?string $externalKey = null): string
    {
        return wp_create_nonce('chainium' . '_nonce' . $externalKey);
    }

    /**
     * @param string $signature
     * @return boolean
     */
    public function verifySignature(string $signature): bool
    {
        $message = $this->getSignMessage();

        if (!is_string($address = SignatureFactory::extractAddress($message, $signature))) {
            return false;
        }

        $this->signature = $signature;

        return strtolower($this->address) === strtolower($address);
    }

    /**
     * @param string $username
     * @param string $email
     * @return void
     */
    public function registerAndLogin(string $username, string $email): void
    {
        $this->register($username, $email);
        $this->login();
    }

    /**
     * @return object
     */
    public function login(): object
    {
        $this->attach();

        if (!$this->wlUser && !get_option('users_can_register')) {
            throw new \Exception(
                esc_html__('You have not registered on this site; we cannot log you in.', 'chainium'),
                1
            );
        } elseif (!$this->wlUser && get_option('users_can_register')) {
            throw new \Exception(esc_html__('A membership was not found. Do you want to register?', 'chainium'), 2);
        }

        clean_user_cache($this->user->ID);
        wp_clear_auth_cookie();

        wp_set_current_user($this->user->ID);
        wp_set_auth_cookie($this->user->ID, false);
        update_user_caches($this->user);

        $this->userModel->update(
            [
                'loginSignature' => $this->signature,
                'lastLoginDate' => current_time('mysql'),
            ],
            [
                'walletAddress' => $this->address,
                'userId' => $this->user->ID
            ]
        );

        return $this->user;
    }

    /**
     * @param string $username
     * @param string $email
     * @return object
     */
    public function register(string $username, string $email): object
    {
        $password = wp_generate_password();

        if (is_multisite()) {
            $userId = wpmu_create_user($username, $password, $email);
        } else {
            $userId = wp_create_user($username, $password, $email);
        }

        if (is_wp_error($userId) || !$userId) {
            throw new \Exception(esc_html__('Error during creation!', 'chainium'));
        }

        $subject = esc_html__('New user registration - Your Password', 'chainium');
        $headers = ['Content-Type: text/html; charset=UTF-8'];

        $body = sprintf(
            /* translators: %1$s username */
            /* translators: %1$s user pass */
            __(
                "
                Welcome aboard %s<br><br>
                Username: %1\$s<br>
                Password: %1\$s<br>
                Address: %3\$s",
                'chainium'
            ),
            $username,
            $password,
            $this->address
        );

        wp_mail($email, $subject, $body, $headers);

        $this->user = get_user_by('ID', $userId);

        $this->insert();

        return $this->user;
    }

    /**
     * @return void
     */
    private function attach(): void
    {
        $userId = 0;

        $this->wlUser = $this->getWlUser();

        if (self::$currentUserId) {
            $userId = self::$currentUserId;
        } elseif (isset($this->wlUser->userId)) {
            $userId = $this->wlUser->userId;
        }

        $user = get_user_by('ID', $userId);

        if ($user) {
            $this->user = $user;
        }
    }

    /**
     * @return void
     */
    public function insert(): void
    {
        $this->userModel->insert([
            'userId' => $this->user->ID,
            'loginSignature' => $this->signature,
            'walletAddress' => $this->address,
            'lastLoginDate'   => current_time('mysql'),
        ]);
    }

    /**
     * @return void
     */
    public function delete(): void
    {
        $this->userModel->delete([
            'walletAddress' => $this->address,
            'userId' => $this->user->ID
        ]);
    }

    /**
     * @return void
     */
    public function change(): void
    {
        $oldWalletAddress = $this->userModel->findOneByUserId($this->user->ID)->walletAddress;

        if ($this->userModel->findOneByWalletAddress($this->address)) {
            throw new \Exception(
                esc_html__('This wallet address has already been paired with another account!', 'chainium'),
                1
            );
        }

        $this->userModel->update(
            [
                'loginSignature' => $this->signature,
                'walletAddress'  => $this->address,
                'matchedDate'    => current_time('mysql'),
            ],
            [
                'walletAddress' => $oldWalletAddress,
                'userId' => $this->user->ID
            ]
        );
    }

    /**
     * @return object|null
     */
    public function getWlUser(): ?object
    {
        if (self::$currentUserId) {
            return $this->userModel->findOneByUserId(self::$currentUserId);
        } else {
            return $this->userModel->findOneByWalletAddress($this->address);
        }
    }
}
