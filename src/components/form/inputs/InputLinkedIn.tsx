interface InputLinkedInProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputLinkedIn({ label, value, onChange }: InputLinkedInProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://linkedin.com/in/seu-perfil"
      />
    </div>
  );
}