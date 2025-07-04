import React from "react";
import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-black pt-24"
        style={{
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          main::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Services Intro Section */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-3xl w-full">
            <h1 className="text-4xl font-bold mb-8">
              Fence and Gate Contractor Services
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              MC Fencing has experience with the following types of fence and gate installations:
            </p>
            <ul className="text-left space-y-3 text-lg">
              <li>🛠️ Clear-Vue Fencing</li>
              <li>🛠️ Electric Fencing</li>
              <li>🛠️ Palisade Fencing</li>
              <li>🛠️ Plastic Coated Fencing</li>
              <li>🛠️ Razor Wire</li>
              <li>🛠️ Steel and Wooden Fencing</li>
            </ul>
            <p className="mt-8 text-lg">
              Visit our{" "}
              <a
                href="/gallery"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Gallery
              </a>{" "}
              page for more evidence of our completed projects and services.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}