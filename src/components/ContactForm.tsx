"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, replace with your actual email service
    alert("Form submitted! This should send to mcfencing22@gmail.com");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-white text-white p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-white text-white p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Project Type:</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 border border-white text-white p-2 rounded"
        >
          <option value="">Select a service</option>
          <option value="Palisade Fencing">Palisade Fencing</option>
          <option value="ClearVu Fencing">ClearVu Fencing</option>
          <option value="Razor Wire">Razor Wire</option>
          <option value="Mesh Fencing">Mesh Fencing</option>
          <option value="Gates & Automation">Gates & Automation</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">About Project:</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-transparent border border-white text-white p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition"
      >
        Submit
      </button>
    </form>
  );
}