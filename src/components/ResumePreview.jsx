export default function ResumePreview({ data }){
  const {personalInfo, experience, education, skills } = data;
  return (
    <div className="flex-1 bg-gray-100 p-6 md:p-12 overflow-y-auto">
      <div className="bg-white rounded-md shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">
            {personalInfo.name || "Seu Nome"}
          </h1>
          <p className="text-gray-600">
            {personalInfo.summary || "Seu Resumo"}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Habilidades
            </h3>
            <ul className="list-disc pl-5">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600 mb-1">
                    {skill}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-500">
                  Nenhuma habilidade adicionada
                </li>
              )}
            </ul>
            <h3 className="text-lg font-bold text-gray-700 mb-2 mt-6">
              Educação
            </h3>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-gray-800">{edu.course}</p>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">
                Nenhuma educação adicionada
              </div>
            )}
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Experiência Profissional
            </h3>
            {experience.length > 0 ? (
              experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-gray-800">
                    {exp.title}, {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">{exp.duration}</p>
                  <ul className="list-disc pl-5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                Nenhuma experiência adicionada.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
