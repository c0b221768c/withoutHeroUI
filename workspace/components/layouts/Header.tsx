'use client'

import { LocaleIcon,DarkIcon } from "@/components/icons"
import { ThemeToggle } from "../ui/ThemeToggle"

export const Header = () => {
  return (
    <header className="h-10 bg-black">
      {/* 左: タイトル */}
      <div className="text-lg font-semibold tracking-wide">
        Netfleece Web
      </div>

      {/* 右: 操作メニュー */}
      <div className="flex items-center gap-3">
        <LocaleIcon className="size-1"/>
        <ThemeToggle />

        {/* ユーザーアイコン */}
        <button
          className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center"
          aria-label="User menu"
        >
          👤
        </button>
      </div>
    </header>
  )
}