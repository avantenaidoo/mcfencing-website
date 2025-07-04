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
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-black pt-24"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <section className="snap-start min-h-screen">
          <AboutSection />
        </section>

        <section className="snap-start min-h-screen">
          <CommitmentSection />
        </section>

        <section className="snap-start min-h-screen">
          <MeetTheTeam />
        </section>
      </main>
    </>
  );
}