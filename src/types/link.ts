import { z } from "zod";

export type Color = "blue" | "red" | "green" | "orange";

export type ButtonLinkProps = {
  color: Color;
  href: string;
  text: string;
  blank?: boolean;
};

export type IconButtonLinkProps = ButtonLinkProps & {
  icon: React.ReactNode;
};

export type IconButtonProps = Pick<
  IconButtonLinkProps,
  "color" | "text" | "icon"
> & {
  onClick: () => void;
};

export type BottomNavigationIconLinkType = Pick<
  IconButtonLinkProps,
  "href" | "text" | "icon"
>;

export type CircleIconButtonProps = {
  color: Color;
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};
