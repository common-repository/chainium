<?php

declare(strict_types=1);

namespace BeycanPress\Chainium\Services;

use BeycanPress\Chainium\Lang;
use BeycanPress\Chainium\RestAPI;
use BeycanPress\Chainium\Settings;
use BeycanPress\Chainium\Models\User;

class AbstractService
{
    /**
     * @var RestAPI|null
     */
    protected ?RestAPI $api = null;

    /**
     * @var bool
     */
    protected bool $loaded = false;

    /**
     * @var object|null
     */
    protected ?object $currentUser;

    /**
     * @var string
     */
    protected string $imagesUrl;

    /**
     * @return void
     */
    public function __construct()
    {
        $this->imagesUrl = BEYCANPRESS_CHAINIUM_PLUGIN_URL . 'assets/images/';
        $this->currentUser = (new User())->findOneByUserId(get_current_user_id());
        $this->api = !$this->api ? new RestAPI() : $this->api;
    }

    /**
     * @param string $key
     * @param array<string> $deps
     * @return string
     */
    private function addScript(string $key, array $deps = []): string
    {
        wp_enqueue_script(
            'beycanpress-chainium-' . $key,
            BEYCANPRESS_CHAINIUM_PLUGIN_URL . 'assets/' . $key,
            $deps,
            BEYCANPRESS_CHAINIUM_VERSION,
            true
        );

        return 'beycanpress-chainium-' . $key;
    }

    /**
     * @param string $key
     * @return void
     */
    private function addStyle(string $key): void
    {
        wp_enqueue_style(
            'beycanpress-chainium-' . $key,
            BEYCANPRESS_CHAINIUM_PLUGIN_URL . 'assets/' . $key,
            [],
            BEYCANPRESS_CHAINIUM_VERSION
        );
    }

    /**
     * @return void
     */
    protected function loadAssets(): void
    {
        if (false == $this->loaded && !is_admin()) {
            global $pagenow;
            $dataRedirect = Settings::get('loginRedirect');
            $dataRedirect = 'wp-login.php' == $pagenow && 'same-page' == $dataRedirect ? '' : $dataRedirect;

            $this->loaded = true;
            $this->addStyle('css/main.css');
            $this->addScript('js/reown.js');
            $this->addScript('js/sweetalert2.js');
            $mainJsKey = $this->addScript('js/main.js', ['jquery']);
            wp_localize_script($mainJsKey, 'Chainium', [
                'lang' => Lang::get(),
                'redirectUrl' => $dataRedirect,
                'apiUrl' => home_url('?rest_route=/chainium-api'),
                'reownAppKitId' => Settings::get('reownAppKitId'),
            ]);
        }
    }
}
