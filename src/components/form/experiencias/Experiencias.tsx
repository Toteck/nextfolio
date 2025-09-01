import { InputCargo } from "./InputCargo";
import { InputEmpresa } from "./InputEmpresa";
import { InputPeriodo } from "./InputPeriodo";
import { TextAreaDescricao } from "./TextAreaDescricao";

export function Experiencias() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Experiências</h2>
      <div className="space-y-4">
        <InputCargo />
        <InputEmpresa />
        <InputPeriodo />
        <TextAreaDescricao />
      </div>
    </div>
  );
}
