import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Homepage',
      about: 'About Us',
      service: 'Services',
      contact: 'Contact',
    },
    header: {
      bookNow: 'Book Now',
      search: 'Search...',
      logo: 'Logo',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    home: {
      heroTitle: 'Welcome to Our Website',
      heroDesc: 'Your trusted partner for professional services',
    },
    about: {
      heroTitle: 'About Us',
      heroDesc: 'Learn more about who we are and what we do',
    },
    service: {
      heroTitle: 'Our Services',
      heroDesc: 'Discover the services we offer',
    },
    booking: {
      heroTitle: 'Booking',
      heroDesc: 'Book an appointment with us',
    },
  },
  vi: {
    nav: {
      home: 'Trang Chủ',
      about: 'Về Chúng Tôi',
      service: 'Dịch Vụ',
      contact: 'Liên Hệ',
    },
    header: {
      bookNow: 'Đặt Lịch',
      search: 'Tìm kiếm...',
      logo: 'Logo',
    },
    footer: {
      rights: 'Bảo lưu mọi quyền.',
    },
    home: {
      heroTitle: 'Chào Mừng Đến Website',
      heroDesc: 'Đối tác đáng tin cậy cho các dịch vụ chuyên nghiệp',
    },
    about: {
      heroTitle: 'Về Chúng Tôi',
      heroDesc: 'Tìm hiểu thêm về chúng tôi và những gì chúng tôi làm',
    },
    service: {
      heroTitle: 'Dịch Vụ',
      heroDesc: 'Khám phá các dịch vụ chúng tôi cung cấp',
    },
    booking: {
      heroTitle: 'Đặt Lịch',
      heroDesc: 'Đặt lịch hẹn với chúng tôi',
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('vi');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

