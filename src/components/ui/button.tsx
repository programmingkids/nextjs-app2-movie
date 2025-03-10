import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
  type Color,
  type ButtonProps,
  type LoadingButtonProps,
  type IconButtonProps,
  type CircleIconButtonProps,
} from "@/types/ui";

import {
  createButtonColorClassName,
  createLoadingButtonColorClassName,
  createIconButtonColorClassName,
  createCircleIconButtonColorClassName,
} from "@/lib/ui";

export function Button({
  type = "button",
  label,
  disabled = false,
  onClick,
  full,
  color,
}: ButtonProps) {
  const cn = createButtonColorClassName(color);
  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export function LoadingButton({
  type = "button",
  label,
  disabled = false,
  onClick,
  full,
  color,
  isProcessing,
}: LoadingButtonProps) {
  const cn = createLoadingButtonColorClassName(color);
  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {label}
      {isProcessing && (
        <AiOutlineLoading3Quarters className="inline-block h-6 w-6 ml-3 animate-spin" />
      )}
    </button>
  );
}

export function IconButton({
  type = "button",
  label,
  disabled = false,
  onClick,
  full,
  color,
  icon,
}: IconButtonProps) {
  const cn = createIconButtonColorClassName(color);
  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {icon}
      <span className="align-middle">{label}</span>
    </button>
  );
}

export function CircleIconButton({
  type = "button",
  disabled = false,
  onClick,
  color,
  icon,
}: CircleIconButtonProps) {
  const cn = createCircleIconButtonColorClassName(color);
  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {icon}
    </button>
  );
}
