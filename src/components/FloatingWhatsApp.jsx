import "../styles/floating-whatsapp.css";

export default function floatingwhatsapp() {
  // ✅ Replace with your real WhatsApp number (without +)
  const phone = "923345486421";

  const text = encodeURIComponent(
    "Hi Quad Nova Tech! I want a website / web app. Please share details."
  );

  return (
    <a
      className="wa-float"
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="wa-pulse" aria-hidden="true" />
      <span className="wa-icon" aria-hidden="true">
        <WhatsAppSvg />
      </span>
      <span className="wa-tip">Chat on WhatsApp</span>
    </a>
  );
}

function WhatsAppSvg() {
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