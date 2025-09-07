
import React from "react";

type ButtonVariant = "primary" | "secondary" | "remove"

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  tooltip?: string;
}; 

export function Button({label, onClick, variant = "primary", icon, iconOnly, tooltip}: ButtonProps) {
  const baseClasses = `rounded p-2 mt-4 transition-colors cursor-pointer flex items-center space-x-2 
    ${iconOnly ? "w-auto p-2" : "w-auto p-2 justify-center"}`;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "text-white bg-blue-500 hover:bg-blue-800 mb-4 obj",
    secondary: "text-gray-600 border border-gray-400 hover:bg-gray-100",
    remove: "text-white bg-red-500 hover:text-white hover:bg-red-800"
  }

  return (
    <>
      <div className="relative inline-block group">
        <button
          type="button"
          onClick={onClick}
          className={`${baseClasses} ${variantClasses[variant]}`}
        >
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </button>

        {/* Tooltip */}
        {tooltip && (
          <span
            className="
            absolute bottom-full left-1/2 transform -translate-x-1/2 
            bg-gray-800 text-white text-sm rounded-md px-2 py-1 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-opacity duration-300 whitespace-nowrap z-10
          "
          >
            {tooltip}
          </span>
        )}
      </div>
    </>
  );
}
