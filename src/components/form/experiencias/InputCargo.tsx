interface InputCargoProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputCargo({ value, onChange }: InputCargoProps) {

  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700">
        Cargo/Função <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Ex: Desenvolvedor Front-End"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
