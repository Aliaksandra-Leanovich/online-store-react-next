import { ReactNode } from "react";

export interface ITheme {
  color: {
    primary: string;
    Pink: string;
  };
}

export interface IThemeContextProviderProps {
  children: ReactNode;
}
