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

export function ExperienciaItem({item, onChange, onRemove}: ExperienciaItemProps) {
    return (
        <div className="p-4 border rounded-md space-y-4">
            <InputCargo value={item.cargo} onChange={(value) => onChange("cargo", value)} />
            <InputEmpresa value={item.empresa} onChange={(value) => onChange("empresa", value)}/>
            <InputPeriodo />
            <TextAreaDescricao value={item.cargo} onChange={(value) => onChange("cargo", value)}/>
            <Button label="Remover Experiência" onClick={() => alert("removendo experiência")} variant="remove"/>
        </div>
    )
}