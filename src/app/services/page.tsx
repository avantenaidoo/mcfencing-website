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
          <div className="max-w-3xl w-full text-white">
            <h1 className="text-4xl font-bold mb-8">
              Fence and Gate Contractor Services
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              MC Fencing has experience with the following types of fence and gate installations:
            </p>
            <ul className="text-left space-y-3 text-lg mb-8">
              <li>🛠️ Clear-Vue Fencing</li>
              <li>🛠️ Electric Fencing</li>
              <li>🛠️ Palisade Fencing</li>
              <li>🛠️ Plastic Coated Fencing</li>
              <li>🛠️ Razor Wire</li>
              <li>🛠️ Steel and Wooden Fencing</li>
            </ul>

            {/* ✅ Additional Services */}
            <h2 className="text-2xl font-semibold mb-4">Additional Services Offered:</h2>
            <ul className="text-left space-y-3 text-lg mb-8">
              <li>- Burglar bars</li>
              <li>- Security door gates</li>
              <li>- Sliding gates</li>
              <li>- Small steel work</li>
              <li>- General handyman repairs</li>
            </ul>

            <p className="text-lg">
              Visit our{" "}
              <a
                href="/gallery"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Gallery
              </a>{" "}
              page to view some of our completed projects and services.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}