import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MyWebsite. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
