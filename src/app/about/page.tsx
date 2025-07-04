import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-black text-white min-h-screen scroll-snap-y snap-mandatory overflow-y-scroll">
        <AboutSection />
      </main>
    </>
  );
}