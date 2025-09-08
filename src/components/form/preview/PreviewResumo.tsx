import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export const PreviewResumo: React.FC = () => {
  const { personalData } = useResume();

  if (!personalData.summary) return null;

  return (
    <div className="p-4 mb-4 border-b border-gray-200">
      <h2 className="text-lg font-bold mb-2">Resumo Profissional</h2>
      <p className="text-gray-700 text-sm  mb-4">{personalData.summary}</p>
    </div>
  );
};
