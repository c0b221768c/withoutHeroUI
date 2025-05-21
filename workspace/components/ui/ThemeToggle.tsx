"use client"

import { usePreferences } from "@/hooks/usePreferences"
import { DarkIcon, LightIcon } from "../icons"

export const ThemeToggle = () => {
    const {theme, toggleTheme} = usePreferences()

    return (
        <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition"
            aria-label="Toggle color theme"
        >
            {theme == "light" ? <LightIcon /> : <DarkIcon />}
        </button>
    )
}