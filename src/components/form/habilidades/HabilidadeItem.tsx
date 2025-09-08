import { FaTrash } from "react-icons/fa";
import { Button } from "../../Button";

type HabilidadeItemProps = {
    nome: string;
    nivel: "Iniciante" | "Intermediário" | "Avançado";
    onRemove: () => void;
}

export function HabilidadeItem({ nome, nivel, onRemove }: HabilidadeItemProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200">
            <div className="flex-1">
                <p className="text-gray-800 font-semibold">{nome}</p>
                <p className="text-gray-500 text-sm italic">{nivel}</p>
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
