interface InputPeriodoProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}


export function InputPeriodo({value, onChange, label}:InputPeriodoProps) {

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
