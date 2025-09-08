import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export function PreviewEducacao() {
  const { educacao } = useResume();

  if (educacao.length === 0) return null;

  return (
    <div className="p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Educação</h2>
      <div className="flex flex-col gap-3">
        {educacao.map((formacao) => (
          <div key={formacao.id} className="text-gray-700 text-sm border-b border-gray-200 pb-2">
            <p><span className="font-semibold">Instituição:</span> {formacao.instituicao}</p>
            <p><span className="font-semibold">Curso:</span> {formacao.curso}</p>
            <p><span className="font-semibold">Período:</span> {formacao.anoInicio} - {formacao.anoFim}</p>
            <p><span className="font-semibold">Status:</span> {formacao.status || "Não definido"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
