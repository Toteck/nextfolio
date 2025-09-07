import { InputData } from "./InputPeriodo";
import { InputInstituicao } from "./InputInstituicao";
import { InputCurso } from "./InputCurso";
import { SelectStatusEducacao } from "./SelectStatusEducacao";
import { Button } from "../../Button";
import { FaTrash } from "react-icons/fa";

import type { Formacao } from "../../../context/CurriculoContext";

interface FormacaoItemProps {
  item: Formacao;
  onChange: (field: keyof Formacao, value: string) => void;
  onRemove: () => void;
}

export function FormacaoItem({ item, onChange, onRemove }: FormacaoItemProps) {
  return (
    <div className="p-4 space-y-4">
      <InputInstituicao
        value={item.instituicao}
        onChange={(value) => onChange("instituicao", value)}
      />
      <InputCurso
        value={item.curso}
        onChange={(value) => onChange("curso", value)}
      />

      <div className="flex gap-4">
        <InputData
          label="Ano de Início"
          value={item.anoInicio}
          onChange={(value) => onChange("anoInicio", value)}
        />
        <InputData
          label="Ano de Fim"
          value={item.anoFim}
          onChange={(value) => onChange("anoFim", value)}
        />
      </div>
      <div className="w-2/6">
        <SelectStatusEducacao
          value={item.status}
          onChange={(value) => onChange("status", value)}
        />
      </div>

      <div className="flex flex-row justify-end items-end">
        <Button
          onClick={onRemove}
          variant="remove"
          icon={<FaTrash />}
          iconOnly={true}
          label=""
          tooltip="Remover"
        />
      </div>
    </div>
  );
}
