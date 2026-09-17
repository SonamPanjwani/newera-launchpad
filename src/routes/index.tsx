import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/components/StatsSection";
import { CoursesSection } from "@/components/CoursesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NewEra Solutions | Full Stack, AI & Data Science" },
      { name: "description", content: "Build real-world technology skills with NewEra Solutions. Learn Full Stack Development, AI Automation and Data Science & AI through practical projects." },
      { property: "og:title", content: "NewEra Solutions | Full Stack, AI & Data Science" },
      { property: "og:description", content: "Practical, project-based learning in Full Stack Development, AI Automation, and Data Science & AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NewEra Solutions",
        description: "Technology education in full stack development, AI automation, and data science.",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection />
      <CoursesSection />
    </main>
  );
}
