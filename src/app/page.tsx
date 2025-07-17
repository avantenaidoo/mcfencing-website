import Navbar from "@/components/Navbar";
import FenceReasons from "@/components/FenceReasons";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 px-6 pb-16 flex flex-col items-center text-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <blockquote className="text-2xl font-semibold max-w-2xl mb-4 leading-relaxed">
          &ldquo;Good fences make good neighbors! We provide quality fencing solutions tailored to your needs.&rdquo;
        </blockquote>
        <cite className="text-[var(--text-muted)] mb-12 font-medium">— Robert Frost</cite>

        <FenceReasons />

        <section className="w-full max-w-2xl mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Customer reviews</h2>
          <Link
            href="/reviews"
            className="inline-block px-8 py-3 rounded-md bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-semibold shadow-md transition duration-300"
          >
            Read Reviews
          </Link>
        </section>
      </main>
    </>
  );
}