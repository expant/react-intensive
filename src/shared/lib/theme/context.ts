import { createContext } from "react";
import type { ThemeContextType } from "./model/types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => console.warn("Theme provider not initialized!"),
});
