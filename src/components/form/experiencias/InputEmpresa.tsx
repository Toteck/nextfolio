import { useState } from "react";

export function InputEmpresa() {
  const [empresa, setEmpresa] = useState("");
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">
        Nome da Empresa <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Ex: Avenue"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        className="border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
