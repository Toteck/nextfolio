import { habilidades } from "../../../mockup/habilidades";
import { Button } from "../../Button";
import { HabilidadeItem } from "./HabilidadeItem";
import { InputHabilidades } from "./InputHabilidade";
import { SelectNivel } from "./SelectNivel";
import { FaPlus } from "react-icons/fa";

export function Habilidades() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputHabilidades />
                <SelectNivel />
            </div>


            <div className="flex">
                <Button label="Adicionar Habilidade" icon={<FaPlus />} tooltip="Adicionar Habilidade" onClick={() => { alert("Adicionando habilidade") }} />
            </div>

            {/* Lista de habilidades adicionadas */}
            <div className="mt-6 space-y-4">
                {/* Exemplo de habilidade */}
                {habilidades.length > 0 ? (habilidades.map((skill, index) => <HabilidadeItem key={index} nome={skill.nome} onRemove={() => { }} nivel={skill.nivel} />)) : (<p className="text-gray-600 italic mb-4">Nenhuma habilidade adicionada ainda.</p>)}
            </div>

        </div>
    )
}
