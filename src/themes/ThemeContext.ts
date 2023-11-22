import { createContext } from "react";

export const ThemeContext = createContext({
    isDarkTheme: false,
    setDarkTheme: (isDarkTheme : boolean) => {}, 
  });
