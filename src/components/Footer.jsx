import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="container ft-inner glass">
        <div className="ft-left">
          <div className="ft-brand">
            <span className="ft-mark" aria-hidden="true">
              <NovaMark />
            </span>
            <div>
              <div className="ft-name">Quad Nova Tech</div>
              <div className="ft-tag">Web Apps • Software • IT Solutions</div>
            </div>
          </div>

          <p className="ft-desc">
            We build premium websites, web apps, dashboards and ecommerce solutions — fast,
            clean and scalable.
          </p>

          <div className="ft-social">
            <a
              className="ft-sbtn ig"
              href="https://instagram.com/quadnovatech"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              className="ft-sbtn fb"
              href="https://www.facebook.com/share/1C4bftfXyr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              className="ft-sbtn wa"
              href="https://wa.me/923345486421"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            <a
              className="ft-sbtn em"
              href="mailto:quadnovatech@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        <div className="ft-cols">
          <div className="ft-col">
            <div className="ft-h">Pages</div>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

      

          <div className="ft-col">
            <div className="ft-h">Contact</div>
            <a href="mailto:quadnovatech@gmail.com">quadnovatech@gmail.com</a>
            <a href="https://wa.me/923345486421" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <span>Pakistan • Worldwide</span>
          </div>
        </div>
      </div>

      <div className="container ft-bottom">
        <span>© {new Date().getFullYear()} Quad Nova Tech</span>
        <span className="ft-mini">Premium UI • Clean Code • Fast Delivery</span>
      </div>
    </footer>
  );
}

/* ===== Small Mark (no image needed) ===== */
function NovaMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l3 3 4 1-1 4 1 4-4 1-3 3-3-3-4-1 1-4-1-4 4-1 3-3Z"
        fill="currentColor"
        opacity=".95"
      />
    </svg>
  );
}

/* ===== SVG icons ===== */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
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
        opacity=".95"
      />
    </svg>
  );
}

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