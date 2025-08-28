export default function FormSection({ data, onDataChange }) {
  const { personalInfo } = data;
  return (
    <div className="flex-1 p-6 md:p-12 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-700">Dados Pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={personalInfo.name}
              onChange={onDataChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700"
            />
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={personalInfo.email}
                onChange={onDataChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={onDataChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                <div>
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold mb-1"
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={personalInfo.address}
                    onChange={onDataChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div></div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 text-sm font-bold mb-1"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={personalInfo.city}
                  onChange={onDataChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
                <div>
                  <label
                    htmlFor="state"
                    className="block text-gray-700 text-sm font-bold mb-1"
                  >
                    Estado
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full px-4 py-2 border rounded-md"
                    name="state"
                    value={personalInfo.state}
                    onChange={onDataChange}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="summary"
                    className="block text-gray-700 text-sm font-bold mb-1"
                  >
                    Resumo Profissional
                  </label>
                  <textarea
                    id="summary"
                    className="w-full px-4 py-2 border rounded-md h-24 resize-none"
                    rows="4"
                    name="summary"
                    value={personalInfo.summary}
                    onChange={onDataChange}
                  ></textarea>

                  <div className="mb-8">
                    <h2 className="text-2xl mb-6 text-lg font-bold text-gray-700">
                      Habilidades
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <input
                        type="text"
                        placeholder="Adicionar habilidade"
                        className="flex-grow px-4 py-2 border rounded-md"
                      />
                      <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md">
                        Adicionar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
