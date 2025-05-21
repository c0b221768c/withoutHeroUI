// provider/preferences-provider.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-context";
import { LocaleProvider } from "./locale-context";

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider>
			<LocaleProvider>{children}</LocaleProvider>
		</ThemeProvider>
	);
};
