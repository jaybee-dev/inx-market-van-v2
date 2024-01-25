import { useTheme } from "../../hooks/useTheme.jsx";
import Switch from "../forms/Switch.jsx";

export default function ThemeSwitcher() {
  const { toggleTheme } = useTheme();
  return <Switch onClick={[toggleTheme, console.log('pouet')]} />;
}
