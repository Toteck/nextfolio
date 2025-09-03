// Componente InputTextEducacao.tsx
interface InputTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string; // ⬅️ Aqui está a diferença
}

export function InputTextEducacao({
  label,
  value,
  onChange,
  placeholder,
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
