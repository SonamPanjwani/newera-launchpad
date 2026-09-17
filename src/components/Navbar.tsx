import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { navigation } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header site-header-scrolled" : "site-header"}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="NewEra Solutions home">
          <span className="wordmark-mark">N</span>
          <span>NewEra<span className="wordmark-muted"> Solutions</span></span>
        </a>
        <div className="nav-links">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="nav-actions">
          <Button asChild variant="ghost" className="nav-secondary"><a href="#contact">Talk to Us</a></Button>
          <Button asChild variant="premium"><a href="#courses">Explore Courses <ArrowUpRight /></a></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mobile-menu-trigger" aria-label="Open navigation"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="mobile-menu-panel">
            <SheetHeader><SheetTitle className="text-left">NewEra Solutions</SheetTitle></SheetHeader>
            <div className="mobile-nav-links">
              {navigation.map((item) => <SheetClose asChild key={item.href}><a href={item.href}>{item.label}</a></SheetClose>)}
            </div>
            <SheetClose asChild><Button asChild variant="premium" size="lg"><a href="#courses">Explore Courses <ArrowUpRight /></a></Button></SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}