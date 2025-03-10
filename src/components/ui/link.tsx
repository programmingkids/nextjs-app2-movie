import Link from "next/link";
import {
  type Color,
  type ButtonLinkProps,
  type IconButtonLinkProps,
  buttonLinkColor,
  defaultButtonLinkColor,
} from "@/types/ui";

function createButtonLinkColorClassName(color?: Color) {
  const c = buttonLinkColor[color as Color] ?? defaultButtonLinkColor;
  return `inline-block rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 ${c}`;
}

export function ButtonLink({ href, text, color, blank }: ButtonLinkProps) {
  const cn = createButtonLinkColorClassName(color);
  return (
    <Link className={cn} href={href} {...(blank && { target: "_blank" })}>
      {text}
    </Link>
  );
}

export function IconButtonLink({
  href,
  text,
  color,
  blank,
  icon,
}: IconButtonLinkProps) {
  const cn = createButtonLinkColorClassName(color);
  return (
    <Link className={cn} href={href} {...(blank && { target: "_blank" })}>
      {icon}
      <span className="align-middle">{text}</span>
    </Link>
  );
}
