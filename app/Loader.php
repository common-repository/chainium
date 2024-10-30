<?php

declare(strict_types=1);

namespace BeycanPress\Chainium;

use BeycanPress\Chainium\Settings;
use BeycanPress\Chainium\Models\User;

class Loader
{
    /**
     * @param string $pluginFile
     * constructor
     */
    public function __construct(string $pluginFile)
    {
        new Services\Matching();
        new Services\LoginRegister();
        new OtherPlugins($pluginFile);

        if (Settings::get('logoutRedirect')) {
            add_filter('logout_url', function ($logoutUrl) {
                $redirectTo = 'same-page' == Settings::get('logoutRedirect')
                    ? $this->getCurrentUrl()
                    : Settings::get('logoutRedirect');
                return $logoutUrl . "&redirect_to=" . $redirectTo;
            });
        }

        add_action('wp_logout', function (): void {
            $host = isset($_SERVER['HTTP_HOST']) ? esc_url_raw(wp_unslash($_SERVER['HTTP_HOST'])) : '';
            setcookie("wl-connected", "", (time() - 3600), '/', $host);
        });

        if (is_admin()) {
            $this->adminProcess();
        }
    }

    /**
     * @return string
     */
    public static function getCurrentUrl(): string
    {
        $siteURL = explode('/', get_site_url());
        $requestURL = explode(
            '/',
            isset($_SERVER['REQUEST_URI'])
            ? esc_url_raw(wp_unslash($_SERVER['REQUEST_URI']))
            : ''
        );
        $currentURL = array_unique(array_merge($siteURL, $requestURL));
        return implode('/', $currentURL);
    }

    /**
     * @return void
     */
    public function adminProcess(): void
    {
        add_action('deleted_user', function ($userId): void {
            (new User())->delete([
                'userId' => $userId
            ]);
        });

        new Pages\UserList();

        if ('' == Settings::get('reownAppKitId')) {
            add_action('admin_notices', function (): void {
                echo '<div class="notice notice-error is-dismissible">
                    <p>' . esc_html__(
                    'Please enter an Reown AppKit ID for Wallet Connection process. - Chainium',
                    'chainium'
                ) . '</p>
                </div>';
            });
        }

        add_action('init', function (): void {
            new Settings();
        }, 9);
    }
}
