import React from "react";
import { DadosPessoais } from "../components/form/DadosPessoais";
import { Educacao } from "../components/form/educacao/Educacao";
import { Experiencias } from "../components/form/experiencias/Experiencias";
import { Habilidades } from "../components/form/habilidades/Habilidades";
import { Preview } from "../components/form/preview/Preview";
import { ResumeProvider } from "../context/CurriculoContext";

export const Home = () => {
  return (
    <ResumeProvider>
      <div className="bg-gray-50 min-h-screen p-4 md:p-8 flex justify-center items-center font-sans">
        <div className="w-full grid grid-cols-2 bg-white rounded shadow-xl overflow-hidden">
          {/* Coluna esquerda - Formulário */}
          <div className="p-6 overflow-y-auto">
            <DadosPessoais />
            <Habilidades />
            <Experiencias />
            <Educacao />
          </div>

          {/* Coluna direita - Preview */}
          <div className="p-6 overflow-y-auto bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <Preview />
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
};
