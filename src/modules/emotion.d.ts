import "@emotion/react";

import { Theme as EmotionTheme } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
  export interface Theme {
    color: {
      primary: string;
      labelSlider: string;
      lightPrimary: string;
      lightPrimary2: string;
      secondary: string;
      text: string;
      text2: string;
      text3: string;
      textSlider: string;
      textSlider2: string;
      priceSliderNew: string;
      priceSliderOld: string;
      formBackground: string;
      formText: string;
      formInput: string;
      formPlaceholder: string;
    };
  }
}
