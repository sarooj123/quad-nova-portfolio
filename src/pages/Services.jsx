import "../styles/services.css";
import useReveal from "../hooks/useReveal";
import {
  CodeIcon,
  RocketIcon,
  ShieldIcon,
} from "../components/ServiceIcons";

// ✅ More service cards (6)
const services = [
  {
    icon: <CodeIcon />,
    title: "Website Development",
    desc: "Premium business websites, landing pages, portfolios — fast, responsive, conversion-focused.",
    bullets: ["SEO-ready structure", "Premium UI + animations", "Speed optimization"],
    tag: "Popular",
  },
  {
    icon: <RocketIcon />,
    title: "Web App Development",
    desc: "Dashboards, admin panels, portals, role-based systems and API integrations.",
    bullets: ["Auth + roles", "Admin dashboards", "API integrations"],
    tag: "Best Value",
  },
  {
    icon: <ShieldIcon />,
    title: "Maintenance & Support",
    desc: "Monthly support plans to keep your product stable, secure, and updated.",
    bullets: ["Bug fixes + updates", "Security hardening", "Performance tuning"],
    tag: "Reliable",
  },
  {
    icon: <CodeIcon />,
    title: "UI/UX & Landing Pages",
    desc: "High-converting UI layouts with clean typography, spacing, and premium visual polish.",
    bullets: ["Figma to code", "Conversion-focused sections", "Micro-interactions"],
    tag: "Design",
  },
  {
    icon: <RocketIcon />,
    title: "API Integration",
    desc: "Connect payments, CRMs, WhatsApp, maps, email, and third-party services smoothly.",
    bullets: ["Payment gateways", "Email/WhatsApp automation", "Secure API calls"],
    tag: "Integrations",
  },
  {
    icon: <ShieldIcon />,
    title: "Performance + SEO",
    desc: "Improve speed, Core Web Vitals, and ranking signals — built for real traffic.",
    bullets: ["Image optimization", "Core Web Vitals", "SEO structure + schema"],
    tag: "Growth",
  },
];

const steps = [
  { n: "01", t: "Discovery", d: "We understand goals, audience, and requirements." },
  { n: "02", t: "Design", d: "Premium UI layout + UX flow (mobile-first)." },
  { n: "03", t: "Build", d: "Clean code + scalable structure + animations." },
  { n: "04", t: "Launch", d: "Deploy, optimize, and ensure everything runs smoothly." },
];

// ✅ Courses section (replace Packages)
const courses = [
  {
    level: "Beginner",
    title: "Front-End Web Development",
    desc: "Learn how to build modern responsive websites with clean HTML/CSS/JS and professional UI patterns.",
    topics: ["Responsive layouts", "UI components", "Forms + validations"],
    badge: "Most requested",
  },
  {
    level: "Intermediate",
    title: "React + Portfolio Masterclass",
    desc: "Build a premium portfolio site with routing, animations, reusable components, and deployment.",
    topics: ["React Router", "Animations", "Component architecture"],
    badge: "Career focused",
    highlight: true,
  },
  {
    level: "Advanced",
    title: "Full-Stack Web Apps (MERN)",
    desc: "Learn backend fundamentals: APIs, auth, roles, database design, and real-world deployment workflow.",
    topics: ["REST APIs", "Auth + roles", "MongoDB + deployment"],
    badge: "Project based",
  },
];

export default function Services() {
  useReveal();

  return (
    <main className="services-page">
      {/* Premium FX background */}
      <div className="fx-bg" aria-hidden="true">
        <span className="fx-grid" />
        <span className="fx-particles" />
        <span className="fx-vignette" />
      </div>

      {/* HERO */}
      <section className="srv-hero container" data-reveal>
        <div className="srv-hero-left">
          <span className="srv-pill">Services</span>

          <h1 className="srv-title">
            Premium web & software solutions
            <span className="srv-title-glow">&nbsp; built for growth</span>
          </h1>

          <p className="srv-sub">
            Quad Nova Tech builds modern websites and web apps with premium UI, speed,
            and long-term support — designed to convert visitors into customers.
          </p>

          <div className="srv-hero-actions">
            <a href="/contact" className="btn btn-primary">
              Get a Quote <span className="arrow">→</span>
            </a>
            <a href="/projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          <div className="srv-kpis">
            <div className="srv-kpi glass">
              <div className="kpi-num">Fast</div>
              <div className="kpi-txt">delivery & communication</div>
            </div>
            <div className="srv-kpi glass">
              <div className="kpi-num">Clean</div>
              <div className="kpi-txt">UI + scalable code</div>
            </div>
            <div className="srv-kpi glass">
              <div className="kpi-num">Support</div>
              <div className="kpi-txt">long-term improvements</div>
            </div>
          </div>
        </div>

        <div className="srv-hero-right">
          <div className="srv-orb">
            <div className="srv-orb-inner" />
          </div>

          {/* 3D logo mock card */}
          <div className="srv-preview glass">
            <div className="srv-preview-top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="srv-preview-badge">Premium UI</span>
            </div>

            <div className="logo-mock">
              <img src="/logo.jpeg" alt="Quad Nova Tech" />
              <div className="logo-glow" />
            </div>

            <div className="srv-preview-body">
              <h3>Built for conversion</h3>
              <ul>
                <li>Pixel-perfect UI + animation</li>
                <li>Mobile-first responsive layout</li>
                <li>SEO + performance ready</li>
                <li>Deployment ready (Vercel)</li>
              </ul>
            </div>

            <div className="srv-preview-cta">
              <a href="/contact" className="btn btn-primary">
                Work with us <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container srv-section" data-reveal>
        <h2 className="srv-h2">Core services</h2>
        <p className="srv-p">
          Everything you need to launch, scale, and maintain your digital presence.
        </p>

        <div className="srv-grid srv-grid-6">
          {services.map((s, i) => (
            <article className="srv-card" key={i}>
              <div className="srv-card-top">
                <div className="srv-icon">{s.icon}</div>
                <span className="srv-tag">{s.tag}</span>
              </div>

              <h3 className="srv-card-title">{s.title}</h3>
              <p className="srv-card-desc">{s.desc}</p>

              <ul className="srv-bullets">
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="srv-card-bottom">
                <a className="srv-link" href="/contact">
                  Get details →
                </a>
              </div>

              <span className="srv-shine" />
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container srv-section" data-reveal>
        <h2 className="srv-h2">Our process</h2>
        <p className="srv-p">
          Simple, fast, and transparent — so you always know what’s next.
        </p>

        <div className="srv-steps">
          {steps.map((s) => (
            <div className="srv-step glass" key={s.n}>
              <div className="step-n">{s.n}</div>
              <div className="step-t">{s.t}</div>
              <div className="step-d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="container srv-section" data-reveal>
        <h2 className="srv-h2">Courses & Training</h2>
        <p className="srv-p">
          Learn practical skills with project-based guidance — clean UI, real workflow, and deploy-ready results.
        </p>

        <div className="courses">
          {courses.map((c, idx) => (
            <article className={`course ${c.highlight ? "highlight" : ""}`} key={idx}>
              <div className="course-top">
                <div className="course-level">{c.level}</div>
                <div className="course-badge">{c.badge}</div>
              </div>

              <h3 className="course-title">{c.title}</h3>
              <p className="course-desc">{c.desc}</p>

              <ul className="course-topics">
                {c.topics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="course-actions">
                <a href="/contact" className={`btn ${c.highlight ? "btn-primary" : "btn-outline"} w-100`}>
                  Enroll / Ask Details <span className="arrow">→</span>
                </a>
              </div>

              <span className="course-shine" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container srv-cta glass" data-reveal>
        <div>
          <h2>Ready to build something premium?</h2>
          <p className="muted">
            Tell us what you need — we’ll reply with the best plan and a quick estimate.
          </p>
        </div>
        <a href="/contact" className="btn btn-primary">
          Contact Quad Nova Tech <span className="arrow">→</span>
        </a>
      </section>
    </main>
  );
}