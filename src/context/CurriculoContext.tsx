// Estado Global do curriculo
import React, { createContext, useState, useContext } from "react";

type PersonalData = {
  fullName: string;
  socialName: string;
  useSocialName: boolean;   // ← novo campo
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
};

type ResumeContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: "",
    socialName: "",
    useSocialName: false,   // Caso de não usar
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
  });

  return (
    <ResumeContext.Provider value={{ personalData, setPersonalData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error("useResume deve ser usado dentro de ResumeProvider");
  return context;
};
