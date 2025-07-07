import { createContext, useState } from "react";
import type { Theme, ThemeContextType, ThemeProviderProps } from "./types";

const DEFAULT_THEME: Theme = "light";

export const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  toggleTheme: () => console.warn("Theme provider not initialized!"),
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const toggleTheme = () => {
    setTheme((prev) => (prev === DEFAULT_THEME ? "dark" : DEFAULT_THEME));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
