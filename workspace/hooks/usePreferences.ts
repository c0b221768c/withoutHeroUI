import { useThemeContext } from "@/provider/theme-context";
import { useLocaleContext } from "@/provider/locale-context";

export const usePreferences = () => {
	const { theme, setTheme, toggleTheme } = useThemeContext();
	const { locale, setLocale } = useLocaleContext();

	return {
		theme,
		setTheme,
		toggleTheme,
		locale,
		setLocale,
	};
};
