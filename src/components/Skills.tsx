import { skills } from "../data/portfolioData";

const categoryLabels: Record<string, string> = {
  mobile: "📱 Mobile", backend: "⚙️ Backend",
  frontend: "🎨 Frontend", database: "🗄️ Database", tools: "🛠️ Tools",
};

export default function Skills() {
  const groups = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="section-header">
          <span className="section-eyebrow">What I Know</span>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="section-divider" />
        </div>
        <div className="skills-grid">
          {Object.entries(groups).map(([category, items]) => (
            <div key={category} className="skill-group">
              <div className="skill-group-label">{categoryLabels[category] ?? category}</div>
              <div className="skill-pills">
                {items.map(skill => (
                  <span key={skill.name} className="skill-pill">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
