
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) { // Enables Tailwind CSS (dynamic) class merging
  return twMerge(clsx(inputs))
}
