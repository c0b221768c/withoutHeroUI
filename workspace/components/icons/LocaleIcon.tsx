import { LanguageIcon as Locale } from "@heroicons/react/24/outline";
import { SvgProps } from "./types";

export function LocaleIcon({ ...rest }: SvgProps) {
	return <Locale {...rest} />;
}
