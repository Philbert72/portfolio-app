export const profile = {
  name: "Philbert Tan",
  email: "philtan3805@gmail.com",
  location: "Jakarta, Indonesia",
  resume: "/Phil_resume.pdf",
  links: {
    github: "https://github.com/Philbert72",
    linkedin: "https://www.linkedin.com/in/philbert-tan",
    instagram: "https://www.instagram.com/philbert_tan11",
  },
};

export interface TimelineEntry {
  when: string;
  title: string;
  org: string;
  detail?: string;
  kind: "education" | "work" | "publication" | "volunteer";
}

export const timeline: TimelineEntry[] = [
  {
    when: "2026",
    title: "Exchange student",
    org: "National Sun Yat-sen University, Taiwan",
    detail: "Reinforcement learning, Python and information security.",
    kind: "education",
  },
  {
    when: "Sep – Dec 2025",
    title: "Chief Operating Officer",
    org: "MiniMemo, Jakarta",
    detail:
      "Re-engineered the photo-to-keychain workflow, cutting customer wait times by 40% and raising hourly throughput by 25%.",
    kind: "work",
  },
  {
    when: "Oct 2025",
    title: "Special needs education facilitator",
    org: "Teach for Indonesia · SLBN 01",
    kind: "volunteer",
  },
  {
    when: "2025",
    title: "Graph Neural Networks for Cloud Security",
    org: "IEEE · AiDAS",
    detail: "Detecting data breaches in real time with GNNs.",
    kind: "publication",
  },
  {
    when: "2023 – now",
    title: "B.Sc. Computer Science",
    org: "Bina Nusantara University, Jakarta",
    detail: "GPA 3.81 / 4.00.",
    kind: "education",
  },
];

export const certifications = [
  { name: "Alibaba Cloud Certified Associate, Cloud Engineer", when: "Jun 2025" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", when: "Apr 2025" },
  { name: "IELTS Academic 7.0 (C1)", when: "" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "PHP", "SQL", "C", "Java"] },
  { group: "ML & modeling", items: ["PyTorch", "Scikit-learn", "GNNs", "NMF", "Computer vision", "NLP"] },
  { group: "Data", items: ["Pandas", "NumPy", "Matplotlib", "OpenCV"] },
  { group: "Tools", items: ["Git", "Docker", "Linux", "PostgreSQL", "MySQL", "Alibaba Cloud", "Azure"] },
];
