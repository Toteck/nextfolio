type ButtonVariant = "primary" | "secondary" | "remove"

type ButtonProps = {
  label: string,
  onClick: () => void,
  variant?: ButtonVariant
} 

export function Button({label, onClick, variant = "primary"}: ButtonProps) {
  const baseClasses = "w-full rounded p-2 mt-4 transition-colors cursor-pointer"

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "text-blue-500 border border-blue-500 hover:bg-blue-50 mb-4",
    secondary: "text-gray-600 border border-gray-400 hover:bg-gray-100",
    remove: "text-red-500 border border-red-500 hover:text-red-500 hover:bg-red-100"
  }

  return <>
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {label}
    </button>
  </>;
}
