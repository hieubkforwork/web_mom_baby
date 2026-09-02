import { useEffect, useRef } from "react";
import {
  LuShieldCheck,
  LuHeartHandshake,
  LuUsers,
  LuClock,
  LuHeart,
} from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./WhyChooseUs.css";

/**
 * WhyChooseUs — "Vì Sao Nên Chọn MOMCARE24H?" section.
 *
 * - 5-column open layout, no card borders/shadows.
 * - Icon circles with botanical leaf accent below each circle.
 * - Entrance animation via IntersectionObserver (staggered, 80ms delay/item).
 * - Fully i18n via useLanguage().
 * - Respects prefers-reduced-motion.
 */

const FEATURES = [
  { id: "safety",       Icon: LuShieldCheck,    badge: null },
  { id: "dedication",   Icon: LuHeartHandshake, badge: null },
  { id: "professional", Icon: LuUsers,          badge: LuHeart },
  { id: "convenient",   Icon: LuClock,          badge: null },
  { id: "trust",        Icon: LuHeart,          badge: null },
];

const WhyChooseUs = ({ title, titleKey }) => {
  const { t } = useLanguage();
  const itemsRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      itemsRef.current.forEach((el) => {
        if (el) el.classList.add("wcu-feature--visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wcu-feature--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wcu-section" aria-labelledby="wcu-heading">
      <div className="wcu-container">
        <SectionHeading title={title ?? t(titleKey ?? "home.whyChooseUs.heading")} />

        <div className="wcu-grid">
          {FEATURES.map(({ id, Icon, badge: Badge }, idx) => (
            <div
              key={id}
              className="wcu-feature"
              ref={(el) => (itemsRef.current[idx] = el)}
              style={{ "--stagger-delay": `${idx * 80}ms` }}
            >
              {/* ── Icon circle ── */}
              <div className="wcu-icon-wrap">
                <div className="wcu-icon-circle">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="wcu-icon"
                    aria-hidden="true"
                  />
                 
                </div>

                {/* Botanical leaf accent below circle */}
                <svg
                  className="wcu-leaf"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 22C12 22 4 16 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 16 12 22 12 22Z"
                    stroke="var(--clr-primary)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <line
                    x1="12" y1="2"
                    x2="12" y2="22"
                    stroke="var(--clr-primary)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* ── Title ── */}
              <h3 className="wcu-title">
                {t(`home.whyChooseUs.${id}.title`)}
              </h3>

              {/* ── Decorative rule ── */}
              <div className="wcu-rule" aria-hidden="true">
                <span className="wcu-rule__line" />
                <span className="wcu-rule__dot" />
                <span className="wcu-rule__line" />
              </div>

              {/* ── Description ── */}
              <p className="wcu-desc">
                {t(`home.whyChooseUs.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
