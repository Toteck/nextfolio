import type { Experiencia } from "../../../context/CurriculoContext";
import { Button } from "../../Button";
import { InputCargo } from "./InputCargo";
import { InputEmpresa } from "./InputEmpresa";
import { InputPeriodo } from "./InputPeriodo";
import { TextAreaDescricao } from "./TextAreaDescricao";
import { FaTrash } from "react-icons/fa";

type ExperienciaItemProps = {
    item: Experiencia;
    onChange: (field: keyof Experiencia, value: string) => void;
    onRemove: () => void;
}

export function ExperienciaItem({ item, onChange, onRemove }: ExperienciaItemProps) {
    return (
        <div className="p-4 space-y-4">
            <InputCargo value={item.cargo} onChange={(value) => onChange("cargo", value)} />
            <InputEmpresa value={item.empresa} onChange={(value) => onChange("empresa", value)} />
            <p className="text-sm font-semibold text-gray-700">
                Período <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-4">
                <InputPeriodo label="De" value={item.anoInicio} onChange={(value) => onChange("anoInicio", value)} />
                <InputPeriodo label="Até" value={item.anoFim} onChange={(value) => onChange("anoFim", value)} />
            </div>
            <TextAreaDescricao value={item.descricaoAtividades} onChange={(value) => onChange("descricaoAtividades", value)} />
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
    )
}