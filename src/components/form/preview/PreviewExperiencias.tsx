import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export function PreviewExperiencias() {
  const { experiencia } = useResume();

  if (experiencia.length === 0) return null;

  return (
    <div className="p-4 border rounded bg-gray-50 mb-4">
      <h2 className="text-xl font-bold mb-2">Experiências</h2>
      <div className="flex flex-col gap-3">
        {experiencia.map((exp) => (
          <div key={exp.id} className="text-gray-700 text-sm border-b border-gray-200 pb-2">
            <p><span className="font-semibold">Empresa:</span> {exp.empresa}</p>
            <p><span className="font-semibold">Cargo:</span> {exp.cargo}</p>
            <p><span className="font-semibold">Período:</span> {exp.anoInicio} - {exp.anoFim}</p>
            <p><span className="font-semibold">Descrição:</span> {exp.descricaoAtividades}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
