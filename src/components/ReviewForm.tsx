"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div
      className="mt-15 border-t pt-6"
      style={{ borderColor: "#E3E8F0" }}
    >
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ color: "var(--foreground)" }}
      >
        Leave a Review
      </h2>

      {submitted ? (
        <p
          className="text-lg font-medium"
          style={{ color: "var(--primary)" }}
        >
          Thank you for your feedback!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded bg-white"
              style={{
                borderColor: "#E3E8F0",
                color: "var(--foreground)",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Your Feedback:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border p-2 rounded bg-white"
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
      )}
    </div>
  );
}