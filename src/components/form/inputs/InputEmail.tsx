interface InputEmailProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputEmail({ label, value, onChange }: InputEmailProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}