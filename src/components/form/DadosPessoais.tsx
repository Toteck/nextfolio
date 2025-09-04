import React, { useState, useEffect } from "react";  
import { useResume } from "../../context/CurriculoContext";
import type { PersonalData } from "../../context/CurriculoContext";
import { InputEmail } from "./inputs/InputEmail";
import { InputLinkedIn } from "./inputs/InputLinkedIn";
import { InputPhone } from "./inputs/InputPhone";
import { InputText } from "./inputs/InputText";
import { TextAreaResumo } from "./inputs/TextAreaResumo";

// Formato usuario@dominio.com
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Formato (00) 0 0000-0000
const PHONE_REGEX = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;

// Função para aplicar a máscara de telefone
function maskPhoneDigits(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, 11); // só números, até 11 dígitos
  if (d.length === 0) return "";

  const area = d.slice(0, 2);
  const first = d.slice(2, 3);
  const mid = d.slice(3, 7);
  const last = d.slice(7, 11);

  let out = `(${area}`;
  if (first) out += `) ${first}`;
  if (mid) out += ` ${mid}`;
  if (last) out += `-${last}`;
  return out;
}

export function DadosPessoais() {
  const { personalData, handleChange } = useResume();

  // contador de caracteres do resumo profissional
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
          setErrors((prev) => ({
            ...prev,
          email:
              value.trim() === ""
              ? "Email obrigatório"
              : !EMAIL_REGEX.test(value)
              ? "Formato de email inválido"
              : "",
        }));
        break;

        case "phone":
          setErrors((prev) => ({
            ...prev,
          phone:
            value.trim() === ""
              ? "Telefone obrigatório"
              : !PHONE_REGEX.test(value)
              ? "Formato de telefone inválido. Use (11) 9 9999-9999"
              : "",
        }));
        break;
    }
  };

  const handleChangeAndValidate = (
    field: keyof PersonalData,
    value: string
  ) => {
    handleChange(field, value);
    validateField(field as string, value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>

      <InputText
        label="Nome completo *"
        value={personalData.fullName}
        onChange={(value) => handleChangeAndValidate("fullName", value)}
      />
      {errors.fullName && (
        <span className="text-sm text-red-500">{errors.fullName}</span>
      )}

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
        onChange={(value) => handleChangeAndValidate("email", value)}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email}</span>
      )}

      <InputPhone
        label="Telefone *"
        value={personalData.phone}
        onChange={(value) => {
          const digits = value.replace(/\D/g, ""); // remove tudo que não for número
          const masked = maskPhoneDigits(digits); // aplica máscara automática
          handleChangeAndValidate("phone", masked); // salva e valida
        }}
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone}</span>
      )}

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
        <span className="text-sm text-gray-500 mt-1">
          {charCount}/{maxLength} caracteres
        </span>
      </div>
    </div>
  );
}
