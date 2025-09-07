import React, { createContext, useState, useContext } from "react";

// Tipos principais
export type Formacao = {
  id: string;
  instituicao: string;
  curso: string;
  anoInicio: string;
  anoFim: string;
  status: "concluido" | "em_curso" | "incompleto" | "";
};

export type PersonalData = {
  fullName: string;
  socialName: string;
  useSocialName: boolean;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
};

export type Experiencia = {
  id: string;
  empresa: string;
  cargo: string;
  anoInicio: string;
  anoFim: string;
  descricaoAtividades: string;
};

export type ExtraContact = {
  id: string;
  type: "email" | "phone" | "linkedin" | "github";
  value: string;
};

export type Habilidade = {
  id: string;
  nome: string;
  nivel: string;
};

// Tipo do contexto
type ResumeContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;

  educacao: Formacao[];
  setEducacao: React.Dispatch<React.SetStateAction<Formacao[]>>;

  experiencia: Experiencia[];
  setExperiencia: React.Dispatch<React.SetStateAction<Experiencia[]>>;

  extraContacts: ExtraContact[];
  setExtraContacts: React.Dispatch<React.SetStateAction<ExtraContact[]>>;

  habilidades: Habilidade[];
  setHabilidades: React.Dispatch<React.SetStateAction<Habilidade[]>>;

  handleChange: (field: keyof PersonalData, value: any) => void;
};

// Criar contexto
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider
export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: "",
    socialName: "",
    useSocialName: false,
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
  });

  const [educacao, setEducacao] = useState<Formacao[]>([]);
  const [experiencia, setExperiencia] = useState<Experiencia[]>([]);
  const [extraContacts, setExtraContacts] = useState<ExtraContact[]>([]);
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

  const handleChange = (field: keyof PersonalData, value: any) => {
    setPersonalData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ResumeContext.Provider
      value={{
        personalData,
        setPersonalData,
        educacao,
        setEducacao,
        experiencia,
        setExperiencia,
        extraContacts,
        setExtraContacts,
        habilidades,
        setHabilidades,
        handleChange,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

// Hook para usar o contexto
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error("useResume deve ser usado dentro de ResumeProvider");
  return context;
};
