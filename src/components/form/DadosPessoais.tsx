import { InputEmail } from "./inputs/InputEmail";
import { InputLinkedIn } from "./inputs/InputLinkedIn";
import { InputPhone } from "./inputs/InputPhone";
import { InputText } from "./inputs/InputText";
import { TextAreaResumo } from "./inputs/TextAreaResumo";

export function DadosPessoais() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>
            <InputText label="Nome completo" />
            <InputEmail label="Email" />
            <InputPhone label="Telefone" />
            <InputLinkedIn label="LinkedIn" />
            <TextAreaResumo label="Resumo profissional" />
        </div>
    )
}