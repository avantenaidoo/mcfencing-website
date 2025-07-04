import React from "react";

export default function MeetTheTeam() {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-black text-white p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Meet The Team</h2>
      <div className="w-full h-64 bg-gray-700 rounded mb-8 flex justify-center items-center">
        {/* Placeholder for team photo */}
        <span className="text-white text-xl">Team Photo Placeholder</span>
      </div>
      <p className="text-lg leading-relaxed max-w-3xl text-center">
        {/* Later you can expand this to show individual bios */}
        Our dedicated team is made up of skilled professionals passionate about quality fencing.
      </p>
    </section>
  );
}