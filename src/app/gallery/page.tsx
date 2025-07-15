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
];

export default function GalleryHomePage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 pt-24">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-3xl font-bold mb-6 text-center">Gallery Categories</h1>
          <ul className="space-y-6">
            {categories.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={`/gallery/${slug}`}
                  className="block text-xl underline transition-all duration-200 hover:opacity-80"
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