type Locale = "ja" | "en";

const STORAGE_KEY = "pref-locale";

export function getLocale(): Locale {
	if (typeof window === "undefined") return "ja";
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === "en" ? "en" : "ja";
}

export function setLocale(locale: Locale) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY, locale);
}
