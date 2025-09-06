interface TextAreaDescricaoProps {
  value: string;
  onChange: (value: string) => void;
}


export function TextAreaDescricao({value, onChange}: TextAreaDescricaoProps) {
  
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">
        Descrição das atividades <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder="Descreva suas principais atividades e responsabilidades..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={2000}
        className="border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500 h-32 resize-none"
      />
      <span className="text-sm text-gray-500 mt-1">{value.length}/2000</span>
    </div>
  );
}
