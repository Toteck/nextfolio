import type { FormInputProps } from "./types";

export function TextAreaResumo({ label, value, onChange }: FormInputProps) {
  const inputId = `resumo-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
  const maxLength = 500;

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={inputId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          maxLength={maxLength}
          className="w-full border border-gray-300 rounded-md p-2 pr-12 pb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={`Digite seu ${label.toLowerCase()}`}
        />
        <span className="absolute bottom-2 right-3 text-xs text-gray-500">
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}
