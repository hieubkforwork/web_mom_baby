import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="page about-page">
      <section className="about-hero">
        <h1>{t('about.heroTitle')}</h1>
        <p>{t('about.heroDesc')}</p>
      </section>
    </div>
  );
};

export default About;
