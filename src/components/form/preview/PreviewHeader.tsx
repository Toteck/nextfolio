import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export function PreviewHeader() {
  const { personalData } = useResume();

  return (
    <div className="p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Dados Pessoais</h2>
      <p className="text-lg font-semibold">
        {personalData.useSocialName && personalData.socialName
          ? personalData.socialName
          : personalData.fullName || "Nome não preenchido"}
      </p>
      <div className="mt-2 flex flex-col gap-1 text-gray-700 text-sm">
        {personalData.email && <p>Email: {personalData.email}</p>}
        {personalData.phone && <p>Telefone: {personalData.phone}</p>}
        {personalData.linkedin && <p>LinkedIn: {personalData.linkedin}</p>}
      </div>
    </div>
  );
}
