<?php

declare(strict_types=1);

namespace BeycanPress\Chainium\Pages;

use BeycanPress\Chainium\Table;
use BeycanPress\Chainium\Models\User;

/**
 * User list page
 */
class UserList
{
    /**
     * Class construct
     * @return void
     */
    public function __construct()
    {
        add_action('admin_menu', function (): void {
            add_menu_page(
                esc_html__('User List', 'chainium'),
                esc_html__('Chainium', 'chainium'),
                'manage_options',
                'chainium',
                [$this, 'page'],
                'dashicons-admin-generic'
            );
            add_submenu_page(
                'chainium',
                esc_html__('User List', 'chainium'),
                esc_html__('User List', 'chainium'),
                'manage_options',
                'chainium',
                [$this, 'page']
            );
        });
    }

    /**
     * @return void
     */
    public function page(): void
    {
        $user = new User();
        $users = $user->getAll();

        $table = (new Table($users))->setColumns([
            'userId'         => esc_html__('User id', 'chainium'),
            'walletAddress'  => esc_html__('Wallet address', 'chainium'),
            'loginSignature' => esc_html__('Login signature', 'chainium'),
            'lastLoginDate'  => esc_html__('Last login date', 'chainium'),
            'matchedDate'    => esc_html__('Matched date', 'chainium'),
        ])
        ->setOrderQuery(['matchedDate', 'desc'])
        ->setOptions([
            'search' => [
                'id' => 'search-box',
                'title' => esc_html__('Search...', 'chainium')
            ]
        ])
        ->setSortableColumns([
            'matchedDate',
            'lastLoginDate'
        ])
        ->createDataList();

        $this->render($table);
    }

    /**
     * @param Table $table
     * @return void
     */
    public function render(Table $table): void
    {
        // @phpcs:disable
        ?>
        <div class="wrap">
            <h1 class="wp-heading-inline">
                <?php echo esc_html__('User list', 'chainium'); ?>
            </h1>
            <hr class="wp-header-end">
            <br>
            <?php echo wp_kses_post($table->renderWpTable()); ?>
        </div>
        <?php
        // @phpcs:enable
    }
}
