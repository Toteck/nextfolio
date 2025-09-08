import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export function PreviewHabilidades() {
  const { habilidades } = useResume();

  if (habilidades.length === 0) return null;

  return (
    <div className="p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Habilidades</h2>
      <ul className="text-gray-700 text-sm flex flex-col gap-1">
        {habilidades.map((hab) => (
          <li key={hab.id}>
            <span className="font-semibold">{hab.nome}</span> - {hab.nivel || "Nível não definido"}
          </li>
        ))}
      </ul>
    </div>
  );
}
