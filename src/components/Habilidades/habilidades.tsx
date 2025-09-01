
import { useState } from "react";
import { useCurriculo } from "../../context/CurriculoContext";

export default function Habilidades() {
  const { habilidades, adicionarHabilidade, removerHabilidade } = useCurriculo();

  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState("");

  const handleAdicionar = () => {
    if (nome.trim() === "" || nivel === "") {
      alert("Preencha o nome e selecione o nível!");
      return;
    }

    adicionarHabilidade({ nome, nivel });
    setNome("");
    setNivel("");
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Seção de Habilidades</h2>

      {/* Formulário */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite uma habilidade..."
          className="border px-3 py-2 rounded w-full"
        />

        <select
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Selecione nível</option>
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button
          onClick={handleAdicionar}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </div>

      {/* Lista dinâmica (agora usando o contexto) */}
      <ul className="space-y-2">
        {habilidades.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>
              {item.nome} — <strong>{item.nivel}</strong>
            </span>
            <button
              onClick={() => removerHabilidade(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
