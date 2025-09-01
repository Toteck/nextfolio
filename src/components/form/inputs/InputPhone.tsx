import type { FormInputProps } from "./types";
export function InputPhone({ label, value, onChange }: FormInputProps) {
  const inputId = `phone-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="tel" // Use o tipo 'tel' para telefones
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Digite seu ${label.toLowerCase()}`}
      />
    </div>
  );
}
