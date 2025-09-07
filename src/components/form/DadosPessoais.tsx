import React, { useState, useEffect } from "react";  
import { useResume } from "../../context/CurriculoContext";
import type { PersonalData } from "../../context/CurriculoContext";
import { InputEmail } from "./inputs/InputEmail";
import { InputLinkedIn } from "./inputs/InputLinkedIn";
import { InputPhone } from "./inputs/InputPhone";
import { InputText } from "./inputs/InputText";
import { TextAreaResumo } from "./inputs/TextAreaResumo";
import { FaTrash } from "react-icons/fa";

// Formato usuario@dominio.com
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Formato (00) 0 0000-0000
const PHONE_REGEX = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;

// Função para aplicar a máscara de telefone
function maskPhoneDigits(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, 11);
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

  const [charCount, setCharCount] = useState(personalData.summary.length);
  const maxLength = 500;

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [extraContacts, setExtraContacts] = useState<
    { type: "email" | "phone" | "linkedin" | "github"; value: string }[]
  >([]);

  // ✅ extraErrors sempre sincronizado com extraContacts
  const [extraErrors, setExtraErrors] = useState<string[]>([]);

  useEffect(() => {
    setCharCount(personalData.summary.length);
  }, [personalData.summary]);

  // Sincroniza extraErrors sempre que extraContacts muda
  useEffect(() => {
    setExtraErrors(
      extraContacts.map((contact, index) =>
        contact.type === "email" && !extraErrors[index]
          ? ""
          : extraErrors[index] || ""
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraContacts]);

  const handleResumoChange = (value: string) => {
    if (value.length <= maxLength) {
      handleChange("summary", value);
      setCharCount(value.length);
    }
  };

  const addContact = (type: "email" | "phone" | "linkedin" | "github") => {
    setExtraContacts([...extraContacts, { type, value: "" }]);
    if (type === "email") setExtraErrors([...extraErrors, ""]);
  };

  const updateContact = (index: number, value: string) => {
    const updated = [...extraContacts];
    updated[index].value = value;
    setExtraContacts(updated);

    if (updated[index].type === "email") {
      const newErrors = [...extraErrors];
      newErrors[index] =
        value.trim() === ""
          ? "Email obrigatório"
          : !EMAIL_REGEX.test(value)
          ? "Formato de email inválido"
          : "";
      setExtraErrors(newErrors);
    }
  };

  const removeContact = (index: number) => {
    const updated = [...extraContacts];
    updated.splice(index, 1);
    setExtraContacts(updated);

    const updatedErrors = [...extraErrors];
    updatedErrors.splice(index, 1);
    setExtraErrors(updatedErrors);
  };

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
    <div className="flex flex-col gap-4 space-y-4 mb-10">
      <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>
      <div className="flex flex-col gap-4">
        <InputText
          label="Nome completo *"
          value={personalData.fullName}
          onChange={(value) => handleChangeAndValidate("fullName", value)}
        />
        {errors.fullName && (
          <span className="text-sm text-red-500">{errors.fullName}</span>
        )}

        <InputText
          label="Nome social"
          value={personalData.socialName}
          onChange={(value) => handleChange("socialName", value)}
        />

        <div className=" m-2 flex items-center gap-2">
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
            const digits = value.replace(/\D/g, "");
            const masked = maskPhoneDigits(digits);
            handleChangeAndValidate("phone", masked);
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

        {extraContacts.map((contact, index) => (
          <div key={index} className="flex flex-row items-center gap-2 ">
            {contact.type === "email" && (
              <>
                <InputEmail
                  label="Email adicional"
                  value={contact.value}
                  onChange={(val) => updateContact(index, val)}
                />
                {extraErrors[index] && (
                  <span className="text-red-500 text-sm">
                    {extraErrors[index]}
                  </span>
                )}
              </>
            )}
            {contact.type === "phone" && (
              <InputPhone
                label="Telefone adicional"
                value={contact.value}
                onChange={(val) => {
                  const digits = val.replace(/\D/g, "");
                  const masked = maskPhoneDigits(digits);
                  updateContact(index, masked);
                }}
              />
            )}
            {contact.type === "linkedin" && (
              <InputLinkedIn
                label="LinkedIn adicional"
                value={contact.value}
                onChange={(val) => updateContact(index, val)}
              />
            )}
            {contact.type === "github" && (
              <InputText
                label="GitHub"
                value={contact.value}
                onChange={(val) => updateContact(index, val)}
              />
            )}
            <div className="mt-6 relative inline-block group z-50">
              <button
                type="button"
                className="text-white bg-red-500 font-bold p-2 rounded hover:bg-red-600 hover:text-white transition-colors"
                onClick={() => removeContact(index)}
              >
                <FaTrash />
              </button>
              <span
                className="
          absolute bottom-full left-1/2 transform -translate-x-1/2 
          bg-gray-800 text-white text-sm rounded-md px-2 py-1 
          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
          transition-opacity duration-300 whitespace-nowrap z-50
          -mb-17
        "
              >
                Remover
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-2 justify-start items-center">
        <h2 className="text-sm font-semibold text-gray-700">
          {" "}
          Informações Adicionais:
        </h2>
        <button
          type="button"
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-800"
          onClick={() => addContact("email")}
        >
          + Email
        </button>
        <button
          type="button"
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-800"
          onClick={() => addContact("phone")}
        >
          + Telefone
        </button>
        <button
          type="button"
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-800"
          onClick={() => addContact("linkedin")}
        >
          + LinkedIn
        </button>
        <button
          type="button"
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-800"
          onClick={() => addContact("github")}
        >
          + GitHub
        </button>
      </div>

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
