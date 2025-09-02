import type { Formacao } from "../../../context/CurriculoContext"; 
import { InputText } from "../inputs/InputText";
import { InputInstituicao } from "./InputInstituicao";

interface FormacaoItemProps {
  item: Formacao;
  onChange: (field: keyof Formacao, value: string) => void;
  onRemove: () => void;
}

export function FormacaoItem({ item, onChange, onRemove }: FormacaoItemProps) {
  return (
    <div className="p-4 border rounded-md space-y-2">
      <InputInstituicao
        value={item.instituicao}
        onChange={(value) => onChange("instituicao", value)}
      />
      <InputText
        label="Curso"
        value={item.curso}
        onChange={(value) => onChange("curso", value)}
      />
      <div className="flex gap-4">
        <InputText
          label="Ano de Início"
          value={item.anoInicio}
          onChange={(value) => onChange("anoInicio", value)}
        />
        <InputText
          label="Ano de Fim"
          value={item.anoFim}
          onChange={(value) => onChange("anoFim", value)}
        />
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="text-red-500 hover:text-red-700"
      >
        Remover
      </button>
    </div>
  );
}
