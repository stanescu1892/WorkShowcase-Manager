import React, { useState } from "react";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { updateEntry, deleteEntry } from "../utils/localStorageKey";

const CardComponent = ({ entry, setEntries }) => {
  const { title, description, photo, id } = entry;
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleUpdate = () => {
    const updatedEntry = updateEntry({
      ...entry,
      title: editedTitle,
      description: editedDescription,
    });
    setEntries((prevEntries) =>
      prevEntries.map((e) => (e.id === id ? updatedEntry : e))
    );
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setEditedDescription(description);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteEntry(id);
    setEntries((prevEntries) => prevEntries.filter((e) => e.id !== id));
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md relative transition duration-300 ease-in-out transform hover:scale-105">
      {photo && (
        <img
          src={photo}
          alt={title}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
      )}
      {editMode ? (
        <input
          className="text-xl font-bold mb-4 w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <h2 className="text-xl font-bold mb-4">{title}</h2>
      )}
      {editMode ? (
        <textarea
          className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <p className="mb-4">{description}</p>
      )}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {editMode ? (
          <>
            <button onClick={handleUpdate} className="text-green-500">
              <AiOutlineCheck size={24} />
            </button>
            <button onClick={handleCancel} className="text-red-500">
              <AiOutlineClose size={24} />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEditMode(true)} className="text-blue-500">
              <AiFillEdit size={24} />
            </button>
            <button onClick={handleDelete} className="text-red-500">
              <AiFillDelete size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
