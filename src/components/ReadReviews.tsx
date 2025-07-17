import React from "react";

export default function ReadReviews() {
  return (
    <section
      className="max-w-4xl mx-auto px-6 py-12 rounded-md"
      style={{
        backgroundColor: "var(--background)",
        boxShadow: "0 2px 8px rgba(0, 157, 224, 0.1)", // slightly tinted to match --primary
      }}
    >
      <h1
        className="text-3xl font-extrabold mb-10 text-center"
        style={{ color: "var(--primary)" }}
      >
        Customer Reviews
      </h1>

      <div className="space-y-12">
        {/* Review 1 */}
        <div
          className="p-6 rounded border"
          style={{
            borderColor: "#E3E8F0", // keep soft neutral border or move to a variable if needed
            backgroundColor: "var(--background)",
          }}
        >
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "var(--foreground)" }}
          >
            So glad my son recommended MC Fencing after the second house burglary in two
            weeks. First impression, the punctuality of the meeting to discuss the project was
            good. The preparation and submission of the quotation were witnessed to
            professional service. The execution of the project was timely and high quality, and
            they met all specifications and expectations. Their after service is beyond words. We
            truly can recommend Clint and his team.
          </p>
          <p
            className="italic font-semibold text-right"
            style={{ color: "var(--text-muted)" }}
          >
            ~ Chris & Marilisé
          </p>
        </div>

        {/* Review 2 */}
        <div
          className="p-6 rounded border"
          style={{
            borderColor: "#E3E8F0",
            backgroundColor: "var(--background)",
          }}
        >
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "var(--foreground)" }}
          >
            We want to thank you for your exemplary and professional service. The two clear-
            vue fences you have erected on our property are of the high quality and standard
            your company offers, with your personal supervision, and hands on input at all times.
            You went the extra mile for us to erect the one fence by moving the existing low wall
            pillars. Thanks to you Clint, Gavin and your team. We will highly recommend you to
            anyone thinking of having a fence erected.
          </p>
          <p
            className="italic font-semibold text-right"
            style={{ color: "var(--text-muted)" }}
          >
            ~ Gary and Colleen Querl, Gordons Bay
          </p>
        </div>
      </div>
    </section>
  );
}