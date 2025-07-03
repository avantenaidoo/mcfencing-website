import Navbar from "@/components/Navbar";
import FenceReasons from "@/components/FenceReasons";

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
      </main>
    </>
  );
}