import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const categories = [
  { slug: "clear-vue-fencing", label: "Clear-Vue Fencing" },
  { slug: "electric-fencing", label: "Electric Fencing" },
  { slug: "palisade-fencing", label: "Palisade Fencing" },
  { slug: "plastic-coated-fencing", label: "Plastic Coated Fencing" },
  { slug: "razor-wire", label: "Razor Wire" },
  { slug: "steel-and-wooden-fencing", label: "Steel and Wooden Fencing" },
  { slug: "videos", label: "Videos" },
];

export default function GalleryHomePage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 pt-32 pb-20 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-10 text-center text-[var(--primary)]">
            Gallery Categories
          </h1>
          <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {categories.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={`/gallery/${slug}`}
                  className="block w-full text-lg font-semibold text-center bg-[var(--primary)] text-white py-4 rounded-md shadow hover:bg-[var(--secondary)] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}