import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      <input
        {...props}
        id={props.name}
        className={`qt-input ${error ? "border-[var(--qt-error)]" : ""} ${className}`}
      />

      {error && <p className="mt-1 text-sm text-[var(--qt-error)]">{error}</p>}
    </div>
  );
};

export default InputField;
