import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ReviewForm from "@/components/ReviewForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 pt-32 pb-20 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

          {/* Contact Info + Review Form */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="text-base leading-relaxed">
              <p className="mb-2">
                <strong>Phone:</strong> +27 (0) 82-565-6621
              </p>
              <p className="mb-2">
                <strong>Email:</strong> mcfencing22@gmail.com
              </p>
              <p className="mb-2">
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.mcfencing.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] underline hover:text-[var(--secondary)]"
                >
                  www.mcfencing.co.za
                </a>
              </p>
              <p className="italic font-semibold text-lg mt-4 text-[var(--foreground)]">
                GOOD FENCES MAKE GOOD NEIGHBOURS
              </p>
            </div>

            {/* Review Form (visible on desktop) */}
            <div className="hidden md:block">
              <ReviewForm />
            </div>
          </div>
        </div>

        {/* Mobile: Review Form shown below everything */}
        <div className="md:hidden mt-16">
          <ReviewForm />
        </div>
      </section>
    </>
  );
}