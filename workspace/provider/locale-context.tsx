// provider/locale-context.tsx
"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import {
	getLocale,
	setLocale as persistLocale,
} from "@/lib/preferences/locale";

type Locale = "ja" | "en";

interface LocaleContextType {
	locale: Locale;
	setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
	const [locale, setLocaleState] = useState<Locale>("ja");

	useEffect(() => {
		const stored = getLocale();
		document.documentElement.lang = stored;
		setLocaleState(stored);
	}, []);

	const setLocale = (locale: Locale) => {
		document.documentElement.lang = locale;
		persistLocale(locale);
		setLocaleState(locale);
	};

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
			{children}
		</LocaleContext.Provider>
	);
};

export const useLocaleContext = (): LocaleContextType => {
	const context = useContext(LocaleContext);
	if (!context)
		throw new Error("useLocaleContext must be used within LocaleProvider");
	return context;
};
