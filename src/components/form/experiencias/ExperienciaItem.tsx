import { InputCargo } from "./InputCargo";
import { InputEmpresa } from "./InputEmpresa";
import { InputPeriodo } from "./InputPeriodo";
import { TextAreaDescricao } from "./TextAreaDescricao";

export function ExperienciaItem() {
    return (
        <div className="space-y-4">
            <InputCargo />
            <InputEmpresa />
            <InputPeriodo />
            <TextAreaDescricao />
        </div>
    )
}