import "../styles/about.css";
import useTilt from "../hooks/useTilt";

export default function About() {
  useTilt();

  const stats = [
    { k: "20+", v: "Projects Delivered" },
    { k: "10+", v: "Happy Clients" },
    { k: "24/7", v: "Support & Maintenance" },
    { k: "Fast", v: "Delivery Cycle" },
  ];

  const values = [
    { title: "Premium UI", text: "Modern, clean and conversion-focused interfaces." },
    { title: "Clean Code", text: "Scalable structure, maintainable components." },
    { title: "Clear Communication", text: "Timelines, updates, and next steps always clear." },
    { title: "Long-term Support", text: "Fixes, updates and improvements after launch." },
  ];

  const process = [
    { title: "Discovery", text: "We understand goals and scope to avoid confusion later." },
    { title: "UI & Planning", text: "Premium UI direction + right tech decisions." },
    { title: "Development", text: "Clean code, animations, and production-ready build." },
    { title: "Launch & Support", text: "Deploy + maintain, improve and scale." },
  ];

  const team = [
    { name: "Product & UI", role: "UX flows, premium UI, brand consistency" },
    { name: "Frontend", role: "React, animations, performance & responsiveness" },
    { name: "Backend", role: "APIs, dashboards, auth, databases & security" },
    { name: "QA & Support", role: "Testing, bug fixing, monitoring & updates" },
  ];

  const tools = [
    { name: "React", icon: <ReactIcon /> },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "Express", icon: <ExpressIcon /> },
    { name: "MongoDB", icon: <MongoIcon /> },
    { name: "MySQL", icon: <MySqlIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
  ];

  return (
    <section className="about-page container">
      {/* HERO */}
      <div className="about-hero glass reveal">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-particles" aria-hidden="true" />

        <span className="tag">About Quad Nova Tech</span>

        <h1 className="hero-title">
          Building <span className="gradient-text">premium digital products</span>
          <br /> that scale with your business
        </h1>

        <p className="hero-sub">
          Quad Nova Tech is a software development team focused on websites, web apps,
          dashboards and IT solutions — built with clean UI, performance and long-term support.
        </p>

        <div className="about-hero-actions">
          <a className="btn btn-primary" href="/contact">
            Work with us
          </a>
          <a className="btn btn-outline" href="/projects">
            View projects
          </a>
        </div>

        <div className="hero-trust">
          <span className="trust-pill"><span className="dot" /> Fast delivery</span>
          <span className="trust-pill"><span className="dot dot2" /> Premium UI</span>
          <span className="trust-pill"><span className="dot dot3" /> Secure code</span>
          <span className="trust-pill"><span className="dot dot4" /> Support</span>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats glass reveal" data-tilt>
        {stats.map((s) => (
          <div className="stat" key={s.v}>
            <div className="stat-k">{s.k}</div>
            <div className="stat-v">{s.v}</div>
          </div>
        ))}
      </div>

      {/* MISSION + VISION */}
      <div className="about-grid grid grid-2">
        <div className="about-card glass reveal" data-tilt>
          <h3>Our Mission</h3>
          <p>
            To help businesses grow by delivering high-quality software, premium user experiences,
            and reliable long-term maintenance. Fast, secure, and scalable delivery.
          </p>
        </div>

        <div className="about-card glass reveal" data-tilt>
          <h3>Our Vision</h3>
          <p>
            To become a trusted technology partner for startups and businesses worldwide by
            consistently delivering future-ready digital products.
          </p>
        </div>
      </div>

      {/* TOOLS */}
      <div className="about-tools glass reveal" data-tilt>
        <div className="tools-head">
          <span className="tag">Our tools</span>
          <h2>Modern stack for modern products</h2>
          <p>We build with reliable technologies that scale well and deploy fast.</p>
        </div>

        <div className="tools-grid">
          {tools.map((t) => (
            <div className="tool" key={t.name}>
              <div className="tool-ico">{t.icon}</div>
              <div className="tool-name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <div className="about-values glass reveal">
        <div className="values-head">
          <span className="tag">What we focus on</span>
          <h2>Quality, speed & results</h2>
          <p>Simple execution. Clean UI. Strong code. Real outcomes.</p>
        </div>

        <div className="grid grid-3 values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title} data-tilt>
              <div className="value-icon" aria-hidden="true" />
              <div className="value-title">{v.title}</div>
              <div className="value-text">{v.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="about-process reveal">
        <div className="process-head">
          <span className="tag">Our process</span>
          <h2>From idea to launch — smooth workflow</h2>
          <p>Transparent, fast, and focused delivery.</p>
        </div>

        <div className="process-steps glass" data-tilt>
          {process.map((p, i) => (
            <div className="step" key={p.title}>
              <div className="step-n">{String(i + 1).padStart(2, "0")}</div>
              <div className="step-b">
                <div className="step-title">{p.title}</div>
                <div className="step-text">{p.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="about-team glass reveal" data-tilt>
        <div className="team-head">
          <span className="tag">Our team</span>
          <h2>Small team. High standards.</h2>
          <p>We care about quality, speed and business results.</p>
        </div>

        <div className="grid grid-3 team-grid">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-dot" aria-hidden="true" />
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta glass reveal" data-tilt>
        <div>
          <h3>Ready to build something premium?</h3>
          <p>Send your idea — we’ll reply with a clear plan, timeline and estimate.</p>
        </div>
        <a className="btn btn-primary" href="/contact">
          Get a free consultation
        </a>
      </div>
    </section>
  );
}

/* ====== Tool icons (inline SVG) ====== */
function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 9h4c1.2 0 2 .8 2 2v2c0 1.2-.8 2-2 2h-4V9Z" fill="currentColor" opacity=".85"/>
    </svg>
  );
}
function ExpressIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
      <path d="M8 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
    </svg>
  );
}
function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c3 3 5 6.2 5 10 0 5-2.5 8.5-5 10-2.5-1.5-5-5-5-10 0-3.8 2-7 5-10Z"
        fill="currentColor" opacity=".85" />
      <path d="M12 4v18" stroke="rgba(255,255,255,.8)" strokeWidth="1.4" opacity=".5"/>
    </svg>
  );
}
function MySqlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8c0-2 3-3 6-3s6 1 6 3-3 3-6 3-6-1-6-3Z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 8v8c0 2 3 3 6 3s6-1 6-3V8" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 12c0 2 3 3 6 3s6-1 6-3" fill="none" stroke="currentColor" strokeWidth="1.6" opacity=".8"/>
    </svg>
  );
}
function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5 21 19H3L12 5Z" fill="currentColor" />
    </svg>
  );
}