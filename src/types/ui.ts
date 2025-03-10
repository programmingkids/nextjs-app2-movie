import { z } from "zod";

export type Color =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone";

// Button
export type ButtonProps = {
  type: "button" | "submit";
  label: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  full?: true;
  color?: Color;
};

export type LoadingButtonProps = ButtonProps & {
  isProcessing: boolean;
};

export type IconButtonProps = ButtonProps & {
  icon: React.ReactNode;
};

export type CircleIconButtonProps = Omit<IconButtonProps, "full">;

// Link
export type ButtonLinkProps = {
  color: Color;
  href: string;
  text: string;
  blank?: boolean;
};

export type IconButtonLinkProps = ButtonLinkProps & {
  icon: React.ReactNode;
};

export type SpinnerProps = {
  color: Color;
};
