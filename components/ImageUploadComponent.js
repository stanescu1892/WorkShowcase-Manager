import React from "react";

export default function ImageUploadComponent({ imageUrl, handleUpload }) {
  return (
    <div className="mb-4">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="preview"
          className="w-32 h-32 mx-auto object-cover rounded-md mb-2"
        />
      ) : (
        <label className="cursor-pointer text-blue-500 transition duration-200 ease-in-out hover:text-blue-700">
          Upload image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              handleUpload(URL.createObjectURL(e.target.files[0]))
            }
          />
        </label>
      )}
    </div>
  );
}
