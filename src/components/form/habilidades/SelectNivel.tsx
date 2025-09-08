export function SelectNivel() {
    return (
        <div>
            <label htmlFor="nivel" className="text-sm font-semibold text-gray-700 mb-1 block">Nível</label>
            <select
                id="nivel"
                className="border border-gray-300 rounded-md px-3 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
            </select>
        </div>
    )
}
