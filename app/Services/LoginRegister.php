<?php

declare(strict_types=1);

namespace BeycanPress\Chainium\Services;

use BeycanPress\Chainium\Settings;

class LoginRegister extends AbstractService
{
    /**
     * @return void
     */
    public function __construct()
    {
        if (!is_admin()) {
            if (Settings::get('wpLoginPage')) {
                add_action('login_form', [$this, 'loginButtonE']);
            }

            if (Settings::get('wcLoginPage')) {
                add_action('woocommerce_login_form', [$this, 'loginButtonE']);
            }

            add_action('init', function (): void {
                parent::__construct();
                add_shortcode('beycanpress-chainium-init', [$this, 'loginButton']);
            });
        }
    }

    /**
     * @return void
     */
    public function loginButtonE(): void
    {
        parent::__construct();
        echo wp_kses_post($this->loginButton(), [
            'style' => [
                'display' => true,
                'justify-content' => true,
            ]
        ]);
    }

    /**
     * @param array<mixed> $atts
     * @return string
     */
    public function loginButton(array $atts = []): string
    {
        extract(shortcode_atts([
            'logout' => true,
        ], $atts));

        $logout = 'false' === $logout ? false : true;

        ob_start();

        if ($logout && !is_user_logged_in() || !$logout) {
            $this->loadAssets();
            $this->loginRegisterTemplate();
        }

        if (is_user_logged_in() && $logout) {
            $currentUser = wp_get_current_user();
            printf(
                /* translators: %1$s: user display name */
                /* translators: %2$s: logout url */
                wp_kses(__('Hello, you are logged in as %1$s! (<a href="%2$s">Log out</a>)', 'chainium'), [
                    'a' => [
                        'href' => []
                    ]
                ]),
                '<strong>' . esc_html($currentUser->display_name) . '</strong>',
                esc_url(wp_logout_url())
            );
        }
        return ob_get_clean();
    }

    /**
     * @return void
     */
    public function loginRegisterTemplate(): void
    {
        // @phpcs:disable
        ?>
        <div class="chainium-center">
            <button class="chainium-connect button button-large" type="button" data-type="login-register">
                <?php echo esc_html__('Log In With a Crypto Wallet', 'chainium'); ?>
            </button>
        </div>
        <br>
        <?php
        // @phpcs:enable
    }
}
