import { achievements } from "../data/portfolioData";

const achIcons = ["🏫", "📄", "🏆", "💻", "🎓"];
const achColors = [
  { bg: "#e8f3f9", border: "#d4e8f2", num: "linear-gradient(135deg, #2E4A5E, #6A9AB8)" },
  { bg: "#f0fdf4", border: "#bbf7d0", num: "linear-gradient(135deg, #166534, #22c55e)" },
  { bg: "#fdf4ff", border: "#e9d5ff", num: "linear-gradient(135deg, #6b21a8, #a855f7)" },
  { bg: "#fff7ed", border: "#fed7aa", num: "linear-gradient(135deg, #c2410c, #f97316)" },
  { bg: "#f0f9ff", border: "#bae6fd", num: "linear-gradient(135deg, #0369a1, #38bdf8)" },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-header">
        <span className="section-eyebrow">Highlights</span>
        <h2 className="section-title">Achievements & <span>Recognition</span></h2>
        <div className="section-divider" />
      </div>

      {/* ── Top stat strip ── */}
      <div className="ach-stats-row">
        {[
          { num: "1", label: "Research Paper", sub: "Published · SACAIM 2024" },
          { num: "2", label: "Workshops Conducted", sub: "Flutter & Web Dev" },
          { num: "1", label: "National Event", sub: "Event Head · Coding" },
        //   { num: "∞", label: "Teaching Sessions", sub: "Micro Teaching" },
        ].map((s, i) => (
          <div key={i} className="ach-stat-card">
            <div className="ach-stat-num">{s.num}</div>
            <div className="ach-stat-label">{s.label}</div>
            <div className="ach-stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Achievement cards ── */}
      <div className="ach-list">
        {achievements.map((item, i) => (
          <div key={i} className="ach-item" style={{ "--ach-bg": achColors[i].bg, "--ach-border": achColors[i].border } as React.CSSProperties}>
            <div className="ach-item-left">
              <div className="ach-item-icon" style={{ background: achColors[i].bg, border: `1px solid ${achColors[i].border}` }}>
                {achIcons[i]}
              </div>
              <div className="ach-item-line" />
            </div>
            <div className="ach-item-right">
              <div className="ach-item-num" style={{ background: achColors[i].num }}>
                0{i + 1}
              </div>
              <p className="ach-item-text">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
