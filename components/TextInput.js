import React from "react";

export default function TextInput({ id, label, value, onChange, className }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}:
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className={`${className} p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
        required
      />
    </div>
  );
}
