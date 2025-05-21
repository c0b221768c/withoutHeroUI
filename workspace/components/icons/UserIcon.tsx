import { UserCircleIcon as User } from "@heroicons/react/24/outline";
import { SvgProps } from "./types";

export function UserIcon({ ...rest }: SvgProps) {
	return <User {...rest} />;
}
