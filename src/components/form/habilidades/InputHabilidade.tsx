interface InputHabilidadesProps {
    value: string;
    onChange: (value: string) => void;
}


export function InputHabilidades({ value, onChange }: InputHabilidadesProps) {

    return (
        <div>
            <label htmlFor="habilidade" className="text-sm font-semibold text-gray-700 mb-1 block">Habilidade</label>
            <input
                id="habilidade"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder="Ex: JavaScript, React, SQL"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
    )
}
