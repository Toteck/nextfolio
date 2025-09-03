import { useResume, type Experiencia } from "../../../context/CurriculoContext";
import { Button } from "../../Button";
import { ExperienciaItem } from "./ExperienciaItem";
import { v4 as uuidv4 } from "uuid";

export function Experiencias() {
  const { experiencia, setExperiencia } = useResume();

  const handleAdd = () => {
    const id = uuidv4()

    setExperiencia((prevExperiencia) => [
      ...prevExperiencia,
      {
        id,
        cargo: "",
        empresa: "",
        anoInicio: "",
        anoFim: "",
        descricaoAtividades: ""
      }
    ])
  }

  const handleRemove = (id: string) => {
    setExperiencia((prevExperiencia) => prevExperiencia.filter((item) => item.id !== id))
  }


  const handleChange = (id: string, field: keyof Experiencia, value: string) => {
    setExperiencia((prevExperiencia) =>
      prevExperiencia.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Experiências</h2>
      {experiencia.map((item) => (
        <ExperienciaItem key={item.id} item={item} onChange={(field, value) => handleChange(item.id, field, value)}
          onRemove={() => handleRemove(item.id)} />
      ))}
      <Button label="Adicionar Experiência" onClick={handleAdd} />
    </div>
  );
}
