import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import PasswordStrength from "./PassowrdStrength";

const PasswordInputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  showStrength?: boolean;
}> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  showStrength = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`qt-input pr-10 ${
            error ? "border-[var(--qt-error)]" : ""
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {showStrength && <PasswordStrength password={value} />}

      {error && <p className="mt-1 text-sm text-[var(--qt-error)]">{error}</p>}
    </div>
  );
};

export default PasswordInputField;