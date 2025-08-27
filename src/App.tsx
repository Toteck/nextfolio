import { useState, useCallback } from "react";
import FormSection from "./components/FormSection.jsx";
import ResumePreview from "./components/ResumePreview.jsx";

export default function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
  });

  const handlePersonalInfoChange = useCallback((e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 flex justify-center items-center font-sans">
      <div className="w-full max-w-7xl h-[90vh] flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
        {}
        <FormSection
          data={resumeData}
          onDataChange={handlePersonalInfoChange}
        />
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}
