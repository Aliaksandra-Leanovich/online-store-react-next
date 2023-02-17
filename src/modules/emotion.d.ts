import "@emotion/react";

import { Theme as EmotionTheme } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
  export interface Theme {
    color: {
      primary: string;
      Pink: string;
    };
  }
}
