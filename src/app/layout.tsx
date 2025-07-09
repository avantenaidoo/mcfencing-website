import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MC Fencing",
  description: "Good fences make good neighbors!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="MC Fencing" />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}