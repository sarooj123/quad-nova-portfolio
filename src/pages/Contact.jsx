import { useMemo, useState } from "react";
import "../styles/contact.css";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  useReveal();
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
      botcheck: "",
    }),
    []
  );

  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const update = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (!WEB3FORMS_KEY) {
      setStatus({
        type: "error",
        msg: "Missing Web3Forms key (VITE_WEB3FORMS_KEY).",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead – ${form.projectType || "Contact"} | Quad Nova Tech`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          message: form.message,
          botcheck: form.botcheck,
        }),
      });

      const data = await res.json();
      if (data?.success) {
        setStatus({
          type: "success",
          msg: "Message sent successfully! We’ll reply soon.",
        });
        setForm(initial);
      } else {
        setStatus({
          type: "error",
          msg: data?.message || "Something went wrong. Try again.",
        });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">
      {/* Background FX */}
      <div className="fx-bg" aria-hidden="true">
        <span className="fx-grid" />
        <span className="fx-orb fx-orb-1" />
        <span className="fx-orb fx-orb-2" />
        <span className="fx-vignette" />
      </div>

      {/* HERO */}
      <section className="container ct-hero" data-reveal>
        <span className="ct-pill">Contact</span>
        <h1 className="ct-title">
          Let’s build something <span className="ct-title-glow">premium</span>
        </h1>
        <p className="ct-sub">
          Send details and we’ll reply with a clear plan, timeline and estimate.
        </p>
      </section>

      {/* MAIN */}
      <section className="container ct-main" data-reveal>
        {/* FORM */}
        <div className="ct-form glass">
          <div className="ct-form-head">
            <div>
              <h2>Send a message</h2>
              <p className="muted">Your message goes directly to our business team. Expect a quick and professional response.</p>
            </div>
            <div className="ct-form-chip">
              <span className="ct-dot" />
              Typically replies within 24h
            </div>
          </div>

          {status.msg ? (
            <div className={`ct-alert ${status.type}`}>
              <span className="ct-alert-dot" />
              <span>{status.msg}</span>
            </div>
          ) : null}

          <form onSubmit={submit}>
            {/* honeypot */}
            <input
              className="ct-honey"
              type="text"
              name="botcheck"
              value={form.botcheck}
              onChange={update}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="ct-grid">
              <div className="ct-field">
                <label>Full name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="ct-field">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="ct-field">
                <label>Phone (optional)</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+92..."
                />
              </div>

              <div className="ct-field">
                <label>Project type</label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={update}
                  required
                >
                  <option value="">Select</option>
                  <option>Website</option>
                  <option>Web Application</option>
                  <option>Ecommerce</option>
                  <option>System / Dashboard</option>
                  <option>Maintenance</option>
                  <option>Courses / Training</option>
                </select>
              </div>
            </div>

            <div className="ct-field">
              <label>Project details</label>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows="5"
                placeholder="Describe your project, goals, timeline, budget (optional)..."
                required
              />
            </div>

            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <span className="arrow">→</span>
            </button>

            <p className="ct-mini muted">
              By sending, you agree to be contacted back via email/WhatsApp.
            </p>
          </form>
        </div>

        {/* INFO */}
        <aside className="ct-info">
          <SocialCard
            brand="email"
            title="Email"
            text="Business inquiries"
            href="mailto:quadnovatech@gmail.com"
            label="quadnovatech@gmail.com"
            icon={<EmailIcon />}
          />

          <SocialCard
            brand="whatsapp"
            title="WhatsApp"
            text="Fast response"
            href="https://wa.me/923345486421"
            label="Chat on WhatsApp"
            icon={<WhatsAppIcon />}
          />

          <SocialCard
            brand="instagram"
            title="Instagram"
            text="Designs & updates"
            href="https://instagram.com/quadnovatech"
            label="Follow @quadnovatech"
            icon={<InstagramIcon />}
          />

          <SocialCard
            brand="facebook"
            title="Facebook"
            text="Business presence"
            href="https://www.facebook.com/share/1C4bftfXyr/"
            label="Visit our page"
            icon={<FacebookIcon />}
          />

          <div className="ct-card glass ct-map">
            <div className="ct-card-row">
              <div className="ct-icobadge map">
                <MapPinIcon />
              </div>
              <div>
                <h3>Location</h3>
                <p className="muted">Pakistan • Worldwide (Remote)</p>
              </div>
            </div>

            <div className="ct-map-frame">
              <iframe
                title="Quad Nova Tech Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13262.704364547924!2d72.7251981!3d33.794861749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa7efa96d63fb%3A0xf986f93179f8bc17!2sShah%20Wali%20Colony%2C%20Wah!5e0!3m2!1sen!2s!4v1767472117369!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              className="ct-link"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

function SocialCard({ brand, title, text, href, label, icon }) {
  return (
    <div className={`ct-card glass social ${brand}`}>
      <div className="ct-card-row">
        <div className={`ct-icobadge ${brand}`}>{icon}</div>
        <div className="ct-card-text">
          <h3>{title}</h3>
          <p className="muted">{text}</p>
        </div>
      </div>

      <a className="ct-link" href={href} target="_blank" rel="noreferrer">
        {label} →
      </a>
    </div>
  );
}

/* ===================== SVG ICONS (Premium) ===================== */

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7.5C4 6.12 5.12 5 6.5 5h11C18.88 5 20 6.12 20 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 19 4 17.88 4 16.5v-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6.2 7.2 12 11.5l5.8-4.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21a9 9 0 1 0-7.8-4.5L3.5 20.5l4-1.1A8.96 8.96 0 0 0 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.4c.2-.4.4-.5.8-.4l.8.3c.3.1.5.3.5.6 0 .4-.2.8-.4 1.1-.1.2-.1.4 0 .6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6 0 .3-.2.7-.4 1.1-.4.3 0 .5.2.6.5l.3.8c.1.4 0 .6-.4.8-.6.3-1.3.5-1.9.3-1.8-.6-3.3-2-4.1-3.8-.3-.6-.1-1.3.3-1.9Z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.6 6.6h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.5 21v-7h2.6l.4-3h-3V9.2c0-.9.2-1.5 1.5-1.5H17V5.1c-.4-.1-1.3-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H8v3h2.4v7h3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        fill="currentColor"
        opacity=".9"
      />
    </svg>
  );
}