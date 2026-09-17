import { ArrowUpRight, Boxes, Braces, Clock3, Network, Workflow } from "lucide-react";
import type { PointerEvent } from "react";
import { courses, type Course } from "@/data/site";
import { Button } from "@/components/ui/button";

const courseIcons = {
  "full-stack": Braces,
  "ai-automation": Workflow,
  "data-science-ai": Network,
} as const;

function CourseVisual({ courseId }: { courseId: Course["id"] }) {
  if (courseId === "full-stack") {
    return (
      <div className="course-motif course-motif-code" aria-hidden="true">
        <span>01</span><i /><i /><span>tsx</span><i /><i />
      </div>
    );
  }

  if (courseId === "ai-automation") {
    return (
      <div className="course-motif course-motif-flow" aria-hidden="true">
        <span /><i /><span /><i /><span />
      </div>
    );
  }

  return (
    <div className="course-motif course-motif-data" aria-hidden="true">
      <span /><span /><span /><span /><i /><i />
    </div>
  );
}

function CoursePanel({ course, index }: { course: Course; index: number }) {
  const Icon = courseIcons[course.id];

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const panel = event.currentTarget;
    const bounds = panel.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    panel.style.setProperty("--pointer-x", `${x * 100}%`);
    panel.style.setProperty("--pointer-y", `${y * 100}%`);
    panel.style.setProperty("--tilt-x", `${(0.5 - y) * 2.2}deg`);
    panel.style.setProperty("--tilt-y", `${(x - 0.5) * 2.2}deg`);
  };

  const resetPointer = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.removeProperty("--pointer-x");
    event.currentTarget.style.removeProperty("--pointer-y");
    event.currentTarget.style.removeProperty("--tilt-x");
    event.currentTarget.style.removeProperty("--tilt-y");
  };

  return (
    <article
      className={`course-panel course-panel-${index + 1}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="course-panel-glow" aria-hidden="true" />
      <header className="course-panel-header">
        <div className="course-number">0{index + 1}</div>
        <div className="course-icon"><Icon aria-hidden="true" /></div>
      </header>

      <CourseVisual courseId={course.id} />

      <div className="course-content">
        <p className="course-level">{course.level} · Six-month program</p>
        <h3>{course.title}</h3>
        <p className="course-description">{course.description}</p>

        <ul className="course-skills" aria-label={`${course.title} skills`}>
          {course.skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>

        <div className="course-meta">
          <span><Clock3 aria-hidden="true" />{course.duration}</span>
          <span><Boxes aria-hidden="true" />Project-based</span>
        </div>

        <div className="course-project" id={`${course.id}-projects`}>
          <span>PROJECT FOCUS</span>
          <p>{course.projectFocus}</p>
        </div>

        <Button asChild variant="outlineDark" size="xl" className="course-cta">
          <a href={`#${course.id}-projects`} aria-label={`${course.ctaLabel}: ${course.title}`}>
            {course.ctaLabel}<ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}

export function CoursesSection() {
  return (
    <section className="courses-section" id="courses" aria-labelledby="courses-title">
      <div className="section-shell">
        <div className="courses-heading">
          <div>
            <p className="section-index">02 / PROGRAMS</p>
            <h2 id="courses-title">Choose what you’ll build next.</h2>
          </div>
          <p>Three focused paths. Six months each. Built around the tools and workflows modern technology teams use today.</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => <CoursePanel key={course.id} course={course} index={index} />)}
        </div>
      </div>
    </section>
  );
}