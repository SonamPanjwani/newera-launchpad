import { lazy, Suspense, useEffect, useState } from "react";

const Scene3D = lazy(() => import("./Scene3D"));

function StaticCore() {
  return (
    <div className="hero-static" aria-hidden="true">
      <div className="hero-static-ring hero-static-ring-one" />
      <div className="hero-static-ring hero-static-ring-two" />
      <div className="hero-static-core" />
    </div>
  );
}

export function HeroVisual() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const canvas = document.createElement("canvas");
    const webgl = Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
    setCanRender(webgl && !reducedMotion && !mobile);
  }, []);

  return (
    <div className="hero-visual" aria-label="Interactive visualization of a connected AI system">
      <StaticCore />
      {canRender ? (
        <Suspense fallback={null}>
          <div className="hero-canvas"><Scene3D /></div>
        </Suspense>
      ) : null}
      <div className="hero-visual-label hero-label-top"><span>01</span> LEARN</div>
      <div className="hero-visual-label hero-label-right"><span>02</span> BUILD</div>
      <div className="hero-visual-label hero-label-bottom"><span>03</span> AUTOMATE</div>
    </div>
  );
}