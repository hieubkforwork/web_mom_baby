import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
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
      heroTitle: "Complete Care, Solid Start",
      heroDesc:
        "Maia Care provides comprehensive, safe, and dedicated care services for mothers and babies.",
      discoverServices: "Discover Services",
      features: {
        maternity: {
          title: "Postpartum Mother Care",
          desc: "Professional support to help mothers recover comfortably after childbirth",
        },
        newborn: {
          title: "Baby Care Services",
          desc: "Comprehensive and attentive care for your beloved baby",
        },
        vaccine: {
          title: "Nutrition Consultation",
          desc: "Personalized nutrition guidance for mothers and babies",
        },
        support: {
          title: "Consultation & Support",
          desc: "Dedicated consultation and support throughout your care journey",
        },
      },
      aboutSection: {
        title: "ABOUT US",
        brandName: "Maia Care",
        desc1:
          " is proud to be a trusted companion for thousands of Vietnamese families. We understand the challenges and boundless happiness of motherhood, and provide comprehensive, safe, and dedicated care services.",
        desc2:
          "With a professionally trained team, a comfortable care environment, and personalized care programs, we are committed to supporting mothers' recovery and giving babies a healthy, strong start.",
        cta: "LEARN MORE",
      },
      servicesSection: {
        heading: "OUR SERVICES",
        baby: {
          title: "Baby Care\nServices",
          items: [
            { name: "Health Check-up & Consultation", price: "300,000đ" },
            { name: "Hydrotherapy Bath", price: "350,000đ" },
            { name: "Baby Massage", price: "200,000đ" },
            { name: "4-Hour In-Home Baby Care", price: "450,000đ" },
            { name: "8-Hour In-Home Baby Care", price: "850,000đ" },
            { name: "Basic Baby Care Package", price: "2,790,000đ", unit: "/5 sessions" },
            { name: "Comprehensive Baby Care Package", price: "5,490,000đ", unit: "/10 sessions" },
          ],
        },
        pregnant: {
          title: "Mother & Baby Care\nPackages",
          items: [
            { name: "“Healthy Mom - Happy Baby” Package", price: "790,000đ" },
            { name: "“Mom’s Recovery - Healthy Baby” Package", price: "990,000đ" },
            { name: "“Complete Mother & Baby Care” Package", price: "1,190,000đ" },
            { name: "“Postpartum Companion” Package", price: "1,390,000đ" },
          ],
        },
        postpartum: {
          title: "Postpartum Mother Care\nServices",
          items: [
            { name: "Medical Abdominal Massage", price: "350,000đ" },
            { name: "Relaxing Back Massage", price: "300,000đ" },
            { name: "Breast Massage for Milk Duct Relief", price: "550,000đ" },
            { name: "Postpartum Stitch & Incision Care", price: "350,000đ" },
            { name: "Basic Mother Care Package", price: "2,990,000đ", unit: "/5 sessions" },
            { name: "Comprehensive Mother Care Package", price: "6,890,000đ", unit: "/10 sessions" },
          ],
        },
        complex: {
          title: "Complimentary “Nutrition\nConsultation” Packages",
          items: [
            { name: "Postpartum Nutrition Consultation for Mothers", price: "299,000đ" },
            { name: "Postpartum Nutrition Meal Plan", price: "799,000đ" , unit: "/month"},
            { name: "Baby Nutrition Consultation & Weaning Meal Plan", price: "599,000đ", unit: "/month" },
            { name: "“Healthy Mom - Happy Eater” Nutrition Package", price: "1,099,000đ", unit: "/month" },
          ],
        },
      },
      whyChooseUs: {
        heading: "WHY CHOOSE US?",
        safety: {
          title: "SAFETY",
          description:
            "Our care procedures are designed for postpartum mothers and babies, with a focus on hygiene, health monitoring, and appropriate response to unusual signs.",
        },
        dedication: {
          title: "EXPERTISE",
          description:
            "Our team is professionally trained to deliver care according to clear procedures and adapt services to the needs of each mother and baby.",
        },
        professional: {
          title: "PERSONALIZED CARE",
          description:
            "Our 1:1 care model helps Maia Care understand the individual needs of each mother and baby and provide suitable services and care programs.",
        },
        convenient: {
          title: "CONVENIENCE",
          description:
            "Our services are primarily provided at home, allowing mothers and babies to receive care in a familiar environment while reducing travel time and effort.",
        },
        trust: {
          title: "COMPREHENSIVE",
          description:
            "We combine mother care, baby care, care packages, and nutrition consultation to provide continuous support throughout the family's care journey.",
        },
      },
    },
    about: {
      title: "ABOUT MAIA CARE",
      heroHeading: "Complete Care, Solid Start",
      heroDesc:
        "Maia Care is proud to be a trusted companion for thousands of Vietnamese families. We understand the challenges and boundless happiness of motherhood, and provide comprehensive, safe, and dedicated care services.",
      highlights: ["Medical Standard", "Professional", "Dedicated"],
      visionMissionTitle: "VISION & MISSION",
      visionTitle: "Vision",
      visionDesc:
        "To become a leading maternal and infant healthcare system, bringing peace of mind and better health to families.",
      missionTitle: "Mission",
      missionDesc:
        "To provide comprehensive, safe, and personalized care that meets the unique needs of every mother and baby.",
      coreValuesTitle: "CORE VALUES",
      policyTitle: "POLICIES & COMMITMENTS",
      policySubheading: "Peace of mind in every care experience",
      policies: [
        "Safety for mothers and babies",
        "Clear care procedures",
        "Professionally trained staff",
        "Respect for each family's unique needs",
        "Transparency in services",
        "Always listening and adapting",
      ],
      teamTitle: "PROFESSIONAL TEAM",
      teamIntro:
        "Our team is professionally trained and knowledgeable in maternal and baby care, always working with dedication and care.",
      quote:
        "Your peace of mind and health are our greatest happiness.",
      ctaTitle: "READY TO EXPERIENCE?",
      ctaDesc:
        "Let Maia Care accompany you on this wonderful journey of motherhood.",
      btnConsult: "Get Consultation",
      btnViewService: "View Services",
    },
    service: {
      badge: "SERVICES",
      title: "Mother & Baby Care Services",
      subtitle:
        "Personalized services designed to provide comprehensive, safe, and appropriate care for mothers and babies at every stage.",
      pricePrefix: "Price: ",
      priceSuffix: "/session",
      items: [
        {
          id: 1,
          title: "Postpartum Mother Care",
          price: "350,000đ",
          img: "https://placehold.co/400x350/F7F1E8/8eaa8e?text=Mother+Care",
        },
        {
          id: 2,
          title: "Baby Care Services",
          price: "300,000đ",
          img: "https://placehold.co/400x350/E2CFC2/7a6b5a?text=Baby+Care",
        },
        {
          id: 3,
          title: "Mother & Baby Care Packages",
          price: "790,000đ",
          img: "https://placehold.co/400x350/A8BFA8/ffffff?text=Combo+Care",
        },
        {
          id: 4,
          title: "Nutrition Consultation Packages",
          price: "299,000đ",
          img: "https://placehold.co/400x350/c4b5a5/ffffff?text=Nutrition",
        },
      ],
    },
    contact: {
      title: "CONTACT MAIA CARE",
      subtitle:
        "Maia Care is always ready to listen, advise, and accompany mothers throughout their postpartum care journey.",
      cards: {
        phone: {
          title: "PHONE",
          value: "0854334136",
          note: "(8:00 AM – 8:00 PM daily)",
        },
        address: {
          title: "ADDRESS",
          value:
            "574 Nguyễn Đình Chiểu Street, Bàn Cờ Ward, Ho Chi Minh City",
        },
        zalo: {
          title: "ZALO",
          value: "0854334136",
          note: "(Tap to chat via Zalo)",
        },
        facebook: {
          title: "FANPAGE",
          value: "Maia Care",
          note: "Postpartum mother & baby care",
        },
        email: { title: "EMAIL", value: "hello@maiacare.vn" },
        hours: {
          title: "WORKING HOURS",
          value: "Monday – Sunday",
          note: "8:00 AM – 8:00 PM",
        },
      },
      location: {
        heading: "MAIA CARE LOCATION",
        directionsBtn: "GET DIRECTIONS",
      },
    },
    booking: {
      heroTitle: "SERVICE BOOKING",
      heroDesc:
        "Please fill in your information and select a suitable time. We will confirm your appointment as soon as possible.",
      selectServiceLabel: "Select Service",
      selectServicePlaceholder: "Select a service",
      services: [
        "Baby Care Services",
        "Pregnancy Services",
        "Postpartum Mother Care Services",
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
      dayPlaceholder: "Select a day",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      timeLabel: "Select Time",
      timePlaceholder: "Select a time",
      workingHours: "Working hours: 08:00 - 20:00 (Every day of the week)",
      submitButton: "Confirm Booking",
      statusLoading: "Sending...",
      statusSuccess:
        "Booking successful! MAIA CARE will contact you to confirm your appointment.",
      statusError:
        "Unable to send booking information. Please try again later.",
      statusRequired: "Please fill in all required fields (*).",
      privacyText: "Your information is kept strictly confidential",
    },
    serviceDetail: {
      notFoundTitle: "Service Not Found",
      notFoundDesc:
        "The service you are looking for does not exist or is no longer available.",
      backToService: "Back to Services",
      time: "Duration:",
      location: "Location:",
      package: "Service Package:",
      schedule: "Appointment:",
      bookNow: "Book Now",
      tabDesc: "Service Description",
      tabProcess: "Service Process",
      tabFaq: "Frequently Asked Questions",
      aboutService: "About This Service",
      benefits: "Key Benefits",
      viewAll: "View All Services",
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
            { name: "Kiểm tra và tư vấn sức khỏe", price: "300,000đ" },
            { name: "Tắm thủy liệu", price: "350,000đ" },
            { name: "Massage cho bé", price: "200,000đ" },
            { name: "Chăm sóc bé tại nhà 4 giờ", price: "450,000đ" },
            { name: "Chăm sóc bé tại nhà 8 giờ", price: "850,000đ" },
            { name: "Gói chăm sóc bé cơ bản", price: "2,790,000đ", unit:"/5 buổi" },
            { name: "Gói chăm sóc bé toàn diện", price: "5,490,000đ", unit:"/10 buổi" },

          ],
        },
        pregnant: {
          title: "Combo chăm sóc\nmẹ và bé",
          items: [
            { name: "Combo “Mẹ khỏe - Bé yêu”", price: "790,000đ" },
            { name: "Combo “Mẹ phục hồi - Bé khỏe”", price: "990,000đ" },
            { name: "Combo “Mẹ và bé toàn diện”", price: "1,190,000đ" },
            { name: "Combo “Đồng hành sau sinh”", price: "1,390,000đ" },
          ],
        },
        postpartum: {
          title: "Dịch vụ chăm sóc mẹ\nsau sinh",
          items: [
            { name: "Massage bụng y khoa", price: "350,000đ" },
            { name: "Massage lưng thư giãn", price: "300,000đ" },
            { name: "Massage hỗ trợ thông tắc tia sữa", price: "550,000đ" },
            { name: "Chăm sóc vết khâu, vết mổ sau sinh", price: "350,000đ" },
            { name: "Gói chăm sóc mẹ cơ bản", price: "2,990,000đ", unit:"/5 buổi" },
            { name: "Gói chăm sóc mẹ toàn diện", price: "6,890,000đ", unit:"/10 buổi" },

          ],
        },
        complex: {
          title: "Gói tặng kèm “tư vấn\ndinh dưỡng”",
          items: [
            { name: "Tư vấn dinh dưỡng cho mẹ sau sinh", price: "299,000đ" },
            { name: "Gói thực đơn dinh dưỡng cho mẹ sau sinh", price: "799,000đ", unit: "/tháng"},
            { name: "Tư vấn dinh dưỡng và thực đơn ăn dặm cho bé", price: "599,000đ", unit: "/tháng" },
            { name: "Gói dinh dưỡng “Mẹ khỏe - Bé ăn ngon”", price: "1,099,000đ", unit: "/tháng" },
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
      title: "VỀ MAIA CARE",
      heroHeading: "Chăm sóc trọn vẹn, Khởi đầu vững chắc",
      heroDesc: "Maia Care tự hào là người bạn đồng hành tin cậy của hàng ngàn gia đình. Chúng tôi thấu hiểu những vất vả và cả niềm hạnh phúc vô bờ trong hành trình làm mẹ, từ đó mang đến những dịch vụ chăm sóc sức khỏe toàn diện, an toàn và tận tâm nhất.",
      highlights: ["Chuẩn Y Khoa", "Chuyên Nghiệp", "Tận Tâm"],
      visionMissionTitle: "TẦM NHÌN & SỨ MỆNH",
      visionTitle: "Tầm nhìn",
      visionDesc: "Trở thành hệ thống chăm sóc sức khỏe mẹ và bé hàng đầu, mang lại sự an tâm và sức khỏe cho các gia đình.",
      missionTitle: "Sứ mệnh",
      missionDesc: "Mang đến sự chăm sóc toàn diện, an toàn và cá nhân hóa, phù hợp với nhu cầu riêng của từng mẹ và bé.",
      coreValuesTitle: "GIÁ TRỊ CỐT LÕI",
      policyTitle: "CHÍNH SÁCH & CAM KẾT",
      policySubheading: "An tâm trong từng trải nghiệm chăm sóc",
      policies: [
        "An toàn cho mẹ và bé",
        "Quy trình chăm sóc rõ ràng",
        "Nhân viên được đào tạo",
        "Tôn trọng nhu cầu riêng của từng gia đình",
        "Minh bạch trong dịch vụ",
        "Luôn lắng nghe và điều chỉnh"
      ],
      teamTitle: "ĐỘI NGŨ CHUYÊN MÔN",
      teamIntro: "Đội ngũ chuyên viên được đào tạo bài bản, có kiến thức chuyên sâu về chăm sóc mẹ và bé, luôn làm việc bằng cả trái tim và sự tận tâm.",
      quote: "Sự an tâm và sức khỏe của bạn là niềm hạnh phúc lớn nhất của chúng tôi.",
      ctaTitle: "BẠN ĐÃ SẴN SÀNG TRẢI NGHIỆM?",
      ctaDesc: "Hãy để Maia Care đồng hành cùng bạn trong hành trình làm mẹ tuyệt vời này.",
      btnConsult: "Nhận tư vấn ngay",
      btnViewService: "Xem chi tiết dịch vụ"
    },
    service: {
      badge: "DỊCH VỤ",
      title: "Dịch vụ chăm sóc mẹ & bé",
      subtitle: "Những dịch vụ được thiết kế riêng, giúp mẹ và bé được chăm sóc toàn diện, an toàn và phù hợp trong từng giai đoạn.",
      pricePrefix: "Giá: ",
      priceSuffix: "/buổi",
      items: [
        {
          id: 1,
          title: "Chăm sóc mẹ sau sinh",
          price: "320,000đ",
          img: "https://placehold.co/400x350/F7F1E8/8eaa8e?text=Chăm+sóc+mẹ",
        },
        {
          id: 2,
          title: "Dịch vụ chăm sóc em bé",
          price: "390,000đ",
          img: "https://placehold.co/400x350/E2CFC2/7a6b5a?text=Chăm+sóc+bé",
        },
        {
          id: 3,
          title: "Combo chăm sóc mẹ và bé",
          price: "650,000đ",
          img: "https://placehold.co/400x350/A8BFA8/ffffff?text=Combo",
        },
        {
          id: 4,
          title: "Gói tặng kèm tư vấn dinh dưỡng",
          price: "200,000đ",
          img: "https://placehold.co/400x350/c4b5a5/ffffff?text=Dinh+dưỡng",
        },
      ]
    },
    contact: {
      title: "LIÊN HỆ VỚI MAIA CARE",
      subtitle:
        "Maia Care luôn sẵn sàng lắng nghe, tư vấn và đồng hành cùng mẹ trong hành trình chăm sóc sức khỏe sau sinh.",
      cards: {
        phone: {
          title: "ĐIỆN THOẠI",
          value: "0854334136",
          note: "(8:00 – 20:00 mỗi ngày)",
        },
        address: {
          title: "ĐỊA CHỈ",
          value:
            "574 Nguyễn Đình Chiểu, phường Bàn Cờ, TP.HCM",
        },
        zalo: {
          title: "ZALO",
          value: "0854334136",
          note: "(Nhấn để chat qua Zalo)",
        },
        facebook: {
          title: "FANPAGE",
          value: "Maia Care",
          note: "Chăm sóc mẹ và bé sau sinh",
        },
        email: { title: "EMAIL", value: "hello@maiacare.vn" },
        hours: {
          title: "GIỜ LÀM VIỆC",
          value: "Thứ 2 – Chủ nhật",
          note: "8:00 – 20:00",
        },
      },
      location: {
        heading: "VỊ TRÍ CỦA MAIA CARE",
        directionsBtn: "CHỈ ĐƯỜNG",
      },
    },
    booking: {
      heroTitle: "ĐẶT LỊCH DỊCH VỤ",
      heroDesc:
        "Vui lòng điền thông tin và chọn thời gian phù hợp. Chúng tôi sẽ xác nhận lịch hẹn của bạn trong thời gian sớm nhất.",
      selectServiceLabel: "Chọn tên dịch vụ",
      selectServicePlaceholder: "Chọn dịch vụ",
      services: [
        "Dịch vụ cho bé",
        "Dịch vụ cho mẹ bầu",
        "Dịch vụ cho mẹ sau sinh",
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
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
        "Chủ Nhật",
      ],
      timeLabel: "Chọn giờ",
      timePlaceholder: "Chọn thời gian",
      workingHours:
        "Thời gian làm việc: 08:00 - 20:00 (Tất cả các ngày trong tuần)",
      submitButton: "Xác nhận đặt lịch",
      statusLoading: "Đang gửi...",
      statusSuccess: "Đặt lịch thành công! MAIA CARE sẽ liên hệ với bạn để xác nhận lịch.",
      statusError: "Không thể gửi thông tin đặt lịch. Vui lòng thử lại sau.",
      statusRequired: "Vui lòng điền đầy đủ các thông tin bắt buộc (*).",
      privacyText: "Thông tin của bạn được bảo mật tuyệt đối",
    },
    serviceDetail: {
      notFoundTitle: "Không tìm thấy dịch vụ",
      notFoundDesc: "Dịch vụ bạn đang tìm không tồn tại hoặc đã ngừng cung cấp.",
      backToService: "Quay lại trang Dịch vụ",
      time: "Thời gian:",
      location: "Địa điểm:",
      package: "Gói dịch vụ:",
      schedule: "Lịch hẹn:",
      bookNow: "Đặt lịch ngay",
      tabDesc: "Mô tả dịch vụ",
      tabProcess: "Quy trình thực hiện",
      tabFaq: "Câu hỏi thường gặp",
      aboutService: "Về dịch vụ",
      benefits: "Lợi ích nổi bật",
      viewAll: "Xem tất cả dịch vụ"
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
