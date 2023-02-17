import { createContext, useContext, useState } from "react";
import { IThemeContextProviderProps } from "./types";

export const ThemeContext = createContext(true);

const ThemeUpdateContext = createContext(() => {});

export const ThemeToggleProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [activeTheme, setActiveTheme] = useState(false);
  const toggleTheme = () => setActiveTheme(!activeTheme);

  return (
    <ThemeContext.Provider value={activeTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);
