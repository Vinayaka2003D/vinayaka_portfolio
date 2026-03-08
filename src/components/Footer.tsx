export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-logo">
          Vinayaka<span style={{ color: "#A8CCE0" }}>.</span>
        </span>
        <div className="footer-links">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Vinayaka D · Built with Vite + React + TypeScript
        </p>
      </div>
    </footer>
  );
}
