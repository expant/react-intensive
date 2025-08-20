import { useState, type PropsWithChildren } from "react";
import { ThemeContext } from "./context";
import type { Theme } from "./model/types";

const DEFAULT_THEME: Theme = "light";

export function ThemeProvider({ children }: PropsWithChildren) {
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
