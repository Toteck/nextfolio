import { useResume, type Habilidade } from "../../../context/CurriculoContext";
import { Button } from "../../Button";
import { HabilidadeItem } from "./HabilidadeItem";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid"

export function Habilidades() {
    const { habilidades, setHabilidades } = useResume();



    const handleRemove = (id: string) => {
        setHabilidades((prevHabilidades) => prevHabilidades.filter((item) => item.id !== id))
    }

    const handleChange = (id: string, field: keyof Habilidade, value: string) => {
        setHabilidades((prevHabilidades) =>
            prevHabilidades.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleAdd = () => {
        const id = uuidv4()

        setHabilidades((prevHabilidades) => [
            ...prevHabilidades,
            {
                id,
                nome: "",
                nivel: "Iniciante"
            }
        ])
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Habilidades</h2>
            {/* Lista de habilidades adicionadas */}
            <div className="mt-6 space-y-4">
                {/* Exemplo de habilidade */}
                {habilidades.length > 0 ? (habilidades.map((skill) => <HabilidadeItem key={skill.id} item={skill} onRemove={() => handleRemove(skill.id)} onChange={(field, value) => handleChange(skill.id, field, value)} />)) : (<p className="text-gray-600 italic mb-4">Nenhuma habilidade adicionada ainda.</p>)}
            </div>

            <div className="flex">
                <Button label="Adicionar Habilidade" icon={<FaPlus />} tooltip="Adicionar Habilidade" onClick={handleAdd} />
            </div>
        </div>
    )
}
