<?php

declare(strict_types=1);

defined('ABSPATH') || exit;

// @phpcs:disable PSR1.Files.SideEffects
// @phpcs:disable Generic.Files.LineLength 

/**
 * Plugin Name: Chainium - Web3 Wallet Authenticator, Blockchain Connector
 * Version:     1.0.0
 * Plugin URI:  https://beycanpress.com/
 * Description: Chainium is Blockchain Connector for WordPress
 * Author:      BeycanPress LLC
 * Author URI:  https://beycanpress.com/about-us/
 * Text Domain: chainium
 * Domain Path: /languages
 * License:     GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Tags:        Blockchain, Wallet, Authenticator, Token, NFT
 * Requires at least: 5.0
 * Tested up to: 6.6.2
 * Requires PHP: 8.1
*/

require __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/vendor/beycanpress/csf/csf.php';

define('BEYCANPRESS_CHAINIUM_VERSION', '1.0.0');
define('BEYCANPRESS_CHAINIUM_PLUGIN_URL', plugin_dir_url(__FILE__));

new \BeycanPress\Chainium\Loader(__FILE__);
