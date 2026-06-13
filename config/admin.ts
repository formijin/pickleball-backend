import type { Core } from '@strapi/strapi';

function getPreviewPathname(uid: string, document: { slug?: string } | null): string | null {
  switch (uid) {
    case 'api::press-release.press-release': {
      const slug = document?.slug?.trim();
      return slug ? `/press/${slug}` : '/press';
    }
    case 'api::site-setting.site-setting':
      return '/';
    default:
      return null;
  }
}

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL')].filter(Boolean),
      async handler(uid, { documentId, status }) {
        const clientUrl = env('CLIENT_URL');
        const previewSecret = env('PREVIEW_SECRET');

        if (!clientUrl || !previewSecret) {
          return null;
        }

        const document = await strapi.documents(uid as any).findOne({ documentId });
        const pathname = getPreviewPathname(uid, document as { slug?: string } | null);

        if (!pathname) {
          return null;
        }

        const query = new URLSearchParams({
          url: pathname,
          secret: previewSecret,
          status: status || 'draft',
        });

        return `${clientUrl}/api/preview?${query.toString()}`;
      },
    },
  },
});

export default config;
