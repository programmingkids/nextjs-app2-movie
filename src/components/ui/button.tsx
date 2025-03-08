import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Color, CircleIconButtonProps } from "@/types/link";

const buttonLinkStye: { [key in Color]: string } = {
  blue: "inline-block rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-800 disabled:bg-blue-200",
  red: "inline-block rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-800 disabled:bg-red-200",
  green:
    "inline-block rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-800 disabled:bg-green-200",
  orange:
    "inline-block rounded-lg px-4 py-2 bg-orange-500 text-white hover:bg-orange-700 focus:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-800 disabled:bg-orange-200",
};

const buttonFullLinkStye: { [key in Color]: string } = {
  blue: "inline-block w-full rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-800 disabled:bg-blue-200",
  red: "inline-block w-full rounded-lg px-4 py-2 bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-800 disabled:bg-red-200",
  green:
    "inline-block w-full rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-800 disabled:bg-green-200",
  orange:
    "inline-block w-full rounded-lg px-4 py-2 bg-orange-500 text-white hover:bg-orange-700 focus:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-800 disabled:bg-orange-200",
};

const circleIconButtonStye: { [key in Color]: string } = {
  blue: "inline-flex items-center me-2 p-2.5 text-sm font-medium text-center text-white rounded-full bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",
  red: "inline-flex items-center me-2 p-2.5 text-sm font-medium text-center text-white rounded-full bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300",
  green:
    "inline-flex items-center me-2 p-2.5 text-sm font-medium text-center text-white rounded-full bg-green-500 hover:bg-blue-green focus:ring-4 focus:outline-none focus:ring-green-300",
  orange:
    "inline-flex items-center me-2 p-2.5 text-sm font-medium text-center text-white rounded-full bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300",
};

export function LoadingButton({
  label,
  onClick,
  type = "button",
  color,
  full,
  isProcessing,
  disabled,
}: {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit";
  full?: true;
  color: Color;
  isProcessing: boolean;
  disabled: boolean;
}) {
  const css = full ? buttonFullLinkStye[color] : buttonLinkStye[color];

  return (
    <button type={type} className={css} disabled={disabled} onClick={onClick}>
      {label}
      {isProcessing && (
        <AiOutlineLoading3Quarters className="inline-block h-6 w-6 ml-3 animate-spin" />
      )}
    </button>
  );
}

export function CircleIconButton({
  color,
  icon,
  text,
  onClick,
}: CircleIconButtonProps) {
  const css = circleIconButtonStye[color];
  return (
    <button type="button" className={css} onClick={onClick} title={text}>
      {icon}
    </button>
  );
}
