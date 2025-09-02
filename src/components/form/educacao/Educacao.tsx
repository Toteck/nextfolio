import type { Formacao } from "../../../context/CurriculoContext";
import { useResume } from "../../../context/CurriculoContext";
import { FormacaoItem } from "./FormacaoItem"

export function Educacao() {
  const { educacao, setEducacao } = useResume();

  const generateUniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
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
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Formação Acadêmica</h2>
      {educacao.map((item) => (
        <FormacaoItem
          key={item.id}
          item={item}
          onChange={(field, value) => handleChange(item.id, field, value)}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="w-full text-blue-500 border border-blue-500 rounded p-2 hover:bg-blue-50"
      >
        Adicionar Formação
      </button>
    </div>
  );
}
