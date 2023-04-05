import React, { useState, useEffect } from "react";
import FormComponent from "./formComponent";
import CardComponent from "./CardComponent";
import { getEntries, addEntry } from "../utils/localStorageKey";

const ContentSection = ({ className }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  return (
    <section
      className={`flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 ${className}`}
    >
      <div className="w-full max-w-4xl p-6 bg-white rounded-md shadow-md">
        <FormComponent addEntry={addEntry} setEntries={setEntries} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {entries.map((entry) => (
            <CardComponent
              key={entry.id}
              entry={entry}
              setEntries={setEntries}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
