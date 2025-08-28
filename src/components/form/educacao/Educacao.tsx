// src/components/form/educacao/Educacao.tsx

// Este componente representa a SEÇÃO DE EDUCAÇÃO no formulário.
// Ele é responsável por:
// - Mostrar a lista dinâmica de formações adicionadas (usando .map para renderizar EducacaoItem).
// - Exibir um botão "+ Adicionar Formação" que cria um novo item na lista.
// - Controlar a renderização de múltiplas instâncias de EducacaoItem.
// Obs: O estado (lista de educações) deve vir do Contexto global (CurriculoContext)
// ou pode ser passado como prop (data, setData).

export function Educacao() {
    return (
        <>
            {/* Título da seção */}
            <h2>Educação</h2>

            {/* Aqui vai o .map da lista de formações */}
            {/* Exemplo:
            {educacoes.map((edu, index) => (
                <EducacaoItem key={index} />
            ))}
      */}

            {/* Botão para adicionar uma nova formação */}
            {/* <button>+ Adicionar Formação</button> */}
        </>
    )
}