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
    alert("Form submitted! This should send to mcfencing22@gmail.com");
    console.log(formData);
  };

  return (
    <>
      <h2
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: "var(--foreground)" }}
      >
        Get a Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 font-medium"
            style={{ color: "var(--foreground)" }}
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white border"
            style={{
              borderColor: "#E3E8F0",
              color: "var(--foreground)",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-medium"
            style={{ color: "var(--foreground)" }}
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white border"
            style={{
              borderColor: "#E3E8F0",
              color: "var(--foreground)",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="block mb-1 font-medium"
            style={{ color: "var(--foreground)" }}
          >
            Project Type:
          </label>
          <select
            name="projectType"
            id="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white border"
            style={{
              borderColor: "#E3E8F0",
              color: "var(--foreground)",
            }}
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
          <label
            htmlFor="about"
            className="block mb-1 font-medium"
            style={{ color: "var(--foreground)" }}
          >
            About Project:
          </label>
          <textarea
            name="about"
            id="about"
            value={formData.about}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-2 rounded bg-white border"
            style={{
              borderColor: "#E3E8F0",
              color: "var(--foreground)",
            }}
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 rounded font-semibold transition-colors"
          style={{
            backgroundColor: "var(--primary)",
            color: "#ffffff",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}