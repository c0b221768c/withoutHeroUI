type Theme = "light" | "dark";

const STORAGE_KEY = "pref-theme";

export function getTheme(): Theme {
	if (typeof window === "undefined") return "light";
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === "dark" ? "dark" : "light";
}

export function setTheme(theme: Theme) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY, theme);
}
