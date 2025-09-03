import type { Experiencia } from "../../../context/CurriculoContext";
import { InputCargo } from "./InputCargo";
import { InputEmpresa } from "./InputEmpresa";
import { InputPeriodo } from "./InputPeriodo";
import { TextAreaDescricao } from "./TextAreaDescricao";

type ExperienciaItemProps = {
    item: Experiencia;
    onChange: (field: keyof Experiencia, value: string) => void;
    onRemove: () => void;
}

export function ExperienciaItem({item, onChange, onRemove}: ExperienciaItemProps) {
    return (
        <div className="p-4 border rounded-md space-y-4">
            <InputCargo  />
            <InputEmpresa />
            <InputPeriodo />
            <TextAreaDescricao />
        </div>
    )
}