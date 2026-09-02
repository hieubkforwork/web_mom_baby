import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="page contact-page">
      <section className="contact -hero">
        <h1>{t('contact.heroTitle')}</h1>
        <p>{t('contact.heroDesc')}</p>
      </section>
    </div>
  );
};

export default Contact;
