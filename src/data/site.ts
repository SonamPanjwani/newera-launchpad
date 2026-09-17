export type Course = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  level: string;
  projectCount: string;
};

export type Instructor = {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  image?: string;
  isPlaceholder: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  difficulty: string;
  courseId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  course: string;
  quote: string;
  isPlaceholder: boolean;
};

export type FaqItem = { question: string; answer: string };

export const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "Why NewEra", href: "#why-newera" },
  { label: "Learning Experience", href: "#learning-experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustIndicators = [
  "Project-based curriculum",
  "Modern technology stack",
  "AI-first workflows",
  "Portfolio-focused learning",
] as const;

export const stats = [
  { value: "—", label: "Learners", note: "Verified figure coming soon" },
  { value: "—", label: "Projects built", note: "Verified figure coming soon" },
  { value: "03", label: "Focused programs", note: "Current program offering" },
  { value: "—", label: "Practical learning", note: "Verified figure coming soon" },
] as const;

export const courses: Course[] = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    description: "Design and ship modern web products from interface to infrastructure.",
    skills: ["React", "TypeScript", "Node.js"],
    duration: "To be confirmed",
    level: "Beginner to advanced",
    projectCount: "To be confirmed",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Build useful automations, agents, and connected AI workflows.",
    skills: ["n8n", "APIs", "AI agents"],
    duration: "To be confirmed",
    level: "Beginner to intermediate",
    projectCount: "To be confirmed",
  },
  {
    id: "data-science-ai",
    title: "Data Science & AI",
    description: "Turn data into models, decisions, and intelligent applications.",
    skills: ["Python", "Machine learning", "Data"],
    duration: "To be confirmed",
    level: "Beginner to advanced",
    projectCount: "To be confirmed",
  },
];

export const instructors: Instructor[] = [];
export const projects: Project[] = [];
export const testimonials: Testimonial[] = [];
export const faqs: FaqItem[] = [];