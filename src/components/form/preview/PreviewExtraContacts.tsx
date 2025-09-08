import React from "react";
import { useResume } from "../../../context/CurriculoContext";

export const PreviewExtraContacts: React.FC = () => {
  const { extraContacts } = useResume();

  if (extraContacts.length === 0) return null;

  return (
    <div className="p-4 border rounded bg-gray-50 mb-4">
      <h2 className="text-lg font-bold mb-2">Contatos Adicionais</h2>
      <div className="flex flex-col gap-1 text-gray-700 text-sm">
        {extraContacts.map((contact) => {
          switch (contact.type) {
            case "email":
              return <p key={contact.id}>Email: {contact.value}</p>;
            case "phone":
              return <p key={contact.id}>Telefone: {contact.value}</p>;
            case "linkedin":
              return <p key={contact.id}>LinkedIn: {contact.value}</p>;
            case "github":
              return <p key={contact.id}>GitHub: {contact.value}</p>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
