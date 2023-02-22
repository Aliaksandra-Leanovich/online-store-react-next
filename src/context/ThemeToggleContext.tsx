import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { IThemeContextProviderProps } from './types';

interface IThemeContext {
  activeTheme: boolean;
  setActiveTheme: Dispatch<SetStateAction<boolean>>;
}

export const themeContextDefaultValue: IThemeContext = {
  activeTheme: false,
  setActiveTheme: () => false
};

export const ThemeContext = createContext<IThemeContext>(themeContextDefaultValue);
const ThemeUpdateContext = createContext(() => {});

export const ThemeToggleProvider = ({ children }: IThemeContextProviderProps) => {
  const [activeTheme, setActiveTheme] = useState(false);
  const toggleTheme = () => setActiveTheme(!activeTheme);

  const value = { activeTheme, setActiveTheme };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);
