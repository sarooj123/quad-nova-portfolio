import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

const navClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner" ref={panelRef}>
        {/* Brand */}
        <Link to="/" className="brand">
          <img
  src="/logo.jpeg"
  alt="Quad Nova Tech logo"
  className="brand-logo"  width="32px"
/>
          <span className="brand-text">
            QUAD <span className="brand-nova">NOVA</span> TECH
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links">
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/services" className={navClass}>Services</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        {/* Right */}
        <div className="nav-right">
          <Link to="/contact" className="btn btn-primary nav-cta">
            
            <span className="nav-cta-icon">Hire Us</span>
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile ${open ? "open" : ""}`}>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/services" className={navClass}>Services</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>

          <Link to="/contact" className="btn btn-primary w-100">
            Get a Quote
          </Link>
        </div>
      </div>

      <div
        className={`backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}