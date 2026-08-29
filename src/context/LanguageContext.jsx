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
      discoverServices: 'Discover Services ➜',
      features: {
        maternity: {
          title: 'Maternity Care',
          desc: 'Monitoring and accompanying expectant mothers',
        },
        newborn: {
          title: 'Newborn Care',
          desc: 'Comprehensive care for your beloved baby',
        },
        vaccine: {
          title: 'Safe Vaccination',
          desc: 'On schedule, safe, and dedicated',
        },
        support: {
          title: 'Consulting & Support',
          desc: 'Answers and support 24/7',
        },
      },
      aboutSection: {
        title: "ABOUT US",
        brandName: "Mom & Baby Care",
        desc1: " is proud to be a trusted companion for thousands of families. We understand the hardships and boundless happiness in the journey of motherhood, thereby providing the most comprehensive, safe, and dedicated healthcare services.",
        desc2: "With a team of experienced experts, a standard relaxing space, and specially designed treatments, we are committed to bringing perfect recovery for mothers and a solid start for beloved babies.",
        cta: "LEARN MORE"
      },
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
      discoverServices: 'Khám phá Dịch vụ ➜',
      features: {
        maternity: {
          title: 'Chăm sóc thai kỳ',
          desc: 'Theo dõi và đồng hành cùng mẹ bầu',
        },
        newborn: {
          title: 'Chăm sóc sơ sinh',
          desc: 'Chăm sóc bé yêu toàn diện',
        },
        vaccine: {
          title: 'Tiêm chủng an toàn',
          desc: 'Đúng lịch, an toàn, tận tâm',
        },
        support: {
          title: 'Tư vấn & hỗ trợ',
          desc: 'Giải đáp và hỗ trợ 24/7',
        },
      },
      aboutSection: {
        title: "VỀ CHÚNG TÔI",
        brandName: "Mom & Baby Care",
        desc1: " tự hào là người bạn đồng hành tin cậy của hàng ngàn gia đình Việt. Chúng tôi thấu hiểu những vất vả và niềm hạnh phúc vô bờ bến trong hành trình làm mẹ, từ đó mang đến các dịch vụ chăm sóc sức khỏe toàn diện, an toàn và tận tâm nhất.",
        desc2: "Với đội ngũ chuyên gia giàu kinh nghiệm, không gian thư giãn tiêu chuẩn và các liệu trình được thiết kế riêng biệt, chúng tôi cam kết mang lại sự phục hồi hoàn hảo cho mẹ và sự khởi đầu vững chắc cho bé yêu.",
        cta: "XEM THÊM"
      },
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

