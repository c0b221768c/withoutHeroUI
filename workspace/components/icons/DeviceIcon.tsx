import { DeviceTabletIcon as Device } from "@heroicons/react/24/outline";
import { SvgProps } from "./types";

export function DeviceIcon({ ...rest }: SvgProps) {
	return <Device {...rest} />;
}
