import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-eyebrow">Work History</span>
        <h2 className="section-title">My <span>Experience</span></h2>
        <div className="section-divider" />
      </div>
      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item">
            <div className="exp-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">🏢 {exp.company}</div>
                </div>
                <span className="exp-badge">🕐 {exp.period}</span>
              </div>
              <ul className="exp-points">
                {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
