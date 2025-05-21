import "@/styles/globals.css";
// import "@/styles/tailwind.css";

import { PreferencesProvider } from "@/provider/preferences-provider";
import { Inter, Noto_Sans_JP } from "next/font/google";
import React from "react";

// const inter = Inter({ subsets: ["latin"], variable: "--font-latin" });
// const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-jp" });
const inter = Inter({
	subsets: ["latin"],
})
const noto = Noto_Sans_JP({
	subsets: ["latin"],
})

export const metadata = {
	title: "Netfleece Web",
	description: "Dashboard app",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja" className={inter.className}>
			<body>
				<PreferencesProvider>{children}</PreferencesProvider>
			</body>
		</html>
	);
}
