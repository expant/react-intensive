import { createContext, useState } from "react";
import type { Theme, ThemeContextType, ThemeProviderProps } from "./types";

const defaultTheme: Theme = "light";

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === defaultTheme ? "dark" : defaultTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
