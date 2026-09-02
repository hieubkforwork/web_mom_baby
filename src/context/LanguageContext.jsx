import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Homepage",
      about: "About Us",
      service: "Services",
      contact: "Contact",
    },
    header: {
      bookNow: "Book Now",
      search: "Search...",
    
    },
    footer: {
      rights: "All rights reserved.",
    },
    home: {
      heroTitle: "Welcome to Our Website",
      heroDesc: "Your trusted partner for professional services",
      discoverServices: "Discover Services",
      features: {
        maternity: {
          title: "Postpartum Care",
          desc: "Support for postpartum recovery",
        },
        newborn: {
          title: "Newborn Care",
          desc: "Comprehensive care for your beloved baby",
        },
        vaccine: {
          title: "Nutrition Consultation",
          desc: "Nutrition guidance for mothers and babies",
        },
        support: {
          title: "Consulting & Support",
          desc: "Answers and support 24/7",
        },
      },
      aboutSection: {
        title: "ABOUT US",
        brandName: "Maia care",
        desc1:
          " is proud to be a trusted companion for thousands of families. We understand the hardships and boundless happiness in the journey of motherhood, thereby providing the most comprehensive, safe, and dedicated healthcare services.",
        desc2:
          "With a team of experienced experts, a standard relaxing space, and specially designed treatments, we are committed to bringing perfect recovery for mothers and a solid start for beloved babies.",
        cta: "LEARN MORE",
      },
      servicesSection: {
        heading: "OUR SERVICES",
        postpartum: {
          title: "Postpartum Mother Care Services",
          items: [
            "Medical Abdominal Massage",
            "Relaxing Back Massage",
            "Breast Massage for Milk Duct Relief",
            "Postpartum Stitch and C-Section Incision Care",
          ],
        },
        baby: {
          title: "Baby Care\nServices",
          items: [
            "Health Check-up and Consultation",
            "Hydrotherapy Bath",
            "Baby massage",
            "Hourly In-Home Baby Care",
          ],
        },
        pregnant: {
          title: "Mother & Baby Care\nPackages",
          items: [
            "“Healthy Mom – Happy Baby” Package",
            "“Mom’s Recovery – Baby’s Health” Package",
            "“Complete Mom & Baby Care” Package",
            "“Postpartum Care Companion” Package",
          ],
        },
        complex: {
          title: "Complimentary “Nutrition Consultation” Packages",
          items: [
            "Postpartum Nutrition Consultation for Mothers",
            "Postpartum Nutrition Meal Plan",
            "Nutrition Consultation and Weaning Meal Plan for Babies",
            "“Healthy Mom – Happy Eater” Nutrition Package",
          ],
        },
      },
      whyChooseUs: {
        heading: "WHY CHOOSE MOMCARE24H?",
        safety: {
          title: "SAFETY",
          description:
            "Our care procedures are designed specifically for postpartum mothers and newborns, with a focus on hygiene, health monitoring, and appropriate response to any unusual signs.",
        },
        dedication: {
          title: "EXPERTISE",
          description:
            "Our team is professionally trained to ensure that care services are delivered according to proper procedures and tailored to each individual case.",
        },
        professional: {
          title: "PERSONALIZED CARE",
          description:
            "Our 1:1 care model allows Maia Care to understand the needs of each mother and baby and provide suitable services and care plans.",
        },
        convenient: {
          title: "CONVENIENCE",
          description:
            "Our services are primarily provided at home, allowing mothers and babies to receive care in a familiar environment while reducing travel time and effort.",
        },
        trust: {
          title: "COMPREHENSIVE",
          description:
            "We combine mother care, baby care, care packages, and nutrition consultation to provide continuous support for the whole family.",
        },
      },
    },
    about: {
      heroTitle: "About Us",
      heroDesc: "Learn more about who we are and what we do",
    },
    service: {
      heroTitle: "Our Services",
      heroDesc: "Discover the services we offer",
    },
    contact: {
      heroTitle: "Contact Us",
      heroDesc: "Get in touch with us",
    },
    booking: {
      heroTitle: "Service Booking",
      heroDesc: "Please fill in the information and select a suitable time. We will confirm your appointment as soon as possible.",
      selectServiceLabel: "Select Service",
      selectServicePlaceholder: "Select service",
      services: [
        "Baby Services",
        "Maternity Services",
        "Postpartum Services"
      ],
      customerInfoTitle: "1. Customer Information",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      noteLabel: "Notes (if any)",
      notePlaceholder: "Enter your notes...",
      timeSelectionTitle: "2. Select Time",
      dateLabel: "Select Date",
      dayLabel: "Select Day",
      dayPlaceholder: "Select day",
      days: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      timeLabel: "Select Time",
      timePlaceholder: "Select time",
      workingHours: "Working hours: 08:00 - 20:00 (All days of the week)",
      submitButton: "Confirm Booking",
      privacyText: "Your information is kept strictly confidential"
    },
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Về Chúng Tôi",
      service: "Dịch Vụ",
      contact: "Liên Hệ",
    },
    header: {
      bookNow: "Đặt Lịch",
      search: "Tìm kiếm...",
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
    },
    home: {
      heroTitle: "Chào Mừng Đến Website",
      heroDesc: "Đối tác đáng tin cậy cho các dịch vụ chuyên nghiệp",
      discoverServices: "Khám phá Dịch vụ",
      features: {
        maternity: {
          title: "Chăm sóc mẹ sau sinh",
          desc: "Hỗ trợ mẹ phục hồi sau sinh  ",
        },
        newborn: {
          title: "Chăm sóc sơ sinh",
          desc: "Chăm sóc bé yêu toàn diện",
        },
        vaccine: {
          title: "Tư vấn dinh dưỡng",
          desc: "Dinh dưỡng phù hợp cho mẹ và bé",
        },
        support: {
          title: "Tư vấn & hỗ trợ",
          desc: "Giải đáp và hỗ trợ 24/7",
        },
      },
      aboutSection: {
        title: "VỀ CHÚNG TÔI",
        brandName: "Maia care",
        desc1:
          " tự hào là người bạn đồng hành tin cậy của hàng ngàn gia đình Việt. Chúng tôi thấu hiểu những vất vả và niềm hạnh phúc vô bờ bến trong hành trình làm mẹ, từ đó mang đến các dịch vụ chăm sóc sức khỏe toàn diện, an toàn và tận tâm nhất.",
        desc2:
          "Với đội ngũ chuyên gia giàu kinh nghiệm, không gian thư giãn tiêu chuẩn và các liệu trình được thiết kế riêng biệt, chúng tôi cam kết mang lại sự phục hồi hoàn hảo cho mẹ và sự khởi đầu vững chắc cho bé yêu.",
        cta: "XEM THÊM",
      },
      servicesSection: {
        heading: "DỊCH VỤ CỦA CHÚNG TÔI",
        baby: {
          title: "Dịch vụ chăm sóc\nem bé",
          items: [
            "Kiểm tra và tư vấn sức khỏe",
            "Tắm thủy liệu",
            "Massage cho bé",
            "Chăm sóc bé tại nhà theo giờ",
          ],
        },
        pregnant: {
          title: "Combo chăm sóc\nmẹ và bé",
          items: [
            "Combo “Mẹ khỏe - Bé yêu”",
            "Combo “Mẹ phục hồi - Bé khỏe”",
            "Combo “Mẹ và bé toàn diện”",
            "Chăm sóc da",
            "Combo “Đồng hành sau sinh”",
          ],
        },
        postpartum: {
          title: "Dịch vụ chăm sóc mẹ\nsau sinh",
          items: [
            "Massage bụng y khoa",
            "Massage lưng thư giãn",
            "Massage hỗ trợ thông tắc tia sữa",
            "Chăm sóc vết khâu, vết mổ sau sinh",
          ],
        },
        complex: {
          title: "Gói tặng kèm “tư vấn\ndinh dưỡng”",
          items: [
            "Tư vấn dinh dưỡng cho mẹ sau sinh",
            "Gói thực đơn dinh dưỡng cho mẹ sau sinh",
            "Tư vấn dinh dưỡng và thực đơn ăn dặm cho bé",
            "Gói dinh dưỡng “Mẹ khỏe - Bé ăn ngon”",
          ],
        },
      },
      whyChooseUs: {
        heading: "VÌ SAO NÊN CHỌN CHÚNG TÔI?",
        safety: {
          title: "AN TOÀN",
          description:
            " Quy trình chăm sóc được xây dựng phù hợp với mẹ sau sinh và trẻ sơ sinh, chú trọng vệ sinh, theo dõi tình trạng và xử lý khi có dấu hiệu bất thường.",
        },
        dedication: {
          title: "CHUYÊN MÔN",
          description:
            " Đội ngũ được định hướng có chuyên môn và được đào tạo, giúp các dịch vụ chăm sóc được thực hiện đúng quy trình và phù hợp với từng trường hợp.",
        },
        professional: {
          title: "CÁ NHÂN HÓA",
          description:
            "Mô hình chăm sóc 1:1 giúp Maia Care hiểu nhu cầu của từng mẹ và bé, từ đó lựa chọn dịch vụ và liệu trình phù hợp hơn.",
        },
        convenient: {
          title: "TIỆN LỢI",
          description:
            "Dịch vụ chủ yếu được cung cấp tại nhà, giúp mẹ và bé được chăm sóc ngay trong không gian quen thuộc, đồng thời giảm thời gian và công sức di chuyển.",
        },
        trust: {
          title: "TOÀN DIỆN",
          description:
            "Kết hợp chăm sóc mẹ, chăm sóc bé, các combo theo liệu trình và tư vấn dinh dưỡng, mang đến hành trình chăm sóc xuyên suốt cho cả gia đình.",
        },
      },
    },
    about: {
      heroTitle: "Về Chúng Tôi",
      heroDesc: "Tìm hiểu thêm về chúng tôi và những gì chúng tôi làm",
    },
    service: {
      heroTitle: "Dịch Vụ",
      heroDesc: "Khám phá các dịch vụ chúng tôi cung cấp",
    },
    contact: {
      heroTitle: "Contact Us",
      heroDesc: "Get in touch with us",
    },
    booking: {
      heroTitle: "Booking dịch vụ",
      heroDesc: "Vui lòng điền đầy đủ thông tin và chọn thời gian phù hợp. Chúng tôi sẽ xác nhận lịch hẹn với bạn trong thời gian sớm nhất.",
      selectServiceLabel: "Chọn tên dịch vụ",
      selectServicePlaceholder: "Chọn dịch vụ",
      services: [
        "Dịch vụ cho bé",
        "Dịch vụ cho mẹ bầu",
        "Dịch vụ cho mẹ sau sinh"
      ],
      customerInfoTitle: "1. Thông tin khách hàng",
      fullNameLabel: "Họ và tên",
      fullNamePlaceholder: "Nhập họ và tên",
      phoneLabel: "Số điện thoại",
      phonePlaceholder: "Nhập số điện thoại",
      noteLabel: "Ghi chú (nếu có)",
      notePlaceholder: "Nhập ghi chú của bạn...",
      timeSelectionTitle: "2. Chọn thời gian",
      dateLabel: "Chọn ngày",
      dayLabel: "Chọn thứ",
      dayPlaceholder: "Chọn thứ",
      days: [
        "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm",
        "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"
      ],
      timeLabel: "Chọn giờ",
      timePlaceholder: "Chọn thời gian",
      workingHours: "Thời gian làm việc: 08:00 - 20:00 (Tất cả các ngày trong tuần)",
      submitButton: "Xác nhận đặt lịch",
      privacyText: "Thông tin của bạn được bảo mật tuyệt đối"
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("vi");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "vi" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
