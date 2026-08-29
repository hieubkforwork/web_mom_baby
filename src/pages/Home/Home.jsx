import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>{t('home.heroTitle')}</h1>
        <p>{t('home.heroDesc')}</p>
      </section>
    </div>
  );
};

export default Home;
