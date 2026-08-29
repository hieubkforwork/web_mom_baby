import { useLanguage } from '../../context/LanguageContext';
import './Service.css';

const Service = () => {
  const { t } = useLanguage();

  return (
    <div className="page service-page">
      <section className="service-hero">
        <h1>{t('service.heroTitle')}</h1>
        <p>{t('service.heroDesc')}</p>
      </section>
    </div>
  );
};

export default Service;
