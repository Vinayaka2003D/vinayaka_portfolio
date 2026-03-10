import { useState } from "react";
const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <span className="navbar-logo">
        Vinayaka<span className="navbar-logo-dot">.</span>
      </span>
      <ul className="navbar-links">
        {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
      </ul>
      <a href="https://linkedin.com/in/vinayaka-d" className="btn-primary desktop-only" style={{ padding: "9px 22px", fontSize: "0.88rem" }}>
             LinkedIn
      </a>
      <button className="menu-btn" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      {open && (
        <div className="navbar-mobile-menu">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="https://linkedin.com/in/vinayaka-d" onClick={() => setOpen(false)} style={{ fontWeight: 700 }}>LinkedIn</a>
        </div>
      )}
    </nav>
  );
}
