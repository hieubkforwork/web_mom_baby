import { useLanguage } from '../../context/LanguageContext';
import './Booking.css';

const Booking = () => {
  const { t } = useLanguage();

  return (
    <div className="page booking-page">
      <section className="booking-hero">
        <h1>{t('booking.heroTitle')}</h1>
        <p>{t('booking.heroDesc')}</p>
      </section>
    </div>
  );
};

export default Booking;
