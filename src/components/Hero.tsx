import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { trustIndicators } from "@/data/site";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy animate-enter">
          <p className="eyebrow"><span /> The next era of tech education</p>
          <h1>Build the skills that <em>build the future.</em></h1>
          <p className="hero-support">Master Full Stack Development, AI Automation, and Data Science through practical, project-led learning designed for how technology is built now.</p>
          <div className="hero-actions">
            <Button asChild variant="premium" size="xl"><a href="#courses">Explore Courses <ArrowUpRight /></a></Button>
            <Button asChild variant="outlineDark" size="xl"><a href="#contact">Start Your Journey</a></Button>
          </div>
          <div className="trust-list" aria-label="Program qualities">
            {trustIndicators.map((item) => <span key={item}><Check /> {item}</span>)}
          </div>
        </div>
        <HeroVisual />
      </div>
      <a className="scroll-cue" href="#trust" aria-label="Scroll to program overview"><ArrowDown /></a>
    </section>
  );
}