import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="page home-page">
      <section className="banner">
        <img src="/mevabe2.png" alt="Banner mẹ và bé" className="banner-img" />
        <div className="banner-overlay">
          <Link to="/service" className="cta-button">
            {t('home.discoverServices')}
          </Link>
        </div>
        
        {/* SVG overlay tạo hiệu ứng bo cong ở đáy banner */}
        <svg 
          className="banner-curve" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 Q720,200 1440,0 L1440,100 L0,100 Z" 
            fill="currentColor" 
          />
        </svg>
      </section>
    </div>
  );
};

export default Home;
