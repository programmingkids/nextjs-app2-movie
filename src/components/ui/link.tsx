import Link from "next/link";
import {
  Color,
  ButtonLinkProps,
  IconButtonLinkProps,
  IconButtonProps,
} from "@/types/link";

const buttonLinkStye: { [key in Color]: string } = {
  blue: "inline-block rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-800",
  red: "inline-block rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-800",
  green:
    "inline-block rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-800",
  orange:
    "inline-block rounded-lg px-4 py-2 bg-orange-500 text-white hover:bg-orange-700 focus:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-800",
};

const buttonStye: { [key in Color]: string } = {
  blue: "rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-800",
  red: "rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-800",
  green:
    "rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-800",
  orange:
    "rounded-lg px-4 py-2 bg-orange-500 text-white hover:bg-orange-700 focus:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-800",
};

export const ButtonLink = function ({
  href,
  text,
  color,
  blank,
}: ButtonLinkProps) {
  const css = buttonLinkStye[color];
  return (
    <Link className={css} href={href} {...(blank && { target: "_blank" })}>
      {text}
    </Link>
  );
};

export const IconButtonLink = function ({
  href,
  text,
  color,
  blank,
  icon,
}: IconButtonLinkProps) {
  const css = buttonLinkStye[color];
  return (
    <Link className={css} href={href} {...(blank && { target: "_blank" })}>
      {icon}
      <span className="align-middle">{text}</span>
    </Link>
  );
};

export const IconButton = function ({
  text,
  color,
  icon,
  onClick,
}: IconButtonProps) {
  const css = buttonStye[color];
  return (
    <button className={css} onClick={onClick}>
      {icon}
      <span className="align-middle">{text}</span>
    </button>
  );
};
