export type UserTheme = "light" | "dark";

export function isDarkTheme(theme: UserTheme): boolean {
	return theme === "dark";
}
