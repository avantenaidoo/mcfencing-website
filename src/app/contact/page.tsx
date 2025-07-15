import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ReviewForm from "@/components/ReviewForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 pt-24">
        <div className="max-w-6xl mx-auto min-h-[calc(100vh-96px)] w-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 w-full md:h-auto h-screen overflow-y-scroll md:overflow-visible snap-y snap-mandatory scroll-smooth">
            {/* Contact Form */}
            <div className="snap-start h-screen md:h-auto">
              <ContactForm />
            </div>

            {/* Contact Details + Review form (desktop view) */}
            <div className="flex flex-col justify-start snap-start h-screen md:h-auto p-0 m-0 space-y-0 text-base leading-relaxed">
              <div className="p-0 m-0">
                <p className="m-0 p-0">
                  <strong>
                    For all your fencing needs, do not hesitate to contact us on:
                  </strong>
                </p>
                <p className="m-0 p-0">
                  <strong>Phone:</strong> +27 (0) 82-565-6621
                </p>
                <p className="m-0 p-0">
                  <strong>Email:</strong> mcfencing22@gmail.com
                </p>
                <p className="m-0 p-0">
                  <strong>Website:</strong> www.mcfencing.co.za
                </p>
                <p className="italic font-semibold text-lg m-0 p-0">
                  GOOD FENCES MAKE GOOD NEIGHBOURS
                </p>
              </div>

              {/* REVIEW FORM VISIBLE ON DESKTOP */}
              <div className="hidden md:block mt-0 p-0 m-0">
                <ReviewForm />
              </div>
            </div>

            {/* Review Form as own snap section on mobile */}
            <div className="snap-start h-screen md:hidden p-4 m-0">
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}