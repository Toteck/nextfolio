import React, { useState, useEffect } from "react";
import { useResume } from "../../context/CurriculoContext";
import { InputEmail } from "./inputs/InputEmail";
import { InputLinkedIn } from "./inputs/InputLinkedIn";
import { InputPhone } from "./inputs/InputPhone";
import { InputText } from "./inputs/InputText";
import { TextAreaResumo } from "./inputs/TextAreaResumo";
import { FaTrash } from "react-icons/fa";

// Regex para validar email e telefone
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;

// Função para aplicar máscara de telefone
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
  const { personalData, handleChange, extraContacts, setExtraContacts } = useResume();

  const [charCount, setCharCount] = useState(personalData.summary.length);
  const maxLength = 500;

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Erros dos contatos extras
  const [extraErrors, setExtraErrors] = useState<string[]>([]);

  useEffect(() => {
    setCharCount(personalData.summary.length);
  }, [personalData.summary]);

  // Mantém os erros sincronizados com a lista de contatos extras
  useEffect(() => {
    setExtraErrors((prev) =>
      extraContacts.map((c, i) => prev[i] || "")
    );
  }, [extraContacts]);

  const handleResumoChange = (value: string) => {
    if (value.length <= maxLength) {
      handleChange("summary", value);
      setCharCount(value.length);
    }
  };

  // Adicionar contato extra
  const addContact = (type: "email" | "phone" | "linkedin" | "github") => {
    setExtraContacts([
      ...extraContacts,
      { id: crypto.randomUUID(), type, value: "" },
    ]);
    setExtraErrors([...extraErrors, ""]);
  };

  // Atualizar contato extra com validação
  const updateContact = (id: string, value: string) => {
    const updated = extraContacts.map((c) =>
      c.id === id ? { ...c, value } : c
    );
    setExtraContacts(updated);

    const idx = updated.findIndex((c) => c.id === id);
    if (idx !== -1 && updated[idx].type === "email") {
      const newErrors = [...extraErrors];
      newErrors[idx] =
        value.trim() === ""
          ? "Email obrigatório"
          : !EMAIL_REGEX.test(value)
          ? "Formato de email inválido"
          : "";
      setExtraErrors(newErrors);
    }
  };

  // Remover contato extra
  const removeContact = (id: string) => {
    const idx = extraContacts.findIndex((c) => c.id === id);
    setExtraContacts(extraContacts.filter((c) => c.id !== id));
    setExtraErrors(extraErrors.filter((_, i) => i !== idx));
  };

  // Validação dos campos fixos
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

  const handleChangeAndValidate = (field: keyof typeof personalData, value: string) => {
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
        {errors.fullName && <span className="text-sm text-red-500">{errors.fullName}</span>}

        <InputText
          label="Nome social"
          value={personalData.socialName}
          onChange={(value) => handleChange("socialName", value)}
        />

        {/* Toggle usar Nome Social */}
        <div className="m-2 flex items-center gap-2">
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
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

        <InputPhone
          label="Telefone *"
          value={personalData.phone}
          onChange={(value) => {
            const digits = value.replace(/\D/g, "");
            const masked = maskPhoneDigits(digits);
            handleChangeAndValidate("phone", masked);
          }}
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}

        <InputLinkedIn
          label="LinkedIn"
          value={personalData.linkedin}
          onChange={(value) => handleChange("linkedin", value)}
        />

        {/* Contatos extras */}
        {extraContacts.map((contact, index) => (
          <div key={contact.id} className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              {contact.type === "email" && (
                <InputEmail
                  label="Email adicional"
                  value={contact.value}
                  onChange={(val) => updateContact(contact.id, val)}
                />
              )}
              {contact.type === "phone" && (
                <InputPhone
                  label="Telefone adicional"
                  value={contact.value}
                  onChange={(val) => {
                    const digits = val.replace(/\D/g, "");
                    const masked = maskPhoneDigits(digits);
                    updateContact(contact.id, masked);
                  }}
                />
              )}
              {contact.type === "linkedin" && (
                <InputLinkedIn
                  label="LinkedIn adicional"
                  value={contact.value}
                  onChange={(val) => updateContact(contact.id, val)}
                />
              )}
              {contact.type === "github" && (
                <InputText
                  label="GitHub"
                  value={contact.value}
                  onChange={(val) => updateContact(contact.id, val)}
                />
              )}
              <div className="mt-6 relative inline-block group z-50">
                <button
                  type="button"
                  className="text-white bg-red-500 font-bold p-2 rounded hover:bg-red-600 hover:text-white transition-colors"
                  onClick={() => removeContact(contact.id)}
                >
                  <FaTrash />
                </button>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 whitespace-nowrap z-50 -mb-17">
                  Remover
                </span>
              </div>
            </div>
            {/* Erro do contato extra */}
            {extraErrors[index] && (
              <span className="text-red-500 text-sm">{extraErrors[index]}</span>
            )}
          </div>
        ))}
      </div>

      {/* Botões para adicionar informações extras */}
      <div className="flex gap-2 mt-2 justify-start items-center">
        <h2 className="text-sm font-semibold text-gray-700">Informações Adicionais:</h2>
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

      {/* Resumo profissional com contador */}
      <div className="flex flex-col">
        <TextAreaResumo
          label="Resumo profissional"
          value={personalData.summary}
          onChange={handleResumoChange}
        />
        <span className="text-sm text-gray-500">
          {charCount}/{maxLength} caracteres
        </span>
      </div>
    </div>
  );
}
