import { useState } from "react";

export function InputPeriodo() {
  const [startPeriod, setStartPeriod] = useState("");
  const [finishPeriod, setFinishPeriod] = useState("");
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1">
        Período <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm">De</span>
          <input
            type="date"
            value={startPeriod}
            onChange={(e) => setStartPeriod(e.target.value)}
            className="border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Até</span>
          <input
            type="date"
            value={finishPeriod}
            onChange={(e) => setFinishPeriod(e.target.value)}
            className="border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
