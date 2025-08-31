import { InputEmail } from "./inputs/InputEmail";
import { InputLinkedIn } from "./inputs/InputLinkedIn";
import { InputPhone } from "./inputs/InputPhone";
import { InputText } from "./inputs/InputText";
import { TextAreaResumo } from "./inputs/TextAreaResumo";
import { useContext } from "react";
import { CurriculoContext } from "../../context/CurriculoContext";

export function DadosPessoais() {
    const { personalData, handleChange } = useContext(CurriculoContext);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>

            <InputText
                label="Nome completo"
                value={personalData.fullName}
                onChange={(value) => handleChange("fullName", value)}
            />

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
                <label className="text-sm text-gray-700">
                    Usar Nome Social no currículo
                </label>
            </div>

            <InputEmail
                label="Email"
                value={personalData.email}
                onChange={(value) => handleChange("email", value)}
            />

            <InputPhone
                label="Telefone"
                value={personalData.phone}
                onChange={(value) => handleChange("phone", value)}
            />

            <InputLinkedIn
                label="LinkedIn"
                value={personalData.linkedin}
                onChange={(value) => handleChange("linkedin", value)}
            />

            {/* Resumo profissional com contador de carácteres*/}
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
