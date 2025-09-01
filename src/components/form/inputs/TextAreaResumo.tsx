interface TextAreaResumoProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export function TextAreaResumo({
  label,
  value,
  onChange,
  maxLength = 500,
}: 
TextAreaResumoProps) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        rows={4}
      />
      <span>{value.length}/{maxLength} caracteres</span>
    </div>
  );
}