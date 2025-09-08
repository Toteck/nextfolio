import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export const PreviewResumo: React.FC = () => {
  const { personalData } = useResume();

  if (!personalData.summary) return null;

  return (
    <div className="p-4 border rounded bg-gray-50 mb-4">
      <h2 className="text-lg font-bold mb-2">Resumo Profissional</h2>
      <p className="text-gray-700 text-sm">{personalData.summary}</p>
    </div>
  );
};
