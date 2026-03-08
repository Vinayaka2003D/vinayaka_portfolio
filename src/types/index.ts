export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "mobile" | "database" | "tools";
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  note?: string;       // ← NEW: NDA label / project type
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;    // ← NEW
}

export interface Education {
  degree: string;
  institute: string;
  score: string;
  year: string;
}

export interface AboutData {
  bio: string;
  education: Education[];
}
