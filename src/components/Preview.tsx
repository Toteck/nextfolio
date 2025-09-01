
import { useCurriculo } from "../context/CurriculoContext";

export default function Preview() {
  const { personalData, habilidades } = useCurriculo();

  return (
    <div className="p-6 border rounded bg-gray-50 shadow">
      <h2 className="text-2xl font-bold mb-4">Preview do Currículo</h2>

      {/* ----------------- DADOS PESSOAIS ----------------- */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Dados Pessoais</h3>
        <p><strong>Nome:</strong> {personalData.useSocialName && personalData.socialName
            ? personalData.socialName
            : personalData.fullName}</p>
        <p><strong>Email:</strong> {personalData.email}</p>
        <p><strong>Telefone:</strong> {personalData.phone}</p>
        <p><strong>LinkedIn:</strong> {personalData.linkedin}</p>
        <p><strong>Resumo:</strong> {personalData.summary}</p>
      </div>

      {/* ----------------- HABILIDADES ----------------- */}
      <div>
        <h3 className="text-lg font-semibold">Habilidades</h3>
        {habilidades.length === 0 ? (
          <p className="text-gray-500">Nenhuma habilidade adicionada ainda.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {habilidades.map((item, index) => (
              <li key={index}>
                {item.nome} — <strong>{item.nivel}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
