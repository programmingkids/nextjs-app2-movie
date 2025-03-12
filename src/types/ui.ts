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

export type Size = "small" | "base" | "large";
export type Full = "full" | "base";

// Button
export type ButtonProps = {
  type: "button" | "submit";
  label: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  full?: true;
  color?: Color;
  size?: Size;
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

export type BtnStyleArgsType = {
  color?: Color;
  size?: Size;
  full?: boolean;
  className?: string;
};

export type CircleIconBtnStyleArgsType = {
  color?: Color;
  size?: Size;
  className?: string;
};
