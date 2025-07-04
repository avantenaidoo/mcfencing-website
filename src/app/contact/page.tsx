import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get a Quote</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div className="p-4 space-y-4 text-base leading-relaxed">
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
      </section>
    </>
  );
}