import { DarkIcon } from "./icons/DarkIcon";
import { LightIcon } from "./icons/LightIcon";
import { Button } from "../../../shared/ui/Button/Button";
import { useTheme } from "../../../shared/lib/theme/useTheme";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === "light" ? <LightIcon /> : <DarkIcon />;

  return (
    <Button variant="icon" className={theme} onClick={toggleTheme}>
      {icon}
    </Button>
  );
}
