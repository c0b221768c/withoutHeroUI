"use client";

import { LocaleIcon, DarkIcon, LightIcon, UserIcon } from "@/components/icons";
import { ThemeToggle } from "../ui/ThemeToggle";
import { usePreferences } from "@/hooks/usePreferences";

const buttonStyle = "w-8 h-8 flex justify-center items-center"

export const Header = () => {
	const { theme, toggleTheme } = usePreferences();
	return (
		<header className="h-10 bg-red-400 flex justify-between px-4">
			{/* 左: タイトル */}
			<p className="flex items-center text-lg font-semibold tracking-wide text-white">Netfleece Web</p>

			{/* 右: 操作メニュー */}
			<div className="flex items-center gap-3">
				{/* 言語切り替えボタン */}
				<div className={buttonStyle}>
					<LocaleIcon className="size-5 text-white" />
				</div>

				{/* テーマ切り替えボタン */}
				<div onClick={toggleTheme} className={buttonStyle}>
					{theme == "light" 
          ? <LightIcon className="size-5 text-white"/> 
          : <DarkIcon className="size-5 text-white"/>}
				</div>
				{/* <ThemeToggle /> */}

				{/* ユーザーアイコン */}
				<div className={buttonStyle}>
					<UserIcon className=" size-8 text-white" />
				</div>
			</div>
		</header>
	);
};
