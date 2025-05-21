import {
	ChevronDoubleLeftIcon as LeftArrow,
	ChevronDoubleRightIcon as RightArrow,
} from "@heroicons/react/24/outline";
import { SvgProps } from "./types";

/**
 *
 * @param {boolean} isOpen true: Left(Close) / false: Right(Open)
 *
 */

export function ArrowIcon({ isOpen, ...rest }: { isOpen: boolean } & SvgProps) {
	return isOpen ? <LeftArrow {...rest} /> : <RightArrow {...rest} />;
}
