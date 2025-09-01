// importações corrigidas, adicionando useState e useEffect
import React, { useState, useEffect } from "react";  
import { useResume } from "../../context/CurriculoContext";
import { InputEmail } from "./inputs/InputEmail";
import { InputLinkedIn } from "./inputs/InputLinkedIn";
import { InputPhone } from "./inputs/InputPhone";
import { InputText } from "./inputs/InputText";
import { TextAreaResumo } from "./inputs/TextAreaResumo";

export function DadosPessoais() {
    const { personalData, handleChange } = useResume();
    //contador de caracteres do resumo profissional
    const [charCount, setCharCount] = useState(personalData.summary.length);
    const maxLength = 500;

// Estado de erros de validação
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setCharCount(personalData.summary.length);
  }, [personalData.summary]);

  const handleResumoChange = (value: string) => {
    if (value.length <= maxLength) {
      handleChange("summary", value);
      setCharCount(value.length);
    }
  };

  // Validação em tempo real
  const validateField = (field: string, value: string) => {
    switch (field) {
      case "fullName":
        setErrors((prev) => ({
          ...prev,
          fullName: value.trim() === "" ? "Nome obrigatório" : "",
        }));
        break;
        case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prev) => ({
          ...prev,
          email: value.trim() === "" ? "Email obrigatório" : !emailRegex.test(value) ? "Formato de email inválido" : "",
        }));
        break;
        case "phone":
        setErrors((prev) => ({
          ...prev,
          phone: value.trim() === "" ? "Telefone obrigatório" : "",
        }));
        break;
    }
  };

  const handleChangeAndValidate = (field: string, value: string) => {
    handleChange(field, value);
    validateField(field, value);
  };    

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>

            <InputText
                label="Nome completo *"
                value={personalData.fullName}
                onChange={(value) => handleChangeAndValidate("fullName", value)}
            />
            {errors.fullName && <span className="text-sm text-red-500">{errors.fullName}</span>}

            {/* Nome Social */}
            <InputText
                label="Nome social"
                value={personalData.socialName}
                onChange={(value) => handleChange("socialName", value)}
            />

            {/* Toggle usar Nome Social */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={personalData.useSocialName}
                    onChange={(e) => handleChange("useSocialName", e.target.checked)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="text-sm text-gray-700">Usar Nome Social</label>
            </div>

            <InputEmail
                label="Email *"
                value={personalData.email}
                onChange={(value) => handleChange("email", value)}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            <InputPhone
                label="Telefone *"
                value={personalData.phone}
                onChange={(value) => handleChange("phone", value)}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}


            <InputLinkedIn
                label="LinkedIn"
                value={personalData.linkedin}
                onChange={(value) => handleChange("linkedin", value)}
            />

            {/* Resumo profissional com contador de caracteres*/}
            <div className="flex flex-col">
                <TextAreaResumo
                    label="Resumo profissional"
                    value={personalData.summary}
                    onChange={handleResumoChange}
             />
                
            </div>
        </div>
    );
}
