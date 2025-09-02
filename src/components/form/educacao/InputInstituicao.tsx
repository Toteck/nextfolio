
import { InputText } from "../inputs/InputText"; // Ajuste o caminho se necessário

interface InputInstituicaoProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputInstituicao({ value, onChange }: InputInstituicaoProps) {
  return (
    <InputText
      label="Instituição"
      value={value}
      onChange={onChange}
    />
  );
}
