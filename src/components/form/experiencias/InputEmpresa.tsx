interface InputEmpresaProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputEmpresa({ value, onChange }: InputEmpresaProps) {

  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700">
        Nome da Empresa <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Ex: Avenue"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
