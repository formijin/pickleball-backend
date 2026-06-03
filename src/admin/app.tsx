import type { StrapiApp } from '@strapi/strapi/admin';
import loginLogo from './assets/logos/logo-white.svg';
import menuLogo from './assets/logos/logo-minimal.png';

export default {
  config: {
    auth: {
      logo: loginLogo,
    },
    menu: {
      logo: menuLogo,
    },
    locales: [],
  },
  bootstrap(_app: StrapiApp) {},
};
