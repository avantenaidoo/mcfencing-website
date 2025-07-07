import Navbar from "@/components/Navbar";
import FenceReasons from "@/components/FenceReasons";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 p-6 flex flex-col items-center text-center min-h-screen bg-black text-white">
        <blockquote className="text-xl italic text-gray-200 max-w-xl mb-2 font-semibold">
          &ldquo;Good fences make good neighbors! We provide quality fencing solutions tailored to your needs.&rdquo;
        </blockquote>
        <cite className="text-gray-400 mb-8 font-semibold">— Robert Frost</cite>

        <FenceReasons />

        {/* ✅ Simple Reviews Teaser at Bottom */}
        <section className="w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Customer reviews:</h2>
          <Link
            href="/reviews"
            className="inline-block border border-white text-white px-6 py-2 rounded"
          >
            Read Reviews
          </Link>
        </section>
      </main>
    </>
  );
}