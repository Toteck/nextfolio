import type { FormInputProps } from "./types";

export function TextAreaResumo({ label, value, onChange }: FormInputProps) {
  const inputId = `resumo-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Digite seu ${label.toLowerCase()}`}
      />
    </div>
  );
}