import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
