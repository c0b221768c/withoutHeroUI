"use client";
import { usePathname } from "next/navigation";
export function useNavActive(href: string) {
	const pathname = usePathname();
	return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
