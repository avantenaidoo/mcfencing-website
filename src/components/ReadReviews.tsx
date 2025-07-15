import React from "react";

export default function ReadReviews() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h1>

      <div className="space-y-12">
        {/* Review 1 */}
        <div className="p-6 rounded shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            So glad my son recommended MC Fencing after the second house burglary in two
            weeks. First impression, the punctuality of the meeting to discuss the project was
            good. The preparation and submission of the quotation were witnessed to
            professional service. The execution of the project was timely and high quality, and
            they met all specifications and expectations. Their after service is beyond words. We
            truly can recommend Clint and his team.
          </p>
          <p className="italic font-semibold text-right">~ Chris & Marilisé</p>
        </div>

        {/* Review 2 */}
        <div className="p-6 rounded shadow-md">
          <p className="text-lg leading-relaxed mb-4">
            We want to thank you for your exemplary and professional service. The two clear-
            vue fences you have erected on our property are of the high quality and standard
            your company offers, with your personal supervision, and hands on input at all times.
            You went the extra mile for us to erect the one fence by moving the existing low wall
            pillars. Thanks to you Clint, Gavin and your team. We will highly recommend you to
            anyone thinking of having a fence erected.
          </p>
          <p className="italic font-semibold text-right">~ Gary and Colleen Querl, Gordons Bay</p>
        </div>
      </div>
    </section>
  );
}