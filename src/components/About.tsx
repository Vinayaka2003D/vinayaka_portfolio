import { aboutData, assets } from "../data/portfolioData";

export default function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-inner">
        <div className="section-header">
          <span className="section-eyebrow">Who I Am</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">

          {/* Bio + Education */}
          <div>
            <p className="about-bio">{aboutData.bio}</p>
            <div className="about-edu-list">
              {aboutData.education.map((edu, i) => (
                <div key={i} className="about-edu-item">
                  <div className="about-edu-icon">🎓</div>
                  <div>
                    <div className="about-edu-degree">{edu.degree}</div>
                    <div className="about-edu-inst">{edu.institute}</div>
                    <div className="about-edu-score">{edu.score} · {edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={assets.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="VINAYAKA_D_Resume.pdf"
              className="btn-primary"
              style={{ marginTop: "8px" }}
            >
              📄 Download CV
            </a>
          </div>

          {/* Stats / Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: "📱", title: "Flutter Developer", desc: "Cross-platform mobile apps with clean UI architecture and REST API integration." },
              { icon: "🏢", title: "Accolade Tech Solutions", desc: "12 months of professional experience building production-ready mobile applications." },
              { icon: "🎓", title: "MSc Software Technology", desc: "CGPA 8.51 from St. Aloysius Institute of Management and IT (AIMIT), Mangalore." },
              { icon: "🌍", title: "Based in Mangaluru", desc: "Open to remote opportunities and on-site roles across India." },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: "16px", alignItems: "flex-start",
                padding: "18px 20px",
                background: "#fff", border: "1px solid var(--border)",
                borderRadius: "14px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(46,74,94,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "12px",
                  background: "var(--accent-pale)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem", flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>
                    {item.title}
                  </div>
                  <div style={{ color: "#5a7a8e", fontSize: "0.87rem", marginTop: "3px", lineHeight: 1.7 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
