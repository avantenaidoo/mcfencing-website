import Navbar from "@/components/Navbar";
import FenceReasons from "@/components/FenceReasons";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-36 p-6 flex flex-col items-center text-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <blockquote className="text-xl italic max-w-xl mb-2 font-semibold">
          &ldquo;Good fences make good neighbors! We provide quality fencing solutions tailored to your needs.&rdquo;
        </blockquote>
        <cite className="mb-8 font-semibold">— Robert Frost</cite>

        <FenceReasons />

        {/* ✅ Simple Reviews Teaser at Bottom */}
        <section className="w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Customer reviews:</h2>
          <Link
            href="/reviews"
            className="inline-block border px-6 py-2 rounded"
            style={{
              borderColor: "var(--foreground)",
              color: "var(--foreground)",
            }}
          >
            Read Reviews
          </Link>
        </section>
      </main>
    </>
  );
}