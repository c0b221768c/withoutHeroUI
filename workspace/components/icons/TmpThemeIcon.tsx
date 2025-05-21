import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { SvgProps } from "./types";
import { isDarkTheme, type UserTheme } from "@/utils/theme";

/**
 *
 * @param theme "light" | "dark"
 *
 */

export function ThemeIcon({ theme, ...rest }: { theme: UserTheme } & SvgProps) {
	return isDarkTheme(theme) ? <MoonIcon {...rest} /> : <SunIcon {...rest} />;
}
