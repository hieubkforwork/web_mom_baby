import { Link } from "react-router-dom";
import "./ServiceCard.css";

/**
 * ServiceCard — A single service card with hover overlay.
 *
 * Props:
 *   id       {string}   — Group key in services data, e.g., "postpartum", "baby", "pregnant", "complex"
 *   title    {string}   — Card title (uppercase)
 *   image    {string}   — Image src
 *   alt      {string}   — Image alt text
 *   items    {array}    — List of sub-services shown in overlay
 */
const ServiceCard = ({ id, title, image, alt, items }) => {
  return (
    <div className="service-card">
      {/* ── Image ── */}
      <div className="service-card__image-wrap">
        <img
          src={image}
          alt={alt}
          className="service-card__image"
          loading="lazy"
        />
      </div>

      {/* ── Default title (visible when not hovered) ── */}
      <div className="service-card__footer">
        <h3 className="service-card__title">{title}</h3>
        <img
          src="/homepage-divider-service.png"
          alt=""
          className="service-card__divider"
          aria-hidden="true"
        />
      </div>

      {/* ── Hover overlay (desktop) ── */}
      <div className="service-card__overlay">
        <div className="service-card__overlay-inner">
          <h3 className="service-card__overlay-title">{title}</h3>
          <ul className="service-card__list" role="list">
            {items.map((item, idx) => (
              <li key={idx}>
                <Link 
                  to={`/service/${id}/${idx}`} 
                  className="service-card__list-item"
                  title={`Xem chi tiết: ${typeof item === "object" ? item.name : item}`}
                >
                  <span className="service-card__arrow" aria-hidden="true">
                    →
                  </span>
                  <span>{typeof item === "object" ? item.name : item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;