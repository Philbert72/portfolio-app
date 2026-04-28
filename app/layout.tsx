import "./globals.css";

export const metadata = {
  title: "Philbert Tan | CS & AI Developer",
  description: "Portfolio of Philbert Tan - Computer Science Student, AI Researcher, and Blockchain Enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080c12] text-[#e8eaf0] antialiased">
        {/* Directly rendering children allows the redesign's mx-auto max-w-[900px] to work correctly */}
        {children}
      </body>
    </html>
  );
}