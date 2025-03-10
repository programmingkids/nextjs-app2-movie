import { type Color } from "@/types/ui";

// w-full
export function createFullClassName(
  full: boolean | undefined,
  className: string,
) {
  return full ? `w-full ${className}` : className;
}

// Button
export const buttonColor: { [key in Color]: string } = {
  red: "text-white bg-red-500 hover:bg-red-700 focus:ring-red-800 disabled:bg-red-200",
  orange:
    "text-white bg-orange-500 hover:bg-orange-700 focus:ring-orange-800 disabled:bg-orange-200",
  amber:
    "text-white bg-amber-500 hover:bg-amber-700 focus:ring-amber-800 disabled:bg-amber-200",
  yellow:
    "text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-800 disabled:bg-yellow-200",
  lime: "text-white bg-lime-500 hover:bg-lime-700 focus:ring-lime-800 disabled:bg-lime-200",
  green:
    "text-white bg-green-500 hover:bg-green-700 focus:ring-green-800 disabled:bg-green-200",
  emerald:
    "text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-emerald-800 disabled:bg-emerald-200",
  teal: "text-white bg-teal-500 hover:bg-teal-700 focus:ring-teal-800 disabled:bg-teal-200",
  cyan: "text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-cyan-800 disabled:bg-cyan-200",
  sky: "text-white bg-sky-500 hover:bg-sky-700 focus:ring-sky-800 disabled:bg-sky-200",
  blue: "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 disabled:bg-blue-200",
  indigo:
    "text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-800 disabled:bg-indigo-200",
  violet:
    "text-white bg-violet-500 hover:bg-violet-700 focus:ring-violet-800 disabled:bg-violet-200",
  purple:
    "text-white bg-purple-500 hover:bg-purple-700 focus:ring-purple-800 disabled:bg-purple-200",
  fuchsia:
    "text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-fuchsia-800 disabled:bg-fuchsia-200",
  pink: "text-white bg-pink-500 hover:bg-pink-700 focus:ring-pink-800 disabled:bg-pink-200",
  rose: "text-white bg-rose-500 hover:bg-rose-700 focus:ring-rose-800 disabled:bg-rose-200",
  slate:
    "text-white bg-slate-500 hover:bg-slate-700 focus:ring-slate-800 disabled:bg-slate-200",
  gray: "text-white bg-gray-500 hover:bg-gray-700 focus:ring-gray-800 disabled:bg-gray-200",
  zinc: "text-white bg-zinc-500 hover:bg-zinc-700 focus:ring-zinc-800 disabled:bg-zinc-200",
  neutral:
    "text-white bg-neutral-500 hover:bg-neutral-700 focus:ring-neutral-800 disabled:bg-neutral-200",
  stone:
    "text-white bg-stone-500 hover:bg-stone-700 focus:ring-stone-800 disabled:bg-stone-200",
} as const;

export const defaultButtonColor =
  "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 disabled:bg-blue-200";

export function createButtonColorClassName(color?: Color) {
  const c1 = buttonColor[color as Color] ?? defaultButtonColor;
  return `inline-block rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 ${c1}`;
}

// LoadingButton
export const loadingButtonColor: { [key in Color]: string } = {
  red: "text-white bg-red-500 hover:bg-red-700 focus:ring-red-800 disabled:bg-red-200",
  orange:
    "text-white bg-orange-500 hover:bg-orange-700 focus:ring-orange-800 disabled:bg-orange-200",
  amber:
    "text-white bg-amber-500 hover:bg-amber-700 focus:ring-amber-800 disabled:bg-amber-200",
  yellow:
    "text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-800 disabled:bg-yellow-200",
  lime: "text-white bg-lime-500 hover:bg-lime-700 focus:ring-lime-800 disabled:bg-lime-200",
  green:
    "text-white bg-green-500 hover:bg-green-700 focus:ring-green-800 disabled:bg-green-200",
  emerald:
    "text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-emerald-800 disabled:bg-emerald-200",
  teal: "text-white bg-teal-500 hover:bg-teal-700 focus:ring-teal-800 disabled:bg-teal-200",
  cyan: "text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-cyan-800 disabled:bg-cyan-200",
  sky: "text-white bg-sky-500 hover:bg-sky-700 focus:ring-sky-800 disabled:bg-sky-200",
  blue: "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 disabled:bg-blue-200",
  indigo:
    "text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-800 disabled:bg-indigo-200",
  violet:
    "text-white bg-violet-500 hover:bg-violet-700 focus:ring-violet-800 disabled:bg-violet-200",
  purple:
    "text-white bg-purple-500 hover:bg-purple-700 focus:ring-purple-800 disabled:bg-purple-200",
  fuchsia:
    "text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-fuchsia-800 disabled:bg-fuchsia-200",
  pink: "text-white bg-pink-500 hover:bg-pink-700 focus:ring-pink-800 disabled:bg-pink-200",
  rose: "text-white bg-rose-500 hover:bg-rose-700 focus:ring-rose-800 disabled:bg-rose-200",
  slate:
    "text-white bg-slate-500 hover:bg-slate-700 focus:ring-slate-800 disabled:bg-slate-200",
  gray: "text-white bg-gray-500 hover:bg-gray-700 focus:ring-gray-800 disabled:bg-gray-200",
  zinc: "text-white bg-zinc-500 hover:bg-zinc-700 focus:ring-zinc-800 disabled:bg-zinc-200",
  neutral:
    "text-white bg-neutral-500 hover:bg-neutral-700 focus:ring-neutral-800 disabled:bg-neutral-200",
  stone:
    "text-white bg-stone-500 hover:bg-stone-700 focus:ring-stone-800 disabled:bg-stone-200",
} as const;

export const defaultLoadingButtonColor =
  "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 disabled:bg-blue-200";

export function createLoadingButtonColorClassName(color?: Color) {
  const c1 = loadingButtonColor[color as Color] ?? defaultLoadingButtonColor;
  return `inline-block rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 ${c1}`;
}

// IconButton
export const iconButtonColor: { [key in Color]: string } = {
  red: "bg-red-500 text-white hover:bg-red-700 focus:ring-red-800",
  orange: "bg-orange-500 text-white hover:bg-orange-700 focus:ring-orange-800",
  amber: "bg-amber-500 text-white hover:bg-amber-700 focus:ring-amber-800",
  yellow: "bg-yellow-500 text-white hover:bg-yellow-700 focus:ring-yellow-800",
  lime: "bg-lime-500 text-white hover:bg-lime-700 focus:ring-lime-800",
  green: "bg-green-500 text-white hover:bg-green-700 focus:ring-green-300",
  emerald:
    "bg-emerald-500 text-white hover:bg-emerald-700 focus:ring-emerald-800",
  teal: "bg-teal-500 text-white hover:bg-teal-700 focus:ring-teal-800",
  cyan: "bg-cyan-500 text-white hover:bg-cyan-700 focus:ring-cyan-800",
  sky: "bg-sky-500 text-white hover:bg-sky-700 focus:ring-sky-800",
  blue: "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-800",
  indigo: "bg-indigo-500 text-white hover:bg-indigo-700 focus:ring-indigo-800",
  violet: "bg-violet-500 text-white hover:bg-violet-700 focus:ring-violet-800",
  purple: "bg-purple-500 text-white hover:bg-purple-700 focus:ring-purple-800",
  fuchsia:
    "bg-fuchsia-500 text-white hover:bg-fuchsia-700 focus:ring-fuchsia-800",
  pink: "bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-800",
  rose: "bg-rose-500 text-white hover:bg-rose-700 focus:ring-rose-800",
  slate: "bg-slate-500 text-white hover:bg-slate-700 focus:ring-slate-800",
  gray: "bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-800",
  zinc: "bg-zinc-500 text-white hover:bg-zinc-700 focus:ring-zinc-800",
  neutral:
    "bg-neutral-500 text-white hover:bg-neutral-700 focus:ring-neutral-800",
  stone: "bg-stone-500 text-white hover:bg-stone-700 focus:ring-stone-800",
} as const;

export const defaultIconButtonColor =
  "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-800";

export function createIconButtonColorClassName(color?: Color) {
  const c1 = iconButtonColor[color as Color] ?? defaultIconButtonColor;
  return `rounded-lg px-4 py-2 focus:outline-none focus:ring-4 ${c1}`;
}

// CircleIconButton

export const circleIconButtonColor: { [key in Color]: string } = {
  red: "text-white bg-red-500 hover:bg-red-800 focus:ring-red-300",
  orange: "text-white bg-orange-500 hover:bg-orange-700 focus:ring-red-300",
  amber: "text-white bg-amber-500 hover:bg-amber-800 focus:ring-amber-300",
  yellow: "text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-yellow-300",
  lime: "text-white bg-lime-500 hover:bg-lime-800 focus:ring-lime-300",
  green:
    "text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-800",

  emerald:
    "text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-emerald-300",
  teal: "text-white bg-teal-500 hover:bg-teal-800 focus:ring-teal-300",
  cyan: "text-white bg-cyan-500 hover:bg-cyan-800 focus:ring-cyan-300",
  sky: "text-white bg-sky-500 hover:bg-sky-800 focus:ring-sky-300",
  blue: "text-white bg-blue-500 hover:bg-blue-800 focus:ring-blue-300",
  indigo: "text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-indigo-300",
  violet: "text-white bg-violet-500 hover:bg-violet-800 focus:ring-violet-300",
  purple: "text-white bg-purple-500 hover:bg-purple-800 focus:ring-purple-300",
  fuchsia:
    "text-white bg-fuchsia-500 hover:bg-fuchsia-800 focus:ring-fuchsia-300",
  pink: "text-white bg-pink-500 hover:bg-pink-800 focus:ring-pink-800",
  rose: "text-white bg-rose-500 focus:ring-rose-800",
  slate: "text-white bg-slate-500 hover:bg-slate-800 focus:ring-slate-300",
  gray: "text-white bg-gray-500 hover:bg-gray-800 focus:ring-gray-300",
  zinc: "text-white bg-zinc-500 hover:bg-zinc-800 focus:ring-zinc-300",
  neutral:
    "text-white bg-neutral-500 hover:bg-neutral-800 focus:ring-neutral-300",
  stone: "text-white bg-stone-500 hover:bg-stone-800 focus:ring-stone-300",
} as const;

export const defaultCircleIconButtonColor =
  "text-white bg-blue-500 hover:bg-blue-800 focus:ring-blue-300";

export function createCircleIconButtonColorClassName(color?: Color) {
  const c1 =
    circleIconButtonColor[color as Color] ?? defaultCircleIconButtonColor;
  return `inline-flex items-center me-2 p-2.5 text-sm font-medium text-center rounded-full focus:outline-none focus:ring-4 ${c1}`;
}

// ButtonLink
export const buttonLinkColor: { [key in Color]: string } = {
  red: "text-white bg-red-500 hover:bg-red-700 focus:ring-red-800",
  orange: "text-white bg-orange-500 hover:bg-orange-700 focus:ring-orange-800",
  amber: "text-white bg-amber-500 hover:bg-amber-700 focus:ring-amber-800",
  yellow: "text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-800",
  lime: "text-white bg-lime-500 hover:bg-lime-700 focus:ring-lime-800",
  green: "text-white bg-green-500 hover:bg-green-700 focus:ring-green-800",
  emerald:
    "text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-emerald-800",
  teal: "text-white bg-teal-500 hover:bg-teal-700 focus:ring-teal-800",
  cyan: "text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-cyan-800",
  sky: "text-white bg-sky-500 hover:bg-sky-700 focus:ring-sky-800",
  blue: "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-800",
  indigo: "text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-800",
  violet: "text-white bg-violet-500 hover:bg-violet-700 focus:ring-violet-800",
  purple: "text-white bg-purple-500 hover:bg-purple-700 focus:ring-purple-800",
  fuchsia:
    "text-white bg-fuchsia-500 hover:bg-fuchsia-700 focus:ring-fuchsia-800",
  pink: "text-white bg-pink-500 hover:bg-pink-700 focus:ring-pink-800",
  rose: "text-white bg-rose-500 hover:bg-rose-700 focus:ring-rose-800",
  slate: "text-white bg-slate-500 hover:bg-slate-700 focus:ring-slate-800",
  gray: "text-white bg-gray-500 hover:bg-gray-700 focus:ring-gray-800",
  zinc: "text-white bg-zinc-500 hover:bg-zinc-700 focus:ring-zinc-800",
  neutral:
    "text-white bg-neutral-500 hover:bg-neutral-700 focus:ring-neutral-800",
  stone: "text-white bg-stone-500 hover:bg-stone-700 focus:ring-stone-800",
} as const;

export const defaultButtonLinkColor =
  "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-800";

export function createButtonLinkColorClassName(color?: Color) {
  const c1 = buttonLinkColor[color as Color] ?? defaultButtonLinkColor;
  return `inline-block rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 ${c1}`;
}

// LoadingSpinner
export const loadingSpinnerColor: { [key in Color]: string } = {
  red: "fill-red-600",
  orange: "fill-orange-600",
  amber: "fill-amber-600",
  yellow: "fill-yellow-600",
  lime: "fill-lime-600",
  green: "fill-green-600",
  emerald: "fill-emerald-600",
  teal: "fill-teal-600",
  cyan: "fill-cyan-600",
  sky: "fill-sky-600",
  blue: "fill-blue-600",
  indigo: "fill-indigo-600",
  violet: "fill-violet-600",
  purple: "fill-purple-600",
  fuchsia: "fill-fuchsia-600",
  pink: "fill-pink-600",
  rose: "fill-rose-600",
  slate: "fill-slate-600",
  gray: "fill-gray-600",
  zinc: "fill-zinc-600",
  neutral: "fill-neutral-600",
  stone: "fill-stone-600",
} as const;

export const defaultLoadingSpinnerColor = "fill-blue-600";

export function createSpinnerClassName(color?: Color) {
  const c = loadingSpinnerColor[color as Color] ?? defaultLoadingSpinnerColor;
  return `inline w-8 h-8 text-gray-200 animate-spin ${c}`;
}
