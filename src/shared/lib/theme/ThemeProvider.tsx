import { useState } from "react";
import { ThemeContext } from "./context";
import type { Theme, ThemeProviderProps } from "./types";

const DEFAULT_THEME: Theme = "light";

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
