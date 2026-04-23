import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Philbert Tan | CS & AI Developer",
  description:
    "Portfolio of Philbert Tan - Computer Science Student, AI Researcher, and Blockchain Enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
