import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
