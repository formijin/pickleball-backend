import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
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

export default config;
