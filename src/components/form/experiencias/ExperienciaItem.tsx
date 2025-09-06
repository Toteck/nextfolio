import type { Experiencia } from "../../../context/CurriculoContext";
import { Button } from "../../Button";
import { InputCargo } from "./InputCargo";
import { InputEmpresa } from "./InputEmpresa";
import { InputPeriodo } from "./InputPeriodo";
import { TextAreaDescricao } from "./TextAreaDescricao";

type ExperienciaItemProps = {
    item: Experiencia;
    onChange: (field: keyof Experiencia, value: string) => void;
    onRemove: () => void;
}

export function ExperienciaItem({ item, onChange, onRemove }: ExperienciaItemProps) {
    return (
        <div className="p-4 border rounded-md space-y-4">
            <InputCargo value={item.cargo} onChange={(value) => onChange("cargo", value)} />
            <InputEmpresa value={item.empresa} onChange={(value) => onChange("empresa", value)} />
            <p className="font-medium mb-1">
                Período <span className="text-red-500">*</span>
            </p>
            <div className="flex  justify-between">
                <InputPeriodo label="De" value={item.anoInicio} onChange={(value) => onChange("anoInicio", value)} />
                <InputPeriodo label="Até" value={item.anoFim} onChange={(value) => onChange("anoFim", value)} />
            </div>
            <TextAreaDescricao value={item.descricaoAtividades} onChange={(value) => onChange("descricaoAtividades", value)} />
            <Button label="Remover Experiência" onClick={onRemove} variant="remove" />
        </div>
    )
}