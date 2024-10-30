<?php

declare(strict_types=1);

namespace BeycanPress\Chainium;

class Lang
{
    /**
     * Get language strings
     * @return array<string>
     */
    public static function get(): array
    {
        return [
            "old" => esc_html__("Old", 'chainium'),
            "new" => esc_html__("New", 'chainium'),
            "pleaseWait" => esc_html__("Please wait...", 'chainium'),
            "waitingConnection" => esc_html__("Establishing connection please wait!", 'chainium'),
            "requestRejected" => esc_html__('Request rejected', 'chainium'),
            "notFoundAcceptedChains" => esc_html__(
                'No active chains found, please contact the site administrator.',
                'chainium'
            ),
            "notDetected" => esc_html__('The wallet you want to connect to could not be detected!', 'chainium'),
            "connectionFailed" => esc_html__("There was a problem establishing the connection!", 'chainium'),
            "notFoundInfuraId" => esc_html__("WalletConnect Project ID is required for WalletConnect", 'chainium'),
            "somethingWentWrong" => esc_html__("Something went wrong!", 'chainium'),
            "signatureRequestDenied" => esc_html__("Signature request denied!", 'chainium'),
            "loginPleaseWait" => esc_html__("Logging in, please wait...", 'chainium'),
            "youMustSignToEnter" => esc_html__("You must sign to enter!", 'chainium'),
            "youMustSignToRemove" => esc_html__("You must sign to remove matching!", 'chainium'),
            "youMustSignToChange" => esc_html__("You must sign to address change!", 'chainium'),
            'alreadyProcessing' => esc_html__(
                "A connection request is already pending, check the wallet plugin!",
                'chainium'
            ),
            'removeMatching' => esc_html__('Remove matching', 'chainium'),
            'removeMatchingConfirm' => esc_html__('Yes, remove matching', 'chainium'),
            'removeMatchingQuestion' => esc_html__('Are you sure you want to remove the matching?', 'chainium'),
            'changeAddressConfirm' => esc_html__('Yes, change address', 'chainium'),
            'cancel' => esc_html__('Cancel', 'chainium'),
            'matchAgain' => esc_html__('You can then match again.', 'chainium'),
            'changeAgain' => esc_html__('You can then change again.', 'chainium'),
            'registerQuestion' => esc_html__('A membership was not found. Do you want to register?', 'chainium'),
            'register' => esc_html__('Register', 'chainium'),
            'pleaseFillOut' => esc_html__('Please fill out the registration form.', 'chainium'),
            'email' => esc_html__('Email', 'chainium'),
            'username' => esc_html__('Username', 'chainium'),
            'pleaseFillError' => esc_html__('Please fill out the required fields.', 'chainium'),
            'tryAgain' => esc_html__('Try again', 'chainium'),
            'reownAppKitIdNotFound' => esc_html__('Reown AppKit ID not found!', 'chainium'),
        ];
    }
}
