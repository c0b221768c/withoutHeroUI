// provider/theme-context.tsx
"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { getTheme, setTheme as persistTheme } from "@/lib/preferences/theme";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setThemeState] = useState<Theme>("light");

	useEffect(() => {
		const stored = getTheme();
		document.documentElement.setAttribute("data-theme", stored);
		setThemeState(stored);
	}, []);

	const setTheme = (theme: Theme) => {
		document.documentElement.setAttribute("data-theme", theme);
		persistTheme(theme);
		setThemeState(theme);
	};

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error("useThemeContext must be used within ThemeProvider");
	return context;
};
