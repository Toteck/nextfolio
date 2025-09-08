import { FaTrash } from "react-icons/fa";
import { Button } from "../../Button";
import type { Habilidade } from "../../../context/CurriculoContext";
import { InputHabilidades } from "./InputHabilidade";
import { SelectNivel } from "./SelectNivel";

type HabilidadeItemProps = {
    item: Habilidade;
    onChange: (field: keyof Habilidade, value: string) => void;
    onRemove: () => void;
}

export function HabilidadeItem({ item, onRemove, onChange }: HabilidadeItemProps) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputHabilidades value={item.nome} onChange={(value) => onChange("nome", value)} />
                <SelectNivel value={item.nivel} onChange={(value) => onChange("nivel", value)} />
            </div>

            <Button
                onClick={onRemove}
                variant="remove"
                icon={<FaTrash />}
                iconOnly={true}
                label=""
                tooltip="Remover"
            />
        </div>
    )
}
