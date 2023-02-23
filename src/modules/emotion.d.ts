import '@emotion/react';

import { Theme as EmotionTheme } from './styles/theme';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
  export interface Theme {
    color: {
      borderAdvantage: string;
      formBackground: string;
      formText: string;
      formInput: string;
      formPlaceholder: string;
      labelSlider: string;
      lightPrimary: string;
      lightPrimary2: string;
      navigationBackground: string;
      primary: string;
      priceSliderNew: string;
      priceSliderOld: string;
      secondary: string;
      sliderBackground: string;
      text: string;
      text2: string;
      text3: string;
      textSlider: string;
      textSlider2: string;
      textSlider3: string;
    };

    fontWeight: {
      bold: string;
      extrabold: string;
      medium: string;
      semibold: string;
    };

    fontFamily: {
      primary: string;
      secondary: string;
    };

    backgrounds: {
      logo: string;
      main: string;
      advantages: string;
      form: string;
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
