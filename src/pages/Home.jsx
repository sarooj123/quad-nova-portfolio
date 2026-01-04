import { motion } from "framer-motion";
import heroImg from "../assets/quad2.jpeg";
import "../styles/home.css";
import { GlobeIcon, GearIcon, ShieldIcon } from "../components/icons";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 },
});

const services = [
  {
    icon: <GlobeIcon />,
    title: "Website Development",
    desc: "Premium business websites with strong UI, SEO and performance.",
    points: ["Modern UI + animations", "SEO-ready structure", "Fast + responsive"],
  },
  {
    icon: <GearIcon />,
    title: "Web App Development",
    desc: "Dashboards, portals, admin panels, authentication, and APIs.",
    points: ["Role-based dashboards", "Secure auth", "API integration"],
  },
  {
    icon: <ShieldIcon />,
    title: "Maintenance & Support",
    desc: "Updates, security, bug fixes, optimization, and new features.",
    points: ["Monthly support", "Bug fixes + updates", "Speed + security"],
  },
];

const projects = [
  {
    title: "QR Digital Menu + Feedback",
    desc: "Restaurant QR menu, PDF generator, and feedback system with admin dashboard.",
    tags: ["React", "Admin", "QR"],
  },
  {
    title: "Company Portfolio Website",
    desc: "Premium agency-style website with contact leads, fast performance and SEO.",
    tags: ["UI/UX", "SEO", "Landing"],
  },
  {
    title: "Role-Based Admin Dashboard",
    desc: "Secure admin portal with roles, analytics, and management features.",
    tags: ["Auth", "Dashboard", "API"],
  },
];

const testimonials = [
  { quote: "Very professional UI and fast delivery. The site looks premium and smooth.", name: "Client — Business Website" },
  { quote: "Communication was excellent and the final result matched our expectations.", name: "Client — Web App" },
  { quote: "Great support even after delivery. Quick fixes and updates.", name: "Client — Maintenance" },
];

export default function Home() {
  return (
    <main className="container home">
      {/* HERO CARD */}
      <section className="hero-shell glass">
        <div className="hero-left">
          <motion.p {...fade(0)} className="tag">
            Outsourced development team
          </motion.p>

          <motion.h1 {...fade(0.05)}>
            Premium web <br />
            & software <br />
            solutions
            <span className="subline">that &nbsp; feel &nbsp; in-house</span>
          </motion.h1>

          <motion.p {...fade(0.1)} className="desc">
            Quad Nova Tech builds modern websites, web apps, dashboards and IT solutions
            with premium UI + speed + long-term support.
          </motion.p>

          <motion.div {...fade(0.15)} className="actions">
            <a className="btn btn-primary" href="/contact">Hire us</a>
            <a className="btn btn-outline" href="/projects">Our cases</a>
          </motion.div>

          <motion.div {...fade(0.18)} className="mini-proof">
            <div className="proof-pill"><span className="dot dot-gold" /> Fast delivery</div>
            <div className="proof-pill"><span className="dot dot-purple" /> Clean UI</div>
            <div className="proof-pill"><span className="dot dot-green" /> Secure code</div>
          </motion.div>
        </div>

        <div className="hero-right">
          <div className="glow-ring" />

          <motion.div
            className="hero-imgWrap"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img className="hero-3d" src={heroImg} alt="Quad Nova Tech" />
            <span className="spark s1" />
            <span className="spark s2" />
            <span className="spark s3" />
          </motion.div>

          <motion.div
            className="hero-bubble glass"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="bubble-row">
              <div className="avatars">
                <span className="av" />
                <span className="av" />
                <span className="av" />
              </div>
              <span className="bubble-pill">Fast delivery</span>
            </div>

            <p className="bubble-text">
              Clean UI, quick communication, and reliable delivery — fully remote, fully in sync.
            </p>
          </motion.div>
        </div>

        <motion.div className="hero-bottom glass" {...fade(0.2)}>
          <div>
            <div className="bottom-title">About our team</div>
            <div className="bottom-sub">
              Small team, premium standards — websites, web apps, maintenance & IT solutions.
            </div>
          </div>
          <a className="btn btn-primary" href="/contact">Work with us</a>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="section section-fancy">
        <motion.div {...fade(0)} className="section-head">
          <div className="badge">Services</div>
          <h2 className="section-title">What we can build for your business</h2>
          <p className="section-sub">
            Premium UI, clean code, fast delivery — built to convert visitors into customers.
          </p>
        </motion.div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <motion.div key={s.title} className="svc-card" {...fade(0.05 * i)}>
              <div className="svc-border" />
              <div className="svc-inner">
                <div className="svc-top">
                  <div className="svc-icon">{s.icon}</div>
                  <div className="svc-title">{s.title}</div>
                </div>

                <div className="svc-desc">{s.desc}</div>
                <div className="svc-divider" />

                <ul className="svc-points">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>

                <div className="svc-cta">
                  <span className="svc-pill">Premium</span>
                  <a className="svc-link" href="/services">Learn more →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <motion.div {...fade(0)} className="section-head">
          <div className="badge">Projects</div>
          <h2 className="section-title">Selected case studies</h2>
          <p className="section-sub">A few examples of solutions we can build for clients.</p>
        </motion.div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <motion.article key={p.title} className="proj-card glass" {...fade(0.06 * i)}>
              <div className="proj-top">
                <div className="proj-title">{p.title}</div>
                <span className="proj-chip">Case study</span>
              </div>

              <div className="proj-desc">{p.desc}</div>

              <div className="proj-tags">
                {p.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
              </div>

              <a className="proj-link" href="/projects">View details →</a>
              <div className="proj-glow" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <motion.div {...fade(0)} className="section-head">
          <div className="badge">Testimonials</div>
          <h2 className="section-title">Clients love working with us</h2>
          <p className="section-sub">Quality, clarity, and support — this is what we focus on.</p>
        </motion.div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="test-card glass" {...fade(0.05 * i)}>
              <div className="test-quote">“{t.quote}”</div>
              <div className="test-who">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta glass">
        <motion.div {...fade(0)}>
          <h2 className="cta-title">Ready to build something premium?</h2>
          <p className="cta-sub">
            Share your idea — we’ll suggest the best solution, timeline and next steps.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="/contact">Get a quote</a>
            <a className="btn btn-outline" href="/services">Explore services</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}