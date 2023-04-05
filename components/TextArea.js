import React from "react";

export default function TextArea({ id, label, value, onChange, className }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}:
      </label>
      <textarea
        id={id}
        value={value}
        style={{ resize: "none" }}
        onChange={onChange}
        className={`${className} p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
        required
      ></textarea>
    </div>
  );
}
