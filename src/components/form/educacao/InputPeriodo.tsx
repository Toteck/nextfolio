// src/components/form/educacao/InputPeriodo.tsx

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // ⬅️ Importe o CSS do componente

interface InputDataProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputData({ label, value, onChange }: InputDataProps) {
  const selectedDate = value ? new Date(parseInt(value), 0, 1) : null;

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          if (date) {
            onChange(String(date.getFullYear()));
          }
        }}
        showYearPicker
        dateFormat="yyyy"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}