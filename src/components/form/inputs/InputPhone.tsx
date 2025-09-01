interface InputPhoneProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputPhone({ label, value, onChange }: InputPhoneProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="(99) 99999-9999"
      />
    </div>
  );
}