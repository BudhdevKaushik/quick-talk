import React from "react";
import { getStrength } from "../../utils/functions";

const PasswordStrength: React.FC<{ password: string }> = ({ password }) => {
  const strength = getStrength(password);

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      {/* Strength bar */}
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
              level <= strength.score ? strength?.bgColor : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Strength label */}
      <div className={`text-xs font-medium ${strength.color}`}>
        {strength.label}
      </div>
    </div>
  );
};

export default PasswordStrength;
