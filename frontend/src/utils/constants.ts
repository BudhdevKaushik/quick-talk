import type { PasswordStrengthTypes } from "../types/common.types";

export const strengthLevels: Record<number, PasswordStrengthTypes> = {
  0: { label: "", color: "text-gray-400", bgColor: "bg-gray-200" },
  1: { label: "Very Weak", color: "text-red-500", bgColor: "bg-red-500" },
  2: { label: "Weak", color: "text-red-400", bgColor: "bg-red-400" },
  3: { label: "Fair", color: "text-yellow-500", bgColor: "bg-yellow-500" },
  4: { label: "Good", color: "text-green-500", bgColor: "bg-green-500" },
  5: { label: "Strong", color: "text-green-600", bgColor: "bg-green-600" },
};
