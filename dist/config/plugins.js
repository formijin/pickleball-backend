"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env }) => ({
    email: {
        config: {
            provider: 'strapi-provider-email-brevo',
            providerOptions: {
                apiKey: env('BREVO_API_KEY'),
            },
            settings: {
                defaultSenderEmail: env('BREVO_SENDER_EMAIL', 'email@email.com'),
                defaultSenderName: env('BREVO_SENDER_NAME', 'Sender Name'),
                defaultReplyTo: env('BREVO_REPLY_TO', 'email@email.com'),
            },
        },
    },
});
exports.default = config;
