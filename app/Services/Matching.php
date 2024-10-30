<?php

declare(strict_types=1);

namespace BeycanPress\Chainium\Services;

class Matching extends AbstractService
{
    /**
     * @return void
     */
    public function __construct()
    {
        if (!is_admin()) {
            add_action('init', function (): void {
                parent::__construct();
                add_shortcode('beycanpress-chainium-matching', [$this, 'matching']);
            });
        }
    }

    /**
     * @return string
     */
    public function matching(): string
    {
        if (is_user_logged_in()) {
            $this->loadAssets();
            // @phpcs:disable
            ob_start();
            ?>
            <?php if ($this->currentUser) : ?>
                <div class="already-matching">
                    <span class="matching-address">
                        <?php echo esc_html__('Matched address: ', 'chainium'); ?>
                        <?php echo esc_html($this->currentUser->walletAddress); ?>
                    </span>
                    <a href="#" class="chainium-connect" data-type="change-address"><?php echo esc_html__('Change address', 'chainium'); ?></a>
                    <a href="#" class="chainium-connect" data-type="remove-matching"><?php echo esc_html__('Remove matching', 'chainium'); ?></a>
                </div>
            <?php else : ?>
                <a href="#" class="chainium-connect" data-type="matching"><?php echo esc_html__('Match your account with your crypto wallet', 'chainium'); ?></a>
            <?php endif; ?>

            <br>
            <?php
            // @phpcs:enable
            return ob_get_clean();
        } else {
            return '';
        }
    }
}
