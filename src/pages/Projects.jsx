import { useMemo, useState } from "react";
import "../styles/projects.css";
import useReveal from "../hooks/useReveal";

const PROJECTS = [
  {
    id: "restaurant-reservation",
    title: "Restaurant Reservation System",
    type: "Web App",
    category: "web-apps",
    year: "2025",
    tagline: "Table booking, time slots, customer management, and admin control in one system.",
    highlights: ["Reservation slots", "Admin dashboard", "Customer records"],
    stack: ["React", "Node", "MongoDB"],
    cover: "/projects/restaurant.png",
    preview: "",
    details: [
      "Built a full reservation flow with available slots and booking rules.",
      "Admin panel to manage tables, hours, and reservations.",
      "Customer data and booking history for smooth operations."
    ],
  },
  {
    id: "university-management",
    title: "University Management System",
    type: "Web App",
    category: "web-apps",
    year: "2025",
    tagline: "Student, faculty, courses, attendance and results — managed with role-based access.",
    highlights: ["Students + faculty", "Attendance + results", "Role-based access"],
    stack: ["React", "Node", "MongoDB"],
    cover: "/projects/university.png",
    preview: "",
    details: [
      "Centralized system to manage students, teachers and departments.",
      "Attendance and results modules with secure access.",
      "Optimized admin workflow for daily operations."
    ],
  },
  {
    id: "aramco-admin",
    title: "Aramco Admin & Salary Management",
    type: "Web App",
    category: "web-apps",
    year: "2025",
    tagline: "Secure internal admin panel for employee records, salaries, and payroll tracking.",
    highlights: ["Payroll + salaries", "Employee records", "Reports & logs"],
    stack: ["React", "Node", "Database"],
    cover: "/projects/aramco.png",
    preview: "",
    details: [
      "Created salary management workflow with monthly calculation and records.",
      "Employee profile management, departments and status tracking.",
      "Reports and audit-style logging for admin actions."
    ],
  },
  {
    id: "dynamic-weather",
    title: "Dynamic Weather Web App",
    type: "Web App",
    category: "web-apps",
    year: "2024",
    tagline: "Location-based weather with clean UI, forecasts, and responsive performance.",
    highlights: ["Live weather", "Forecast view", "Fast UI"],
    stack: ["React", "API"],
    cover: "/projects/weather.png",
    preview: "",
    details: [
      "Integrated weather API with search and live data.",
      "Designed clean cards and readable forecast layout.",
      "Built fully responsive UI with smooth transitions."
    ],
  },
  {
    id: "ai-chess",
    title: "AI Chess Board",
    type: "Web App",
    category: "web-apps",
    year: "2024",
    tagline: "Interactive chess board with AI-based moves and game logic.",
    highlights: ["AI opponent", "Move validation", "Game state"],
    stack: ["React", "AI Logic"],
    cover: "/projects/chess.png",
    preview: "",
    details: [
      "Implemented board interactions and legal move validation.",
      "Connected AI decision logic to generate playable responses.",
      "Tracked game state, turns, captures and history."
    ],
  },
  {
    id: "firstlabs-ecommerce",
    title: "FirstLabs Ecommerce Store",
    type: "Website",
    category: "websites",
    year: "2025",
    tagline: "Product storefront with modern UI, listings, and customer checkout flow.",
    highlights: ["Product pages", "Cart flow", "Responsive UI"],
    stack: ["React", "CSS"],
    cover: "/projects/firstlabs.png",
    preview: "",
    details: [
      "Built clean product listing and details pages.",
      "Designed cart flow and conversion sections.",
      "Optimized mobile layout for better user experience."
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    type: "Web App",
    category: "web-apps",
    year: "2025",
    tagline: "Manage employees, roles, departments, and performance with admin control.",
    highlights: ["Employee CRUD", "Roles + permissions", "Departments"],
    stack: ["React", "Node", "Database"],
    cover: "/projects/employee.png",
    preview: "",
    details: [
      "Created employee management module with roles and departments.",
      "Designed admin interface for adding, editing, and tracking staff.",
      "Prepared scalable structure for future HR features."
    ],
  },
  {
    id: "ecommerce-store",
    title: "Ecommerce Web Store",
    type: "Website",
    category: "websites",
    year: "2025",
    tagline: "Modern ecommerce UI for brands — clean product pages built for conversion.",
    highlights: ["Modern UI", "Product structure", "Mobile-first"],
    stack: ["React", "CSS"],
    cover: "/projects/ecommerce.png",
    preview: "",
    details: [
      "Developed modern ecommerce layout and reusable components.",
      "Focused on product visuals and clear CTA sections.",
      "Optimized responsiveness for all devices."
    ],
  },
  {
    id: "startup-portfolio",
    title: "Portfolio Website for Startups",
    type: "Website",
    category: "websites",
    year: "2025",
    tagline: "Premium startup portfolio with services, case studies, and strong CTA flow.",
    highlights: ["Hero + CTA", "Services sections", "Fast & SEO-ready"],
    stack: ["React", "Vite", "CSS"],
    cover: "/projects/startup.png",
    preview: "",
    details: [
      "Designed premium landing layout with strong conversion flow.",
      "Added structured sections for services, testimonials, and contact.",
      "Ensured fast load and clean UI spacing."
    ],
  },
  {
    id: "flight-reservation",
    title: "Flight Reservation System",
    type: "Web App",
    category: "web-apps",
    year: "2025",
    tagline: "Search flights, select seats, manage bookings, and handle reservation workflow.",
    highlights: ["Flight search", "Bookings", "Admin controls"],
    stack: ["React", "Node", "Database"],
    cover: "/projects/flight.png",
    preview: "",
    details: [
      "Created flight listing and booking workflow.",
      "Built booking management and reservation records.",
      "Designed admin controls to manage data and operations."
    ],
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "websites", label: "Websites" },
  { key: "web-apps", label: "Web Apps / Systems" },
  { key: "uiux", label: "UI/UX" },
];

export default function Projects() {
  useReveal();
  const [tab, setTab] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    if (tab === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === tab);
  }, [tab]);

  return (
    <main className="projects-page">
      {/* background fx */}
      <div className="fx-bg" aria-hidden="true">
        <span className="fx-grid" />
        <span className="fx-particles" />
        <span className="fx-vignette" />
      </div>

      {/* HERO */}
      <section className="container pr-hero" data-reveal>
        <div className="pr-hero-left">
          <span className="pr-pill">Projects</span>

          <h1 className="pr-title">
            Real systems &
            <span className="pr-title-glow"> &nbsp; premium websites</span>
          </h1>

          <p className="pr-sub">
            A selection of websites and web apps built by Quad Nova Tech — focused on clean UI,
            performance, and real business workflows.
          </p>

          <div className="pr-actions">
            <a href="/contact" className="btn btn-primary">
              Start a project <span className="arrow">→</span>
            </a>
            <a href="/services" className="btn btn-outline">
              View Services
            </a>
          </div>

          <div className="pr-stats">
            <div className="pr-stat glass">
              <div className="pr-num">Systems</div>
              <div className="pr-txt">dashboards & portals</div>
            </div>
            <div className="pr-stat glass">
              <div className="pr-num">Stores</div>
              <div className="pr-txt">ecommerce & conversion</div>
            </div>
            <div className="pr-stat glass">
              <div className="pr-num">UI</div>
              <div className="pr-txt">premium feel & speed</div>
            </div>
          </div>
        </div>

        <div className="pr-hero-right">
          <div className="pr-feature glass">
            <div className="pr-feature-top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="pr-badge">Featured</span>
            </div>

            <div className="pr-feature-body">
              <h3>{PROJECTS[0].title}</h3>
              <p className="muted">{PROJECTS[0].tagline}</p>

              <div className="pr-feature-tags">
                {PROJECTS[0].highlights.slice(0, 3).map((x, i) => (
                  <span key={i}>{x}</span>
                ))}
              </div>
            </div>

            <div className="pr-feature-cta">
              <button className="btn btn-primary" onClick={() => setActive(PROJECTS[0])} type="button">
                View case study <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="container pr-section" data-reveal>
        <div className="pr-head">
          <h2 className="pr-h2">Selected work</h2>

          <div className="pr-tabs" role="tablist" aria-label="Project filters">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`pr-tab ${tab === t.key ? "active" : ""}`}
                onClick={() => setTab(t.key)}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pr-grid">
          {filtered.map((p) => (
            <article className="pr-card" key={p.id}>
              <div className="pr-cover">
                <div className="pr-cover-fallback" />
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={p.title}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : null}
              </div>

              <div className="pr-body">
                <div className="pr-meta">
                  <span className="pr-type">{p.type}</span>
                  <span className="pr-year">{p.year}</span>
                </div>

                <h3 className="pr-card-title">{p.title}</h3>
                <p className="pr-card-desc">{p.tagline}</p>

                <div className="pr-stack">
                  {p.stack.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                <div className="pr-actions-row">
                  <button className="pr-link" onClick={() => setActive(p)} type="button">
                    View details →
                  </button>
                  <a className="pr-link ghost" href="/contact">
                    Request similar →
                  </a>
                </div>
              </div>

              <span className="pr-shine" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pr-cta glass" data-reveal>
        <div>
          <h2>Want a website/system like these?</h2>
          <p className="muted">
            Tell us your idea — we’ll suggest the best structure and provide a quick estimate.
          </p>
        </div>
        <a href="/contact" className="btn btn-primary">
          Contact Quad Nova Tech <span className="arrow">→</span>
        </a>
      </section>

      {/* MODAL */}
      {active ? (
        <div className="modal-backdrop" onClick={() => setActive(null)} role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-label="Project details"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              <div className="modal-title">
                <h3>{active.title}</h3>
                <p className="muted">{active.tagline}</p>
              </div>
              <button className="modal-x" onClick={() => setActive(null)} type="button" aria-label="Close">
                ✕
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-col">
                <div className="modal-card glass">
                  <div className="modal-row">
                    <span className="k">Type</span>
                    <span className="v">{active.type}</span>
                  </div>
                  <div className="modal-row">
                    <span className="k">Year</span>
                    <span className="v">{active.year}</span>
                  </div>
                  <div className="modal-row">
                    <span className="k">Tech</span>
                    <span className="v">{active.stack.join(" • ")}</span>
                  </div>
                </div>

                <div className="modal-card glass">
                  <h4>Highlights</h4>
                  <ul>
                    {active.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-col">
                <div className="modal-card glass">
                  <h4>Overview</h4>
                  <ul>
                    {active.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-buttons">
                  <a href="/contact" className="btn btn-primary w-100">
                    Build something like this <span className="arrow">→</span>
                  </a>
                  <a href="/services" className="btn btn-outline w-100">
                    Explore services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}