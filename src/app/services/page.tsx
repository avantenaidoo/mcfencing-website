import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
            Fence and Gate Contractor Services
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-[var(--foreground)]">
            MC Fencing offers expert installation and maintenance services for a wide range of fencing and gate solutions:
          </p>

          <ul className="text-left space-y-2 text-base font-medium mb-8 pl-4 list-disc marker:text-[var(--primary)]">
            <li>Clear-Vue Fencing</li>
            <li>Electric Fencing</li>
            <li>Palisade Fencing</li>
            <li>Plastic Coated Fencing</li>
            <li>Razor Wire</li>
            <li>Steel and Wooden Fencing</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-[var(--secondary)]">
            Additional Services Offered:
          </h2>

          <ul className="text-left space-y-2 text-base font-medium mb-8 pl-4 list-disc marker:text-[var(--secondary)]">
            <li>Burglar Bars</li>
            <li>Security Door Gates</li>
            <li>Sliding Gates</li>
            <li>Small Steel Work</li>
            <li>General Handyman Repairs</li>
          </ul>

          <p className="text-base leading-relaxed">
            Want to see our work? Visit the{" "}
            <Link
              href="/gallery"
              className="font-semibold text-[var(--primary)] hover:underline"
            >
              gallery
            </Link>{" "}
            to view recent projects and installations.
          </p>
        </div>
      </main>
    </>
  );
}