import type { Skill, Project, Experience, ContactInfo } from "../types";

export const heroData = {
  name: "Vinayaka D",
  tagline: "Mobile App Developer (Flutter)",
  subtitle:
    "Building cross-platform mobile applications with scalable UI architectures, REST API integrations, and production-ready Flutter solutions.",
  ctaLabel: "View My Work",
};

export const aboutData = {
  bio: `I'm a Flutter Mobile App Developer with 12 months of hands-on experience at Accolade Tech Solutions Pvt. Ltd.
  I specialize in cross-platform mobile development using Flutter & Dart, building scalable UI architectures,
  integrating REST APIs, and delivering production-ready apps across social platforms, business tools, and educational systems.`,
  education: [
    {
      degree: "MSc Software Technology",
      institute: "St. Aloysius Institute of Management and IT (AIMIT), Mangalore",
      score: "CGPA 8.51",
      year: "2025",
    },
    {
      degree: "BSc PMCs",
      institute: "Dr. P Dayananda Pai – P Satisha Pai Govt. First Grade College",
      score: "CGPA 8.39",
      year: "2023",
    },
  ],
};

export const skills: Skill[] = [
  { name: "Flutter", level: 92, category: "mobile" },
  { name: "Dart", level: 90, category: "mobile" },
  { name: "REST API Integration", level: 85, category: "mobile" },
  { name: "Android Development", level: 80, category: "mobile" },
  { name: "Kotlin", level: 70, category: "mobile" },
  { name: "Java", level: 72, category: "backend" },
  { name: "C#", level: 68, category: "backend" },
  { name: "SQL", level: 75, category: "database" },
  { name: "HTML / CSS", level: 80, category: "frontend" },
  { name: "Git", level: 78, category: "tools" },
  { name: "Android Studio", level: 85, category: "tools" },
  { name: "VS Code", level: 88, category: "tools" },
];

export const projects: Project[] = [
  // NDA-Protected Professional Projects
  {
    id: 1,
    title: "Community Engagement & Donation Platform",
    description:
      "Social-style mobile platform for organizations to post updates, engage communities, track donations, and manage role-based authentication flows.",
    tech: ["Flutter", "Dart", "REST API"],
    note: "NDA Protected · Flutter Frontend · Team of 2 · 2 Months",
  },
  {
    id: 2,
    title: "Business Billing & Accounting App",
    description:
      "Invoice generation with tax calculations, quotation workflows, client management, meeting dashboards, AI voice assistant, and camera-based attendance.",
    tech: ["Flutter", "Dart", "REST API"],
    note: "NDA Protected · Flutter Frontend · Team of 2 · 4 Months",
  },
  {
    id: 3,
    title: "Educational Institution Management System",
    description:
      "Role-based dashboards for students, faculty, and parents — covering timetables, attendance, marks, study materials, and academic notifications.",
    tech: ["Flutter", "Dart", "REST API"],
    note: "NDA Protected · Flutter Frontend · Team of 3 · 3 Months",
  },
  {
    id: 4,
    title: "Event Ticket Booking & Verification System",
    description:
      "Event booking interfaces with QR-code ticket generation, volunteer scanning module, and complete ticket validation & attendee management.",
    tech: ["Flutter", "Dart", "QR Code"],
    note: "NDA Protected · Flutter Frontend · Team of 2",
  },
  // Personal Projects
  {
    id: 5,
    title: "ShareCalculator",
    description:
      "Utility app that splits group order costs fairly — handling taxes, discounts, delivery charges, platform fees, and animated modular UI.",
    tech: ["Flutter", "Dart"],
    note: "Personal Project",
  },
  {
    id: 6,
    title: "Gadiyara – Kannada Clock Widget",
    description:
      "Flutter clock widget displaying time in Kannada script with customizable colors, fonts, transparency, and Kotlin-powered background WorkManager updates.",
    tech: ["Flutter", "Dart", "Kotlin", "WorkManager"],
    note: "Personal Project",
  },
  {
    id: 7,
    title: "Temple Billing & Asset Management",
    description:
      "Non-profit billing and asset management system for a local temple — covering donation tracking, financial records, and asset inventory. (In Development)",
    tech: ["Flutter", "Dart", "SQL"],
    note: "Personal Project · In Development",
  },
  // Academic
  {
    id: 8,
    title: "AI Chatbot for Vaccination Queries",
    description:
      "AI chatbot answering vaccination queries for pregnant women and children. Published in SACAIM 2024 research proceedings.",
    tech: ["Python", "LangChain", "Ollama", "ReactJS", "HTML", "CSS"],
    note: "Academic Project · Published Research",
  },
];

export const experiences: Experience[] = [
  {
    role: "Mobile App Developer",
    company: "Accolade Tech Solutions Pvt. Ltd.",
    period: "Internship + Full-Time · 12 Months",
    points: [
      "Developed cross-platform mobile applications using Flutter and Dart",
      "Designed responsive UI components and reusable widgets for scalable mobile architectures",
      "Integrated REST APIs and handled dynamic data rendering",
      "Collaborated with agile teams to design and implement product features",
      "Participated in debugging, testing, and performance optimization",
      "Maintained clean and modular code structures following best practices",
    ],
  },
];

export const achievements = [
  "Conducted a one-day workshop on Mobile App Development using Flutter for MSc Software Technology students as an alumnus",
  "Published research chapter 'VacciBot: Chatbot for Addressing Vaccination Query of Pregnant Women and Children' in SACAIM 2024",
  "Event Head for Coding Event at a National Level IT Fest",
  "Organized a workshop on Web Development using C# for undergraduate students",
  "Conducted Micro Teaching sessions for high school students",
];

export const contactInfo: ContactInfo = {
  email: "vinayak003d@gmail.com",
  phone: "+91 94831 21037",
  location: "Mangaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/vinayaka-d",
  website: "https://vinayakad.in",
};
export const assets = {
  photo: "/photo.jpeg",
  // resume: "https://drive.google.com/uc?export=download&id=1fZO8AkrLqiIOFmh5htjDA3tO0b05LTaz",
resume: "https://drive.google.com/file/d/1fZO8AkrLqiIOFmh5htjDA3tO0b05LTaz/view",
  website: "vinayakad.in",
};
