import { useState } from "react";

export function InputCargo() {
  const [cargo, setCargo] = useState("");
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">
        Cargo/Função <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Ex: Desenvolvedor Front-End"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        className="border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
