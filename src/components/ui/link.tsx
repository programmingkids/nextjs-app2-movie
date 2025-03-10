import Link from "next/link";
import {
  type Color,
  type ButtonLinkProps,
  type IconButtonLinkProps,
} from "@/types/ui";
import { createButtonLinkColorClassName } from "@/lib/ui";

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
