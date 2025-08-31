import { strengthLevels } from "./constants";

export const getStrength = (password: string) => {
  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  if (!password) {
    return { score: 0, label: "", color: "", bgColor: "bg-gray-200", checks };
  }

  let score = Object.values(checks).filter(Boolean).length;

  return { score, checks, ...strengthLevels[score] };
};
