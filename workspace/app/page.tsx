"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
	const router = useRouter();

	useEffect(() => {
		const isLoggedIn = false; // あとでやろう
		if (isLoggedIn) {
			router.replace("/home");
		}
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center">
			<h1 className="text-2xl font-bold">Welcom NF WEB</h1>
			{/* TODO: ログインUI作成 */}
		</div>
	);
}
