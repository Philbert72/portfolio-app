import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The CV used to live at /Phil_resume.pdf; keep old links working.
  async redirects() {
    return [{ source: "/Phil_resume.pdf", destination: "/Philbert%20CV.pdf", permanent: true }];
  },
};

export default nextConfig;
