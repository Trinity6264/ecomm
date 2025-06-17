import { FormDataX } from '@/app/checkout/page';
import React from 'react'


interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<FormDataX>>;
  error?: string;
}

const InputField = (props: InputFieldProps) => {
  const { label, name, onChange, value, error, type = "text" } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((prev) => ({
      ...prev,
      [name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between">
        <label htmlFor={name} className={`font-bold text-[12px] text-[#000] mb-2 ${error ? 'text-red-500' : ''}`}>{label}</label>
        {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={`border rounded-lg px-4 py-3 placeholder-black placeholder:text-[12px] placeholder:opacity-40 font-bold ${error ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'} outline-none transition-colors`}
      />
    </div>
  )
}

export default InputField
