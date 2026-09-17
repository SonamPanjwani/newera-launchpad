export type Course = {
  id: "full-stack" | "ai-automation" | "data-science-ai";
  title: string;
  description: string;
  skills: string[];
  duration: string;
  level: string;
  projectCount: string;
  projectFocus: string;
  ctaLabel: string;
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
    description: "Design, build, and deploy complete web products—from responsive interfaces to secure APIs and production databases.",
    skills: ["HTML & CSS", "JavaScript", "React", "TypeScript", "Node.js", "PostgreSQL", "Git & GitHub", "Docker"],
    duration: "6 months",
    level: "Level 1",
    projectCount: "Project-based",
    projectFocus: "Build and deploy a full-stack product with authentication, data, APIs, and a responsive interface.",
    ctaLabel: "View Full Stack Project",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Create reliable AI-powered automations, connected workflows, and practical agents that solve real operational problems.",
    skills: ["n8n", "REST APIs", "Webhooks", "OpenAI APIs", "Claude APIs", "Prompt design", "AI agents", "Workflow testing"],
    duration: "6 months",
    level: "Level 2",
    projectCount: "Project-based",
    projectFocus: "Design a multi-step AI workflow that connects services, handles data, and automates a repeatable business process.",
    ctaLabel: "View Automation Project",
  },
  {
    id: "data-science-ai",
    title: "Data Science & AI",
    description: "Explore, model, and communicate data while building intelligent applications with modern machine-learning workflows.",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Data visualization", "scikit-learn", "Machine learning", "Model evaluation"],
    duration: "6 months",
    level: "Level 3",
    projectCount: "Project-based",
    projectFocus: "Take a real dataset from exploration to a tested predictive model and present the insights in an interactive application.",
    ctaLabel: "View Data & AI Project",
  },
];

export const instructors: Instructor[] = [];
export const projects: Project[] = [];
export const testimonials: Testimonial[] = [];
export const faqs: FaqItem[] = [];