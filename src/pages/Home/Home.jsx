import { Link } from "react-router-dom";
import { 
  LuHeartHandshake, 
  LuBaby, 
  LuSyringe, 
  LuMessageCircleHeart 
} from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css";

const featuresData = [
  { id: 'maternity', icon: LuHeartHandshake, color: 'sage' },
  { id: 'newborn', icon: LuBaby, color: 'beige' },
  { id: 'vaccine', icon: LuSyringe, color: 'sage' },
  { id: 'support', icon: LuMessageCircleHeart, color: 'beige' },
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="page home-page">
      <section className="banner">
        <img src="/mevabe2.png" alt="Banner mẹ và bé" className="banner-img" />
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
                  <h3 className="feature-title">{t(`home.features.${feature.id}.title`)}</h3>
                  <p className="feature-desc">{t(`home.features.${feature.id}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
