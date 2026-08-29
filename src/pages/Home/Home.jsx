import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css";

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
    </div>
  );
};

export default Home;
