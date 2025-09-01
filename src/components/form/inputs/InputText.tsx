interface InputTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputText({ label, value, onChange }: InputTextProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}