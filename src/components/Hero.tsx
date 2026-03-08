import { heroData, assets } from "../data/portfolioData";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </span>
          <h1 className="hero-title">Vinayaka <span>D</span></h1>
          <h2 className="hero-subtitle">{heroData.tagline}</h2>
          <p className="hero-desc">{heroData.subtitle}</p>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">12+</div>
              <div className="hero-stat-label">Months Exp.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">4+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            {/* <div className="hero-stat">
              <div className="hero-stat-num">8.51</div>
              <div className="hero-stat-label">CGPA</div>
            </div> */}
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">🚀 View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
            <a href={assets.resume} target="_blank" rel="noopener noreferrer"
              download="VINAYAKA_D_Resume.pdf" className="btn-ghost">
              📄 Resume
            </a>
          </div>

          {/* <div className="hero-socials">
            <a href="https://linkedin.com/in/vinayaka-d" target="_blank"
              rel="noopener noreferrer" className="hero-social-link">
              💼 LinkedIn
            </a>
            <a href="https://vinayakad.in" target="_blank"
              rel="noopener noreferrer" className="hero-social-link">
              🌐 vinayakad.in
            </a>
          </div> */}
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <div className="hero-photo-dots" />
            <img src={assets.photo} alt="Vinayaka D" className="hero-photo"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  `https://ui-avatars.com/api/?name=Vinayaka+D&size=400&background=A8CCE0&color=2E4A5E&bold=true`;
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}
