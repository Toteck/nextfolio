
import { InputTextEducacao } from "./InputTextEducacao"; // Ajuste o caminho se necessário

interface InputInstituicaoProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputInstituicao({ value, onChange }: InputInstituicaoProps) {
  return (
    <InputTextEducacao
      label="Instituição"
      value={value}
      onChange={onChange}
      placeholder="Ex: Universidade Federal de São Paulo"
    />
  );
}
