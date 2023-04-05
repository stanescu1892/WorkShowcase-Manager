import React, { useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import ImageUploadComponent from "./ImageUploadComponent";

export default function FormComponent({ addEntry, setEntries }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    photo: null,
  });
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = (photo) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: photo,
    }));
    setImageUrl(photo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = addEntry({ ...formData });
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
    setFormData({ title: "", description: "", photo: null });
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <TextInput
        id="title"
        label="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <TextArea
        id="description"
        label="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ImageUploadComponent imageUrl={imageUrl} handleUpload={handleUpload} />
      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
        >
          Add entry
        </button>
      </div>
    </form>
  );
}
