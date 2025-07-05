import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white px-6 pt-24">
        <div className="max-w-6xl mx-auto min-h-[calc(100vh-96px)] w-full">
          {/* Grid on desktop, snap scroll on mobile */}
          <div className="grid md:grid-cols-2 gap-12 w-full md:h-auto h-screen overflow-y-scroll md:overflow-visible snap-y snap-mandatory scroll-smooth">
            {/* Form */}
            <div className="snap-start h-screen md:h-auto">
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div className="p-4 space-y-4 text-base leading-relaxed flex items-center snap-start h-screen md:h-auto">
              <div>
                <p>
                  <strong>
                    For all your fencing needs, do not hesitate to contact us on:
                  </strong>
                </p>
                <p>
                  <strong>Phone:</strong> +27 (0) 82-565-6621
                </p>
                <p>
                  <strong>Email:</strong> mcfencing22@gmail.com
                </p>
                <p>
                  <strong>Website:</strong> www.mcfencing.co.za
                </p>
                <p className="mt-6 italic text-lg font-semibold">
                  GOOD FENCES MAKE GOOD NEIGHBOURS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}