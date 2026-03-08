import { projects } from "../data/portfolioData";

const projectIcons = ["🎪", "📊", "📚", "🚗", "🧮", "🕐", "⛩️", "🤖"];

const categoryColor: Record<string, string> = {
  "NDA Protected": "#e8f3f9",
  "Personal Project": "#f0fdf4",
  "Academic Project": "#fdf4ff",
};

export default function Projects() {
  const ndaProjects = projects.filter(p => p.note?.includes("NDA"));
  const personalProjects = projects.filter(p => p.note?.includes("Personal"));
  const academicProjects = projects.filter(p => p.note?.includes("Academic"));

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-eyebrow">What I've Built</span>
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="section-divider" />
      </div>

      {/* ── Professional / NDA ───────────────────── */}
      <div className="proj-category-label">
        <span className="proj-cat-badge nda">🔒 Professional Projects</span>
        <span className="proj-cat-sub">Built during employment · Details under NDA</span>
      </div>

      <div className="proj-featured-grid">
        {ndaProjects.map((p, i) => (
          <div key={p.id} className="proj-featured-card">
            <div className="proj-featured-top">
              <div className="proj-icon-lg">{projectIcons[i]}</div>
              <div className="proj-meta">
                <span className="proj-badge nda-badge">🔒 NDA</span>
              </div>
            </div>
            <h3 className="proj-featured-title">{p.title}</h3>
            <p className="proj-featured-desc">{p.description}</p>
            <div className="proj-tags-row">
              {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            {p.note && (
              <div className="proj-note-row">
                <span className="proj-note-text">{p.note.replace("NDA Protected · ", "")}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Personal Projects ────────────────────── */}
      <div className="proj-category-label" style={{ marginTop: "56px" }}>
        <span className="proj-cat-badge personal">💡 Personal Projects</span>
        <span className="proj-cat-sub">Side projects built out of curiosity & passion</span>
      </div>

      <div className="proj-small-grid">
        {personalProjects.map((p, i) => (
          <div key={p.id} className="proj-small-card">
            <div className="proj-small-top">
              <div className="proj-icon-sm">{projectIcons[ndaProjects.length + i]}</div>
              <span className="proj-badge personal-badge">Personal</span>
            </div>
            <h3 className="proj-small-title">{p.title}</h3>
            <p className="proj-small-desc">{p.description}</p>
            <div className="proj-tags-row" style={{ marginTop: "auto", paddingTop: "14px" }}>
              {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            {p.note?.includes("Development") && (
              <span className="proj-wip-badge">🚧 In Development</span>
            )}
          </div>
        ))}
      </div>

      {/* ── Academic ─────────────────────────────── */}
      <div className="proj-category-label" style={{ marginTop: "56px" }}>
        <span className="proj-cat-badge academic">🎓 Academic Project</span>
        <span className="proj-cat-sub">Research & coursework</span>
      </div>

      <div className="proj-academic-row">
        {academicProjects.map((p, i) => (
          <div key={p.id} className="proj-academic-card">
            <div className="proj-academic-left">
              <div className="proj-icon-lg">🤖</div>
            </div>
            <div className="proj-academic-right">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <h3 className="proj-academic-title">{p.title}</h3>
                {/* <span className="proj-badge academic-badge">Published</span> */}
              </div>
              <p className="proj-academic-desc">{p.description}</p>
              <div className="proj-tags-row" style={{ marginTop: "12px" }}>
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
