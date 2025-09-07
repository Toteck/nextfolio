// src/components/form/educacao/SelectStatus.tsx
type StatusEducacao = "concluido" | "em_curso" | "incompleto";

interface SelectStatusEducacaoProps {
  value: StatusEducacao | "";
  onChange: (value: StatusEducacao | "") => void;
}

export function SelectStatusEducacao({
  value,
  onChange,
}: SelectStatusEducacaoProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="status" className="text-sm font-semibold text-gray-700">
        Status
      </label>
      <select
        id="status"
        value={value}
        onChange={(e) => onChange(e.target.value as StatusEducacao | "")}
        className="w-full p-2 border border-gray-300 rounded-md 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Selecione o status</option>
        <option value="concluido">Concluído</option>
        <option value="em_curso">Em curso</option>
        <option value="incompleto">Incompleto</option>
      </select>
    </div>
  );
}