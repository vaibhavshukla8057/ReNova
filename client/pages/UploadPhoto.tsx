import React, { useState } from "react";

export default function UploadPhoto() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      // Condition: Only jpg, jpeg, png and max 2MB
      if (
        !["image/jpeg", "image/png", "image/jpg"].includes(selected.type)
      ) {
        setMessage("Only JPG, JPEG, PNG files allowed.");
        setFile(null);
      } else if (selected.size > 2 * 1024 * 1024) {
        setMessage("File size must be less than 2MB.");
        setFile(null);
      } else {
        setMessage("");
        setFile(selected);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("photo", file);

    const res = await fetch("/api/upload-photo", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="file"
        accept="image/jpeg,image/png,image/jpg"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={!file}
      >
        Upload Photo
      </button>
      {message && <div className="text-red-500">{message}</div>}
    </form>
  );
}