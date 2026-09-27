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
            {
              name: "Basic Baby Care Package",
              price: "2,790,000đ",
              unit: "/5 sessions",
            },
            {
              name: "Comprehensive Baby Care Package",
              price: "5,490,000đ",
              unit: "/10 sessions",
            },
          ],
        },
        pregnant: {
          title: "Mother & Baby Care\nPackages",
          items: [
            { name: "“Healthy Mom - Happy Baby” Package", price: "790,000đ" },
            {
              name: "“Mom’s Recovery - Healthy Baby” Package",
              price: "990,000đ",
            },
            {
              name: "“Complete Mother & Baby Care” Package",
              price: "1,190,000đ",
            },
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
            {
              name: "Basic Mother Care Package",
              price: "2,990,000đ",
              unit: "/5 sessions",
            },
            {
              name: "Comprehensive Mother Care Package",
              price: "6,890,000đ",
              unit: "/10 sessions",
            },
          ],
        },
        complex: {
          title: "Complimentary “Nutrition\nConsultation” Packages",
          items: [
            {
              name: "Postpartum Nutrition Consultation for Mothers",
              price: "299,000đ",
            },
            {
              name: "Postpartum Nutrition Meal Plan",
              price: "799,000đ",
              unit: "/month",
            },
            {
              name: "Baby Nutrition Consultation & Weaning Meal Plan",
              price: "599,000đ",
              unit: "/month",
            },
            {
              name: "“Healthy Mom - Happy Eater” Nutrition Package",
              price: "1,099,000đ",
              unit: "/month",
            },
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
      teamTitle: "OUR PROFESSIONAL TEAM",
      teamIntro:
        "Our Maia Care team is built with a specialized focus on maternal and baby care. Our staff are professionally trained and assigned according to their expertise and experience, providing safe, attentive, and consistent care for every family.",
      teamDetailButton: "View Details",
      quote: "Your peace of mind and health are our greatest happiness.",
      ctaTitle: "READY TO EXPERIENCE?",
      ctaDesc:
        "Let Maia Care accompany you on this wonderful journey of motherhood.",
      btnConsult: "Get Consultation",
      btnViewService: "View Services",
    },
    team: {
      pageTitle: "OUR PROFESSIONAL TEAM",
      pageIntro:
        "Our Maia Care team is built with a combination of nursing expertise, maternal & baby care staff, and customer service, all working towards the goal of providing safe, dedicated, and consistent home care services.",
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
          value: "574 Nguyễn Đình Chiểu Street, Bàn Cờ Ward, Ho Chi Minh City",
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
      notFoundTitle: "Service not found",
      notFoundDesc:
        "The service you are looking for does not exist or has been discontinued.",
      backToService: "Back to Services",
      time: "Duration:",
      location: "Location:",
      package: "Package:",
      schedule: "Schedule:",
      bookNow: "Book Now",
      tabDesc: "Description",
      tabProcess: "Process",
      tabFaq: "FAQ",
      aboutService: "About this service",
      benefits: "Key Benefits",
      viewAll: "View all services",
    },
    comments: {
      title: "Comments",
      subtitle: "Share your experience with this service",
      writeComment: "Write a comment...",
      submit: "Submit",
      reply: "Reply",
      submitting: "Submitting...",
      emptyState: "No comments yet. Be the first to share your experience!",
      loadError: "Failed to load comments. Please try again.",
      retry: "Retry",
      noEntity: "Cannot load comment information.",
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
            {
              name: "Kiểm tra và tư vấn sức khỏe",
              price: "300,000đ",
              img: "/service-img-5.png",
            },
            {
              name: "Tắm thủy liệu",
              price: "350,000đ",
              img: "/service-img-6.png",
            },
            {
              name: "Massage cho bé",
              price: "200,000đ",
              img: "/service-img-7.png",
            },
            {
              name: "Chăm sóc bé tại nhà 4 giờ",
              price: "450,000đ",
              img: "/service-img-8.png",
            },
            {
              name: "Chăm sóc bé tại nhà 8 giờ",
              price: "850,000đ",
              img: "/service-img-8.png",
            },
            {
              name: "Gói chăm sóc bé cơ bản",
              price: "2,790,000đ",
              unit: "/5 buổi",
              img: "/service-img-9.png",
            },
            {
              name: "Gói chăm sóc bé toàn diện",
              price: "5,490,000đ",
              unit: "/10 buổi",
              img: "/service-img-9.png",
            },
          ],
        },
        pregnant: {
          title: "Combo chăm sóc\nmẹ và bé",
          items: [
            {
              name: "Combo “Mẹ khỏe - Bé yêu”",
              price: "790,000đ",
              img: "/service-img-10.png",
            },
            {
              name: "Combo “Mẹ phục hồi - Bé khỏe”",
              price: "990,000đ",
              img: "/service-img-11.png",
            },
            {
              name: "Combo “Mẹ và bé toàn diện”",
              price: "1,190,000đ",
              img: "/service-img-12.png",
            },
            {
              name: "Combo “Đồng hành sau sinh”",
              price: "1,390,000đ",
              img: "/service-img-13.png",
            },
          ],
        },
        postpartum: {
          title: "Dịch vụ chăm sóc mẹ\nsau sinh",
          items: [
            {
              name: "Massage bụng y khoa",
              price: "350,000đ",
              img: "/service-img-1.png",
            },
            {
              name: "Massage lưng thư giãn",
              price: "300,000đ",
              img: "/service-img-2.png",
            },
            {
              name: "Massage hỗ trợ thông tắc tia sữa",
              price: "550,000đ",
              img: "/service-img-3.png",
            },
            {
              name: "Chăm sóc vết khâu, vết mổ sau sinh",
              price: "350,000đ",
              img: "/service-img-4.png",
            },
            {
              name: "Gói chăm sóc mẹ cơ bản",
              price: "2,990,000đ",
              unit: "/5 buổi",
              img: "/service-img-1.png",
            },
            {
              name: "Gói chăm sóc mẹ toàn diện",
              price: "6,890,000đ",
              unit: "/10 buổi",
              img: "/service-img-1.png",
            },
          ],
        },
        complex: {
          title: "Gói tặng kèm “tư vấn\ndinh dưỡng”",
          items: [
            {
              name: "Tư vấn dinh dưỡng cho mẹ sau sinh",
              price: "299,000đ",
              img: "/service-img-14.png",
            },
            {
              name: "Gói thực đơn dinh dưỡng cho mẹ sau sinh",
              price: "799,000đ",
              unit: "/tháng",
              img: "/service-img-15.png",
            },
            {
              name: "Tư vấn dinh dưỡng và thực đơn ăn dặm cho bé",
              price: "599,000đ",
              unit: "/tháng",
              img: "/service-img-16.png",
            },
            {
              name: "Gói dinh dưỡng “Mẹ khỏe - Bé ăn ngon”",
              price: "1,099,000đ",
              unit: "/tháng",
              img: "/service-img-17.png",
            },
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
      heroDesc:
        "Maia Care tự hào là người bạn đồng hành tin cậy của hàng ngàn gia đình. Chúng tôi thấu hiểu những vất vả và cả niềm hạnh phúc vô bờ trong hành trình làm mẹ, từ đó mang đến những dịch vụ chăm sóc sức khỏe toàn diện, an toàn và tận tâm nhất.",
      highlights: ["Chuẩn Y Khoa", "Chuyên Nghiệp", "Tận Tâm"],
      visionMissionTitle: "TẦM NHÌN & SỨ MỆNH",
      visionTitle: "Tầm nhìn",
      visionDesc:
        "Trở thành hệ thống chăm sóc sức khỏe mẹ và bé hàng đầu, mang lại sự an tâm và sức khỏe cho các gia đình.",
      missionTitle: "Sứ mệnh",
      missionDesc:
        "Mang đến sự chăm sóc toàn diện, an toàn và cá nhân hóa, phù hợp với nhu cầu riêng của từng mẹ và bé.",
      coreValuesTitle: "GIÁ TRỊ CỐT LÕI",
      policyTitle: "CHÍNH SÁCH & CAM KẾT",
      policySubheading: "An tâm trong từng trải nghiệm chăm sóc",
      policies: [
        "An toàn cho mẹ và bé",
        "Quy trình chăm sóc rõ ràng",
        "Nhân viên được đào tạo",
        "Tôn trọng nhu cầu riêng của từng gia đình",
        "Minh bạch trong dịch vụ",
        "Luôn lắng nghe và điều chỉnh",
      ],
      teamTitle: "ĐỘI NGŨ CHUYÊN MÔN",
      teamIntro:
        "Đội ngũ Maia Care được xây dựng với định hướng chuyên môn hóa trong chăm sóc mẹ và bé. Các nhân viên được đào tạo bài bản và phân công theo chuyên môn, kinh nghiệm phù hợp, nhằm mang đến quy trình chăm sóc an toàn, tận tâm và nhất quán cho từng gia đình.",
      teamDetailButton: "Chi tiết",
      quote:
        "Sự an tâm và sức khỏe của bạn là niềm hạnh phúc lớn nhất của chúng tôi.",
      ctaTitle: "BẠN ĐÃ SẴN SÀNG TRẢI NGHIỆM?",
      ctaDesc:
        "Hãy để Maia Care đồng hành cùng bạn trong hành trình làm mẹ tuyệt vời này.",
      btnConsult: "Nhận tư vấn ngay",
      btnViewService: "Xem chi tiết dịch vụ",
    },
    team: {
      pageTitle: "ĐỘI NGŨ CHUYÊN MÔN",
      pageIntro:
        "Đội ngũ Maia Care được xây dựng với sự kết hợp giữa chuyên môn điều dưỡng, đội ngũ chăm sóc mẹ & bé và chăm sóc khách hàng, cùng hướng đến mục tiêu mang đến dịch vụ chăm sóc tại nhà an toàn, tận tâm và nhất quán.",
    },
    service: {
      badge: "DỊCH VỤ",
      title: "Dịch vụ chăm sóc mẹ & bé",
      subtitle:
        "Những dịch vụ được thiết kế riêng, giúp mẹ và bé được chăm sóc toàn diện, an toàn và phù hợp trong từng giai đoạn.",
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
      ],
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
          value: "574 Nguyễn Đình Chiểu, phường Bàn Cờ, TP.HCM",
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
      statusSuccess:
        "Đặt lịch thành công! MAIA CARE sẽ liên hệ với bạn để xác nhận lịch.",
      statusError: "Không thể gửi thông tin đặt lịch. Vui lòng thử lại sau.",
      statusRequired: "Vui lòng điền đầy đủ các thông tin bắt buộc (*).",
      privacyText: "Thông tin của bạn được bảo mật tuyệt đối",
    },
    serviceDetail: {
      notFoundTitle: "Không tìm thấy dịch vụ",
      notFoundDesc:
        "Dịch vụ bạn đang tìm không tồn tại hoặc đã ngừng cung cấp.",
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
      viewAll: "Xem tất cả dịch vụ",
    },
    comments: {
      title: "Bình luận",
      subtitle: "Chia sẻ trải nghiệm của bạn về dịch vụ này",
      writeComment: "Viết bình luận...",
      submit: "Gửi bình luận",
      reply: "Trả lời",
      submitting: "Đang gửi...",
      emptyState:
        "Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ trải nghiệm!",
      loadError: "Không thể tải bình luận. Vui lòng thử lại.",
      retry: "Thử lại",
      noEntity: "Không thể tải thông tin bình luận.",
    },
  },
};

const teamMembers = [
  {
    id: "nguyen-thuy-linh",
    image: "/1.jpg",
    name: "Nguyễn Thùy Linh",
    position: {
      vi: "PGS. TS. - Trưởng phòng Chuyên môn",
      en: "Head of Professional Department",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: { vi: "PGS. TS. Sản phụ khoa", en: "Bachelor of Nursing" },
    experience: {
      vi: "10 năm trong lĩnh vực chăm sóc sức khỏe mẹ và bé",
      en: "8 years in maternal and child healthcare",
    },
    certificates: {
      vi: [
        "Basic Life Support (BLS) – American Heart Association",
        "Đào tạo chuyên sâu về Chăm sóc sức khỏe Mẹ & Bé",
        "Đào tạo Tư vấn nuôi con bằng sữa mẹ",
        "Đào tạo Kiểm soát nhiễm khuẩn trong chăm sóc y tế"
      ],
      en: [
        "Basic Life Support (BLS) – American Heart Association",
        "Advanced Training in Maternal & Child Healthcare",
        "Breastfeeding Consultation Training",
        "Infection Control in Healthcare Training"
      ],
    },
    role: {
      vi: "Xây dựng, triển khai và kiểm soát quy trình chuyên môn; đào tạo đội ngũ Điều dưỡng và nhân viên chăm sóc; giám sát chất lượng dịch vụ và hỗ trợ xử lý các vấn đề chuyên môn.",
      en: "Developing, implementing, and controlling professional processes; training nursing and care staff; monitoring service quality and assisting in resolving professional issues.",
    },
  },
  {
    id: "tran-ngoc-han",
    image: "/2.jpg",
    name: "Trần Ngọc Hân",
    position: {
      vi: "Điều dưỡng – Đào tạo & Tư vấn chăm sóc mẹ",
      en: "Nurse - Maternal Care Training & Consultation",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: { vi: "Cử nhân Điều dưỡng", en: "Bachelor of Nursing" },
    experience: {
      vi: "7 năm trong lĩnh vực chăm sóc mẹ sau sinh",
      en: "7 years in postpartum maternal care",
    },
    certificates: {
      vi: [
        "Basic Life Support (BLS) – American Heart Association",
        "Đào tạo Chăm sóc mẹ sau sinh",
        "Đào tạo Tư vấn nuôi con bằng sữa mẹ",
        "Đào tạo Dinh dưỡng cho mẹ và trẻ nhỏ"
      ],
      en: [
        "Basic Life Support (BLS) – American Heart Association",
        "Advanced Training in Maternal & Child Healthcare",
        "Breastfeeding Consultation Training",
        "Infection Control in Healthcare Training"
      ],
    },
    expertise: {
      vi: ["Chăm sóc mẹ sau sinh", "Dinh dưỡng mẹ", "Hỗ trợ phục hồi sau sinh"],
      en: [
        "Postpartum maternal care",
        "Maternal nutrition",
        "Postpartum recovery support",
      ],
    },
    role: {
      vi: "Đào tạo nghiệp vụ chăm sóc mẹ sau sinh cho đội ngũ nhân viên; tư vấn dinh dưỡng và hướng dẫn khách hàng về chăm sóc mẹ trong giai đoạn hậu sản.",
      en: "Providing professional postpartum care training for staff; offering nutrition consultation and guiding clients on maternal care during the postpartum period.",
    },
  },
  {
    id: "le-minh-anh",
    image: "/3.jpg",
    name: "Lê Minh Anh",
    position: {
      vi: "Điều dưỡng – Đào tạo & Tư vấn chăm sóc trẻ",
      en: "Nurse - Child Care Training & Consultation",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: { vi: "Cử nhân Điều dưỡng", en: "Bachelor of Nursing" },
    experience: {
      vi: "6 năm trong lĩnh vực chăm sóc trẻ sơ sinh và trẻ nhỏ",
      en: "6 years in infant and toddler care",
    },
    certificates: {
      vi: [
        "Basic Life Support (BLS) – American Heart Association",
        "Đào tạo Chăm sóc trẻ sơ sinh",
        "Đào tạo Tư vấn nuôi con bằng sữa mẹ",
        "Đào tạo Dinh dưỡng trẻ nhỏ"
      ],
      en: [
        "Basic Life Support (BLS) – American Heart Association",
        "Advanced Training in Maternal & Child Healthcare",
        "Breastfeeding Consultation Training",
        "Infection Control in Healthcare Training"
      ],
    },
    expertise: {
      vi: [
        "Chăm sóc trẻ sơ sinh",
        "Vệ sinh trẻ",
        "Dinh dưỡng và chăm sóc trẻ nhỏ",
      ],
      en: [
        "Newborn care",
        "Child hygiene",
        "Infant and toddler nutrition and care",
      ],
    },
    role: {
      vi: "Đào tạo đội ngũ chăm sóc về quy trình chăm sóc trẻ; tư vấn dinh dưỡng và hướng dẫn phụ huynh các nguyên tắc chăm sóc trẻ an toàn tại nhà.",
      en: "Training the care team on child care processes; providing nutrition consultation and guiding parents on safe home child care principles.",
    },
  },
  {
    id: "truong-minh-thu",
    image: "/8.png",
    name: "Trương Minh Thư",
    position: {
      vi: "Chuyên viên Chăm sóc Khách hàng",
      en: "Customer Care Specialist",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: {
      vi: "Cử nhân Quản trị Kinh doanh",
      en: "Bachelor of Business Administration",
    },
    experience: {
      vi: "4 năm trong lĩnh vực dịch vụ và chăm sóc khách hàng",
      en: "4 years in customer service and care",
    },
    skills: {
      vi: [
        "Nghiệp vụ Chăm sóc khách hàng",
        "Tư vấn dịch vụ",
        "Quy trình tiếp nhận và xử lý phản hồi",
        "Kiến thức cơ bản về Chăm sóc Mẹ & Bé"
      ],
      en: [
        "Customer Care Operations",
        "Service Consultation",
        "Feedback Handling and Problem-Solving",
        "Basic Maternal & Baby Care Knowledge"
      ],
    },
    expertise: {
      vi: ["Tư vấn dịch vụ", "Quản lý lịch hẹn", "Chăm sóc khách hàng"],
      en: ["Service consultation", "Appointment management", "Customer care"],
    },
    role: {
      vi: "Tiếp nhận nhu cầu, tư vấn dịch vụ, hỗ trợ đặt lịch, theo dõi quá trình sử dụng dịch vụ, tiếp nhận phản hồi và duy trì mối quan hệ với khách hàng.",
      en: "Receiving requests, consulting services, assisting with booking, tracking service usage, handling feedback, and maintaining customer relationships.",
    },
  },
  {
    id: "pham-khanh-vy",
    image: "/4.jpg",
    name: "Phạm Khánh Vy",
    position: {
      vi: "Chuyên viên Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Specialist",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: {
      vi: "Chứng chỉ đào tạo Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Training Certificate",
    },
    experience: { vi: "5 năm", en: "5 years" },
    skills: {
      vi: [
        "Chương trình đào tạo Chăm sóc Mẹ & Bé",
        "Đào tạo Chăm sóc mẹ sau sinh",
        "Đào tạo Chăm sóc trẻ sơ sinh",
        "CPR & First Aid"
      ],
      en: [
        "Maternal & Baby Care Training Program",
        "Postpartum Maternal Care Training",
        "Newborn Care Training",
        "CPR & First Aid"
      ],
    },
    expertise: {
      vi: ["Chăm sóc mẹ sau sinh và trẻ sơ sinh"],
      en: ["Postpartum maternal and newborn care"],
    },
    role: {
      vi: "Trực tiếp thực hiện các liệu trình chăm sóc mẹ và bé tại nhà theo quy trình chuyên môn của Maia Care.",
      en: "Directly performing home maternal and baby care therapies according to Maia Care's professional procedures.",
    },
  },
  {
    id: "vo-hoang-yen",
    image: "/5.jpg",
    name: "Võ Hoàng Yến",
    position: {
      vi: "Chuyên viên Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Specialist",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: {
      vi: "Chứng chỉ đào tạo Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Training Certificate",
    },
    experience: { vi: "6 năm", en: "6 years" },
    skills: {
      vi: [
        "Chương trình đào tạo Chăm sóc Mẹ & Bé",
        "Chăm sóc trẻ sơ sinh",
        "Vệ sinh & tắm trẻ",
        "CPR & First Aid"
      ],
      en: [
        "Maternal & Baby Care Training Program",
        "Newborn Care Training",
        "Child Hygiene",
        "CPR & First Aid"
      ],
    },
    expertise: {
      vi: ["Chăm sóc mẹ sau sinh", "Chăm sóc trẻ sơ sinh"],
      en: ["Postpartum maternal care", "Newborn care"],
    },
    role: {
      vi: "Thực hiện dịch vụ chăm sóc tại nhà và đảm bảo tuân thủ các tiêu chuẩn an toàn, vệ sinh trong từng buổi chăm sóc.",
      en: "Providing home care services and ensuring adherence to safety and hygiene standards in every care session.",
    },
  },
  {
    id: "dang-thu-ha",
    image: "/6.jpg",
    name: "Đặng Thu Hà",
    position: {
      vi: "Chuyên viên Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Specialist",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: {
      vi: "Chứng chỉ đào tạo Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Training Certificate",
    },
    experience: { vi: "4 năm", en: "4 years" },
    skills: {
      vi: [
        "Chương trình đào tạo Chăm sóc Mẹ & Bé",
        "Chăm sóc mẹ sau sinh",
        "Chăm sóc trẻ sơ sinh",
        "CPR & First Aid"
      ],
      en: [
        "Maternal & Baby Care Training Program",
        "Postpartum Maternal Care Training",
        "Newborn Care Training",
        "CPR & First Aid"
      ],
    },
    expertise: {
      vi: ["Chăm sóc trẻ sơ sinh và mẹ sau sinh"],
      en: ["Newborn and postpartum maternal care"],
    },
    role: {
      vi: "Trực tiếp cung cấp dịch vụ tại nhà, hỗ trợ gia đình chăm sóc mẹ và bé theo hướng dẫn chuyên môn.",
      en: "Directly providing home services, supporting families in caring for mothers and babies according to professional guidelines.",
    },
  },
  {
    id: "nguyen-ngoc-mai",
    image: "/7.jpg",
    name: "Nguyễn Ngọc Mai",
    position: {
      vi: "Chuyên viên Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Specialist",
    },
    employmentType: { vi: "Toàn thời gian", en: "Full-time" },
    degree: {
      vi: "Chứng chỉ đào tạo Chăm sóc Mẹ & Bé",
      en: "Maternal & Baby Care Training Certificate",
    },
    experience: { vi: "5 năm", en: "5 years" },
    skills: {
      vi: [
        "Chương trình đào tạo Chăm sóc Mẹ & Bé",
        "Chăm sóc mẹ sau sinh",
        "Chăm sóc trẻ sơ sinh",
        "CPR & First Aid"
      ],
      en: [
        "Maternal & Baby Care Training Program",
        "Postpartum Maternal Care Training",
        "Newborn Care Training",
        "CPR & First Aid"
      ],
    },
    expertise: {
      vi: ["Chăm sóc hậu sản và trẻ sơ sinh"],
      en: ["Postpartum and newborn care"],
    },
    role: {
      vi: "Thực hiện các gói chăm sóc tại nhà, phối hợp với Điều dưỡng khi cần hỗ trợ chuyên môn và ghi nhận tình trạng của khách hàng sau mỗi buổi chăm sóc.",
      en: "Performing home care packages, coordinating with nurses when professional support is needed, and recording the client's condition after each care session.",
    },
  },
  
];

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
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
        t,
        language: lang,
        setLanguage: setLang,
        teamMembers,
      }}
    >
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
