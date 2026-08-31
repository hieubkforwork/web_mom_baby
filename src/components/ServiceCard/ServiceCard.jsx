import { useState } from "react";
import "./ServiceCard.css";

/**
 * ServiceCard — A single service card with hover/tap overlay.
 *
 * Props (all from the services data object):
 *   id     {string}    — Unique key
 *   title  {string}    — Card title (uppercase)
 *   image  {string}    — Image src (placeholder or real URL)
 *   alt    {string}    — Image alt text
 *   items  {string[]}  — List of sub-services shown in overlay
 */
const ServiceCard = ({ title, image, alt, items }) => {
  // Mobile: toggle overlay on tap
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setTapped((prev) => !prev);
    }
    if (e.key === "Escape") {
      setTapped(false);
    }
  };

  return (
    <article
      className={`service-card${tapped ? " service-card--tapped" : ""}`}
      tabIndex={0}
      aria-label={`${title} — nhấn để xem chi tiết dịch vụ`}
      onKeyDown={handleKeyDown}
      onClick={handleTap}
    >
      {/* ── Image ── */}
      <div className="service-card__image-wrap">
        <img
          src={image}
          alt={alt}
          className="service-card__image"
          loading="lazy"
        />
      </div>

      {/* ── Default title (visible when not hovered/tapped) ── */}
      {/* ── Default title (visible when not hovered/tapped) ── */}
      <div className="service-card__footer">
        <h3 className="service-card__title">{title}</h3>
        <img
          src="/homepage-divider-service.png"
          alt=""
          className="service-card__divider"
          aria-hidden="true"
        />
      </div>

      {/* ── Hover / tap overlay ── */}
      <div className="service-card__overlay" aria-hidden={!tapped}>
        <div className="service-card__overlay-inner">
          <h3 className="service-card__overlay-title">{title}</h3>
          <ul className="service-card__list" role="list">
            {items.map((item, idx) => (
              <li key={idx} className="service-card__list-item">
                <span className="service-card__arrow" aria-hidden="true">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
