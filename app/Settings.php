<?php

declare(strict_types=1);

// @phpcs:disable Generic.Files.LineLength 

namespace BeycanPress\Chainium;

use CSF;

class Settings
{
    /**
     * @var array<mixed>|null
     */
    private static ?array $data = null;

    /**
     * constructor
     */
    public function __construct()
    {
        CSF::createOptions('chainium-settings', [
            'framework_title'         => 'Chainium' . ' <small>By BeycanPress</small>',

            // menu settings
            'menu_title'              => 'Settings',
            'menu_type'               => 'submenu',
            'menu_parent'             => 'chainium',
            'menu_slug'               => 'chainium-settings',
            'menu_capability'         => 'manage_options',
            'menu_position'           => 999,
            'menu_hidden'             => false,

            // menu extras
            'show_bar_menu'           => false,
            'show_sub_menu'           => false,
            'show_network_menu'       => true,
            'show_in_customizer'      => false,

            'show_search'             => true,
            'show_reset_all'          => true,
            'show_reset_section'      => true,
            'show_footer'             => true,
            'show_all_options'        => true,
            'sticky_header'           => true,
            'save_defaults'           => true,
            'ajax_save'               => true,

            // database model
            'transient_time'          => 0,

            // contextual help
            'contextual_help'         => [],

            // typography options
            'enqueue_webfont'         => false,
            'async_webfont'           => false,

            // others
            'output_css'              => false,

            // theme
            'theme'                   => 'dark',

            // external default values
            'defaults'                => [],
        ]);

        self::createSection([
            'id'     => 'generalOptions',
            'title'  => esc_html__('General options', 'chainium'),
            'icon'   => 'fa fa-cog',
            'fields' => [
                [
                    'id'      => 'dds',
                    'title'   => esc_html__('Data deletion status', 'chainium'),
                    'type'    => 'switcher',
                    'default' => false,
                    'help'    => esc_html__('This setting is passive come by default. You enable this setting. All data created by the plug-in will be deleted while removing the plug-in.', 'chainium')
                ],
                [
                    'id' => 'info',
                    'type' => 'content',
                    'title'   => esc_html__('Info', 'chainium'),
                    'content' => 'For the automatic registration process with Wallet, you must activate the “Anyone can register” option in WordPress General Settings.'
                ],
                [
                    'id' => 'shortCode',
                    'type' => 'content',
                    'title'   => esc_html__('Login button shortcode', 'chainium'),
                    'content' => '[beycanpress-chainium-init]<br><br>' . esc_html__('This shortcode is used to display the wallet login button.', 'chainium')
                ],
                [
                    'id' => 'shortCode2',
                    'type' => 'content',
                    'title'   => esc_html__('Matching button shortcode', 'chainium'),
                    'content' => '[beycanpress-chainium-matching]<br><br>' . esc_html__('This shortcode is used to match the wallet address with the user account.', 'chainium')
                ],
                [
                    'id' => 'loginRedirect',
                    'type'  => 'text',
                    'title' => esc_html__('Login redirect url', 'chainium'),
                    'help'  => esc_html__('After logging in, which address do you want to be forwarded to? If you type "same-page" it will redirect to the current page.', 'chainium'),
                    'sanitize' => function ($val) {
                        return sanitize_text_field($val);
                    }
                ],
                [
                    'id' => 'logoutRedirect',
                    'type'  => 'text',
                    'title' => esc_html__('Logout redirect url', 'chainium'),
                    'help'  => esc_html__('After logout, which address do you want to be forwarded to? If you type "same-page" it will redirect to the current page.', 'chainium'),
                    'sanitize' => function ($val) {
                        return sanitize_text_field($val);
                    }
                ],
                [
                    'id'      => 'wpLoginPage',
                    'title'   => esc_html__('WP Login page button', 'chainium'),
                    'type'    => 'switcher',
                    'default' => true,
                    'help'    => esc_html__('Let the wallet login button appear on the WordPress internal login page.', 'chainium')
                ],
                [
                    'id'      => 'wcLoginPage',
                    'title'   => esc_html__('WC Login page button', 'chainium'),
                    'type'    => 'switcher',
                    'default' => true,
                    'help'    => esc_html__('Let the wallet login button appear on the login page of WooCommerce.', 'chainium')
                ],
                [
                    'id'      => 'reownAppKitId',
                    'title'   => esc_html__('Reown AppKit ID (formerly WalletConnect)', 'chainium'),
                    'type'    => 'text',
                    'desc'    => esc_html__('Chainium is require Reown AppKit ID for Wallet Connection.', 'chainium') . '<a href="https://cloud.reown.com/sign-in" target="_blank">Reown Cloud (formerly WalletConnect)</a>'
                ]
            ]
        ]);

        self::createSection([
            'id'     => 'backup',
            'title'  => esc_html__('Backup', 'chainium'),
            'icon'   => 'fa fa-shield',
            'fields' => [
                [
                    'type'  => 'backup',
                    'title' => esc_html__('Backup', 'chainium')
                ],
            ]
        ]);
    }

    /**
     * Easy use for get_option
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        $settings = self::getAll();
        $val = $settings[$key] ?? null;
        return $val ? $val : $default;
    }

    /**
     * @return array<mixed>
     */
    public static function getAll(): array
    {
        if (is_null(self::$data)) {
            $data = get_option('chainium-settings', []);
            self::$data = is_array($data) ? $data : [];
        }

        return self::$data;
    }

    /**
     * @param array<mixed> $args
     * @return void
     */
    public static function createSection(array $args): void
    {
        CSF::createSection('chainium-settings', $args);
    }
}
