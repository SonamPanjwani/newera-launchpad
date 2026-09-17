import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="stats-section" id="trust" aria-labelledby="stats-title">
      <div className="section-shell stats-layout">
        <div className="stats-heading">
          <p className="section-index">01 / FOUNDATION</p>
          <h2 id="stats-title">Built for the new era of technology.</h2>
          <p>A focused learning environment where concepts become working systems, practical capability, and evidence of what you can build.</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.note}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}