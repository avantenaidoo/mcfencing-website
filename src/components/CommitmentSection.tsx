import React from "react";

export default function CommitmentSection() {
  return (
    <section
      className="snap-start min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
      style={{ color: "var(--foreground)" }}
    >
      <div className="max-w-4xl text-center">
        <h2
          className="text-4xl font-extrabold mb-8 tracking-tight"
          style={{ color: "var(--primary)" }}
        >
          Commitment
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          We pride ourselves on our commitment to customer service and the quality of every
          project, big or small. Our professional staff is held to the highest standard to be there
          at every step of your fencing or construction needs.
          MC Fencing relies on our reputation of being dependable, committed to
          excellence and going the extra mile to provide 100% customer satisfaction.
        </p>
      </div>
    </section>
  );
}