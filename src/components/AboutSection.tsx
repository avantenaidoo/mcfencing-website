import React from "react";

export default function AboutSection() {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-black text-white p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About MC Fencing</h1>
      <p className="text-lg leading-relaxed max-w-3xl text-center">
        We are a family owned & operated business.
        We specialise in residential, commercial, and multi-family projects and proudly serve
        the Western Cape and surrounding areas from Knysna to Laingsburg to Port Nolloth.
        Our team uses the highest quality materials and innovative planning to create the
        perfect fence addition for your home or business.
      </p>
    </section>
  );
}
