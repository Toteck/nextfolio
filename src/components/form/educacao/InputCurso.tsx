// src/components/form/educacao/InputCurso.tsx
import { InputTextEducacao } from "./InputTextEducacao";

interface InputCursoProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputCurso({ value, onChange }: InputCursoProps) {
  return (
    <InputTextEducacao
      label="Curso"
      value={value}
      onChange={onChange}
      placeholder="Ex: Engenharia de Software"
    />
  );
}