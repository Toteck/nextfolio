import React, { createContext, useState, useContext } from "react";

// 🔹 Tipo dos dados pessoais
type PersonalData = {
  fullName: string;
  socialName: string;
  useSocialName: boolean;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
};

// 🔹 Tipo das habilidades
type Habilidade = {
  nome: string;
  nivel: string;
};

// 🔹 O que o contexto vai disponibilizar
type CurriculoContextType = {
  personalData: PersonalData;
  handleChange: (field: keyof PersonalData, value: string | boolean) => void;
  habilidades: Habilidade[];
  adicionarHabilidade: (h: Habilidade) => void;
  removerHabilidade: (index: number) => void;
};

// Criação do contexto
export const CurriculoContext = createContext<CurriculoContextType | undefined>(undefined);

// Provider
export const CurriculoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado para os dados pessoais
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: "",
    socialName: "",
    useSocialName: false,
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
  });

  // Estado para as habilidades
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

  // ✅ Função para atualizar os dados pessoais dinamicamente
  const handleChange = (field: keyof PersonalData, value: string | boolean) => {
    setPersonalData({
      ...personalData,
      [field]: value,
    });
  };

  // Funções para habilidades
  const adicionarHabilidade = (h: Habilidade) => {
    setHabilidades([...habilidades, h]);
  };

  const removerHabilidade = (index: number) => {
    setHabilidades(habilidades.filter((_, i) => i !== index));
  };

  return (
    <CurriculoContext.Provider
      value={{
        personalData,
        handleChange,
        habilidades,
        adicionarHabilidade,
        removerHabilidade,
      }}
    >
      {children}
    </CurriculoContext.Provider>
  );
};

// Hook para usar o contexto
export const useCurriculo = () => {
  const context = useContext(CurriculoContext);
  if (!context) throw new Error("useCurriculo deve ser usado dentro de CurriculoProvider");
  return context;
};
