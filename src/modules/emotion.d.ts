import "@emotion/react";

import { Theme as EmotionTheme } from "./styles/theme";

declare module "@emotion/react" {
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
  }
}
