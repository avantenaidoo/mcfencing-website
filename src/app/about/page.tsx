import React from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CommitmentSection from "@/components/CommitmentSection";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth pt-32 bg-[var(--background)] text-[var(--foreground)]"
        style={{ scrollSnapType: "y mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          main::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <section className="snap-start min-h-screen px-6 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <AboutSection />
          </div>
        </section>

        <section className="snap-start min-h-screen px-6 flex items-center justify-center bg-white">
          <div className="max-w-4xl w-full">
            <CommitmentSection />
          </div>
        </section>

        <section className="snap-start min-h-screen px-6 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            <MeetTheTeam />
          </div>
        </section>
      </main>
    </>
  );
}