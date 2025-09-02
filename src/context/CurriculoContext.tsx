// Estado Global do curriculo
import React, { createContext, useState, useContext } from "react";

export type Formacao = {
  id: string;
  instituicao: string;
  curso: string;
  anoInicio: string;
  anoFim: string;
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

type ResumeContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;

  educacao: Formacao[];
  setEducacao: React.Dispatch<React.SetStateAction<Formacao[]>>;
  handleChange: (field: keyof PersonalData, value: any) => void;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  const handleChange = (field: string, value: any) => {
    setPersonalData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        personalData,
        setPersonalData,
        educacao,
        setEducacao,
        handleChange,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context)
    throw new Error("useResume deve ser usado dentro de ResumeProvider");
  return context;
};

export type Formacao = {
  id: string;
  instituicao: string;
  curso: string;
  anoInicio: string;
  anoFim: string;
  status: "concluido" | "em_curso" | "incompleto" | ""; // ⬅️ Adicione o novo campo aqui
};