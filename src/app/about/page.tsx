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
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-black"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <AboutSection />
        <CommitmentSection />
        <MeetTheTeam />
      </main>
    </>
  );
}