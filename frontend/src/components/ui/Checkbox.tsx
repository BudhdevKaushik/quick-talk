import React from "react";

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        {...props}
        id={props.name}
        className={`w-4 h-4 text-[var(--qt-primary)] border-[var(--qt-gray-300)] 
          rounded focus:ring-[var(--qt-primary)] ${className}`}
      />
      <label
        htmlFor={props.name}
        className="ml-2 text-[var(--qt-gray-600)] text-sm cursor-pointer"
      >
        {label}
      </label>

      {error && <p className="mt-1 text-sm text-[var(--qt-error)]">{error}</p>}
    </div>
  );
};

export default Checkbox;
