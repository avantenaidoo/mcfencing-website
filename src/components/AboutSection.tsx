import React from "react";

export default function AboutSection() {
  return (
    <section
      className="snap-start min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
      style={{ color: "var(--foreground)" }}
    >
      <div className="max-w-4xl text-center">
        <h1
          className="text-5xl font-extrabold mb-8 tracking-tight"
          style={{ color: "var(--primary)" }}
        >
          About MC Fencing
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          We are a family owned & operated business. We specialise in residential, commercial, and multi-family projects and proudly serve the Western Cape and surrounding areas from Knysna to Laingsburg to Port Nolloth.
          Our team uses the highest quality materials and innovative planning to create the perfect fence addition for your home or business.
        </p>
      </div>
    </section>
  );
}