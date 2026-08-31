import { Link } from "react-router-dom";
import {
  LuHeartHandshake,
  LuBaby,
  LuSyringe,
  LuMessageCircleHeart,
  LuLeaf,
} from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Home.css";

const featuresData = [
  { id: "maternity", icon: LuHeartHandshake, color: "sage" },
  { id: "newborn", icon: LuBaby, color: "beige" },
  { id: "vaccine", icon: LuSyringe, color: "sage" },
  { id: "support", icon: LuMessageCircleHeart, color: "beige" },
];

// ── Services Data ──────────────────────────────────────────────────────────
// Nhận hàm t() để tự động đổi theo ngôn ngữ hiện tại.
// Replace the `image` field with a real URL when assets are ready.
// The component structure does NOT need to change.
const getServicesData = (t) => [
  {
    id: "baby",
    title: t("home.servicesSection.baby.title"),
    image: "https://placehold.co/480x600/E2CFC2/7a6b5a?text=Baby+Services",
    alt: "Chăm sóc chuyên nghiệp cho bé sơ sinh",
    items: t("home.servicesSection.baby.items"),
  },
  {
    id: "pregnant",
    title: t("home.servicesSection.pregnant.title"),
    image: "https://placehold.co/480x600/A8BFA8/ffffff?text=Maternity+Services",
    alt: "Mẹ bầu được chăm sóc và massage chuyên nghiệp",
    items: t("home.servicesSection.pregnant.items"),
  },
  {
    id: "postpartum",
    title: t("home.servicesSection.postpartum.title"),
    image: "https://placehold.co/480x600/c4b5a5/ffffff?text=Postpartum+Services",
    alt: "Mẹ sau sinh được chăm sóc và phục hồi chuyên nghiệp",
    items: t("home.servicesSection.postpartum.items"),
  },
];

const Home = () => {
  const { t } = useLanguage();
  const servicesData = getServicesData(t);

  return (
    <div className="page home-page">
      <section className="banner">
        <picture>
          <source media="(max-width: 480px)" srcset="/mevabe2.png" />
          <source media="(max-width: 1024px)" srcset="/mevabe4.png" />
          <source media="(max-width: 1440px)" srcset="/mevabe3.png" />
          <img
            src="/mevabe3.png"
            className="banner-img"
            alt="Banner mẹ và bé"
          />
        </picture>
        <div className="banner-overlay">
          <Link to="/service" className="cta-button">
            {t("home.discoverServices")}
          </Link>
        </div>

        {/* SVG overlay: viền be rộng 2 đầu, thu hẹp và giao nhau ở giữa */}
        <svg
          className="banner-curve"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* BE - vẽ trước, curve gốc (giữ nguyên hình dạng banner) */}
          <path d="M0,0 Q720,190 1440,0 L1440,120 L0,120 Z" fill="#F5EFE6" />

          {/* WHITE - vẽ sau, đè lên, lệch xuống 25px ở 2 mép, 
      thu hẹp dần và trùng khớp be tại điểm giữa (x=720) */}
          <path d="M0,35 Q720,155 1440,35 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <div className="features-container">
          {featuresData.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="feature-card">
                <div className={`feature-icon-wrapper bg-${feature.color}`}>
                  <Icon size={28} className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    {t(`home.features.${feature.id}.title`)}
                  </h3>
                  <p className="feature-desc">
                    {t(`home.features.${feature.id}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="services-section" aria-labelledby="services-heading">
        <div className="services-container">
          <SectionHeading title={t("home.servicesSection.heading")} />
          <div className="services-grid">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                image={service.image}
                alt={service.alt}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Title & Divider */}
          <div className="about-header">
            <h2 className="about-title">{t("home.aboutSection.title")}</h2>
            <div className="about-divider">
              <svg
                viewBox="0 0 800 60"
                className="about-divider-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dots */}
                <circle cx="140" cy="30" r="2.5" fill="#8FA68E" />
                <circle cx="160" cy="30" r="4" fill="#D9C4A8" />

                {/* Left Wave */}
                <path
                  d="M180,30 Q250,10 320,30"
                  fill="none"
                  stroke="#8FA68E"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                {/* Left Small Heart */}
                <path
                  d="M340,35 C 330,25 335,18 340,22 C 345,18 350,25 340,35 Z"
                  fill="none"
                  stroke="#C89B8C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {(() => {
                  const iconW = 80; // chỉnh theo tỉ lệ ảnh thật của bạn
                  const iconH = 80;
                  return (
                    <image
                      href="/icon-title.png"
                      x={-iconW / 2}
                      y={-iconH / 2}
                      width={iconW}
                      height={iconH}
                      transform="translate(400, 30)"
                    />
                  );
                })()}

                {/* Right Small Heart */}
                <path
                  d="M460,35 C 450,25 455,18 460,22 C 465,18 470,25 460,35 Z"
                  fill="none"
                  stroke="#C89B8C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Right Wave */}
                <path
                  d="M480,30 Q550,10 620,30"
                  fill="none"
                  stroke="#8FA68E"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                {/* Right Dots */}
                <circle cx="640" cy="30" r="4" fill="#D9C4A8" />
                <circle cx="660" cy="30" r="2.5" fill="#8FA68E" />
              </svg>
            </div>
          </div>

          {/* Two Columns Layout */}
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>{t("home.aboutSection.brandName")}</strong>
                {t("home.aboutSection.desc1")}
              </p>
              <p>{t("home.aboutSection.desc2")}</p>
              <Link to="/about" className="about-cta">
                <span className="about-cta-icon">
                  <LuLeaf size={16} />
                </span>
                {t("home.aboutSection.cta")}
              </Link>
            </div>
            <div className="about-image-wrapper">
              <img
                src="/about-team.jpg"
                alt="About Us Team"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
