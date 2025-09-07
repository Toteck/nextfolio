import type { Formacao } from "../../../context/CurriculoContext";
import { useResume } from "../../../context/CurriculoContext";
import { FormacaoItem } from "./FormacaoItem"
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../Button";

export function Educacao() {
  const { educacao, setEducacao } = useResume();

  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleAdd = () => {
    setEducacao((prevEducacao) => [
      ...prevEducacao,
      {
        id: generateUniqueId(),
        instituicao: "",
        curso: "",
        anoInicio: "",
        anoFim: "",
        status: "",
      },
    ]);
  };

  const handleRemove = (id: string) => {
    setEducacao((prevEducacao) =>
      prevEducacao.filter((item) => item.id !== id)
    );
  };

  const handleChange = (id: string, field: keyof Formacao, value: string) => {
    setEducacao((prevEducacao) =>
      prevEducacao.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="space-y-4 mt-10 ">
      <h2 className="text-xl font-bold mb-4">Formação Acadêmica</h2>
      {educacao.map((item) => (
        <FormacaoItem
          key={item.id}
          item={item}
          onChange={(field, value) => handleChange(item.id, field, value)}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
      <Button label="+ Adicionar Formação" onClick={handleAdd} />
    </div>
  );
}
