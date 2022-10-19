import React from "react";

interface IInputRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio: React.FC<IInputRadio> = ({
  id,
  name,
  defaultChecked,
  label,
}) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="radio"
        defaultChecked={defaultChecked}
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
      />
      <label
        htmlFor={id}
        className="ml-2 block text-base font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
};
