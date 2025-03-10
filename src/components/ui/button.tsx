import { useMemo } from "react";
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
  createFullClassName,
} from "@/lib/ui";

export function Button({
  type = "button",
  label,
  disabled = false,
  onClick,
  full,
  color,
}: ButtonProps) {
  const cn = useMemo(
    () => createFullClassName(full, createButtonColorClassName(color)),
    [color, full],
  );
  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export function LoadingButton({
  type = "button",
  label,
  disabled,
  onClick,
  full,
  color,
  isProcessing,
}: LoadingButtonProps) {
  const cn = useMemo(
    () => createFullClassName(full, createLoadingButtonColorClassName(color)),
    [color, full],
  );
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
  const cn = useMemo(
    () => createFullClassName(full, createIconButtonColorClassName(color)),
    [color, full],
  );
  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {icon}
      <span className="align-middle">{label}</span>
    </button>
  );
}

export function CircleIconButton({
  type = "button",
  label,
  disabled = false,
  onClick,
  color,
  icon,
}: CircleIconButtonProps) {
  const cn = useMemo(
    () => createCircleIconButtonColorClassName(color),
    [color],
  );
  return (
    <button
      type={type}
      className={cn}
      disabled={disabled}
      onClick={onClick}
      title={label}
    >
      {icon}
    </button>
  );
}
