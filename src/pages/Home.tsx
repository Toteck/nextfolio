// Tela Principal (Split-Screen)

import { DadosPessoais } from "../components/form/DadosPessoais";
import { Experiencias } from "../components/form/experiencias/Experiencias";
import { Habilidades } from "../components/form/habilidades/Habilidades";
import { Preview } from "../components/form/preview/Preview";


export const Home = () => {

    return (
        <div className="bg-gray-50 min-h-screen p-4 md:p-8 flex justify-center items-center font-sans">
            <div className="w-full max-w-7xl h-[90vh] grid grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Coluna esquerda - Formulário */}
                <div className="p-6 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">Formulário</h2>
                    <DadosPessoais />
                    <Habilidades />
                    <Experiencias />
                </div>

                {/* Coluna direita - Preview */}
                <div className="p-6 overflow-y-auto bg-gray-100">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <Preview />
                </div>
            </div>
        </div>
    );
}
