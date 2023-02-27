import '@emotion/react';

import { Theme as EmotionTheme } from './styles/theme';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
  export interface Theme {
    color: {
      [key: string]: string;
    };

    fontWeight: {
      bold: string;
      extrabold: string;
      medium: string;
      semibold: string;
    };

    fontFamily: {
      [key: string]: string;
    };

    backgrounds: {
      logo: string;
      main: string;
      advantages: string;
      form: string;
    };

    products: {
      product1: string;
      product2: string;
      product3: string;
      product4: string;
      product5: string;
      product6: string;
      product7: string;
    };

    payments: {
      mir: {
        src: string;
        width: string;
        height: string;
      };

      google: {
        src: string;
        width: string;
        height: string;
      };

      visa: {
        src: string;
        width: string;
        height: string;
      };

      webmoney: {
        src: string;
        width: string;
        height: string;
      };

      yandex: {
        src: string;
        width: string;
        height: string;
      };

      mastercard: {
        src: string;
        width: string;
        height: string;
      };
    };

    socials: {
      telegram: string;
      ok: string;
      facebook: string;
      whatsapp: string;
      viber: string;
      instargram: string;
      vk: string;
    };
  }
}
