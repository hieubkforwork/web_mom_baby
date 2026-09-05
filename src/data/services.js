// services.js — Static service data for Maia Care

export const serviceGroups = {
  postpartum: {
    groupTitle: "Dịch vụ chăm sóc mẹ sau sinh",
    groupTitleEn: "Postpartum Mother Care Services",
    img: "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Mother+Care",
    thumbs: [
      "https://placehold.co/200x160/F7F1E8/8eaa8e?text=Thumb+1",
      "https://placehold.co/200x160/E2CFC2/8eaa8e?text=Thumb+2",
      "https://placehold.co/200x160/A8BFA8/ffffff?text=Thumb+3",
    ],

    items: [
      {
        id: 0,
        name: "Massage bụng y khoa",
        nameEn: "Medical Abdominal Massage",
        price: "350,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "1,650,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "3,200,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "60 – 90 phút / buổi",
        durationEn: "60 – 90 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Linh hoạt theo nhu cầu",
        packageInfoEn: "Flexible according to needs",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",
        shortDescription:
          "Massage bụng y khoa giúp mẹ sau sinh phục hồi thành bụng nhanh hơn, giảm mỡ bụng, cải thiện tuần hoàn máu và hỗ trợ tử cung co hồi về kích thước bình thường.",
        shortDescriptionEn:
          "Medical abdominal massage helps postpartum mothers recover their stomachs faster, reduce belly fat, improve blood circulation, and support the uterus returning to its normal size.",
        images: [
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Massage+Bụng",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Chăm+sóc+Mẹ",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Phục+hồi+sau+sinh",
        ],

        features: [
          { icon: "leaf", label: "An toàn", labelEn: "Safe" },
          { icon: "heart", label: "Tận tâm", labelEn: "Dedicated" },
          { icon: "user", label: "Cá nhân hóa", labelEn: "Personalized" },
          { icon: "star", label: "Chuyên nghiệp", labelEn: "Professional" },
        ],

        description:
          "Massage bụng y khoa là dịch vụ chuyên biệt được thiết kế dành riêng cho các mẹ sau sinh. Với kỹ thuật massage chuyên sâu theo quy trình y khoa, dịch vụ giúp kích thích co bóp tử cung, đẩy nhanh quá trình hồi phục, giảm thiểu tình trạng sa tử cung và tăng cường lưu thông máu vùng bụng. Đội ngũ chuyên viên được đào tạo bài bản, đảm bảo thực hiện đúng kỹ thuật và phù hợp với từng tình trạng cụ thể của mẹ — bao gồm cả mẹ sinh thường lẫn mẹ sinh mổ (sau khi vết mổ lành hẳn).",
        descriptionEn:
          "Medical abdominal massage is a specialized service designed specifically for postpartum mothers. With deep massage techniques following medical procedures, the service helps stimulate uterine contractions, accelerate recovery, minimize uterine prolapse, and enhance blood circulation in the abdominal area. The team of trained professionals ensures proper technique and suitability for each mother's specific condition — including both vaginal and cesarean deliveries (after the incision has fully healed).",
        process: [
          {
            step: "01",
            title: "Tư vấn tình trạng",
            detail:
              "Chuyên viên trao đổi với mẹ về tình trạng sức khỏe, loại sinh (thường/mổ), ngày sinh và các vấn đề mẹ đang gặp phải.",
          },
          {
            step: "02",
            title: "Chuẩn bị dụng cụ & không gian",
            detail:
              "Chuẩn bị dầu massage an toàn, khăn ấm và thiết lập không gian yên tĩnh, thoải mái cho mẹ.",
          },
          {
            step: "03",
            title: "Thực hiện massage",
            detail:
              "Áp dụng kỹ thuật massage vùng bụng theo quy trình y khoa, điều chỉnh lực phù hợp với cảm giác và tình trạng của mẹ.",
          },
          {
            step: "04",
            title: "Tư vấn sau buổi chăm sóc",
            detail:
              "Hướng dẫn mẹ các bài tập nhẹ tại nhà, chế độ ăn uống và lịch theo dõi để duy trì hiệu quả tốt nhất.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Consultation",
            detail:
              "Our professionals will discuss the mother's health condition, delivery type (vaginal or cesarean), due date, and any concerns she may have.",
          },
          {
            step: "02",
            title: "Preparation",
            detail:
              "We prepare safe massage oils, warm towels, and create a quiet, comfortable environment for the mother.",
          },
          {
            step: "03",
            title: "Massage Implementation",
            detail:
              "We apply medical-grade abdominal massage techniques, adjusting pressure according to the mother's comfort and condition.",
          },
          {
            step: "04",
            title: "Post-Session Guidance",
            detail:
              "We provide guidance on gentle exercises at home, dietary recommendations, and follow-up schedules to maintain optimal results.",
          },
        ],
        benefits: [
          "Hỗ trợ tử cung co hồi nhanh hơn",
          "Giảm mỡ bụng sau sinh hiệu quả",
          "Cải thiện tuần hoàn máu vùng bụng",
          "Giảm căng thẳng và mệt mỏi sau sinh",
          "An toàn cho cả mẹ sinh thường và sinh mổ",
          "Thực hiện tại nhà, tiện lợi cho mẹ",
        ],
        benefitsEn: [
          "Supports faster uterine contraction recovery",
          "Effectively reduces postpartum belly fat",
          "Improves blood circulation in the abdominal area",
          "Reduces stress and fatigue after childbirth",
          "Safe for both vaginal and cesarean deliveries",
          "Convenient at-home service for mothers",
        ],

        faqs: [
          {
            question: "Dịch vụ kéo dài bao lâu?",
            answer:
              "Mỗi buổi massage bụng kéo dài từ 60 đến 90 phút tùy theo tình trạng và nhu cầu của mẹ.",
          },
          {
            question: "Mẹ sinh mổ có thể sử dụng dịch vụ không?",
            answer:
              "Có thể. Tuy nhiên, với mẹ sinh mổ, dịch vụ chỉ được thực hiện sau khi vết mổ đã lành hoàn toàn (thông thường sau 6–8 tuần). Chuyên viên sẽ kiểm tra kỹ trước khi bắt đầu.",
          },
          {
            question: "Có thể chăm sóc tại nhà không?",
            answer:
              "Có. Maia Care cung cấp dịch vụ tại nhà trên toàn TP.HCM. Mẹ chỉ cần đặt lịch trước, chuyên viên sẽ đến tận nơi.",
          },
          {
            question: "Cần đặt lịch trước bao lâu?",
            answer:
              "Maia Care khuyến nghị đặt lịch trước ít nhất 24 giờ để đảm bảo có chuyên viên phù hợp và sắp xếp lịch tốt nhất cho mẹ.",
          },
        ],
        faqsEn: [
          {
            question: "How long does the service last?",
            answer:
              "Each abdominal massage session lasts between 60 to 90 minutes, depending on the mother's condition and needs.",
          },
          {
            question:
              "Can mothers who had a cesarean section use this service?",
            answer:
              "Yes, but the service can only be provided after the incision has fully healed (typically after 6–8 weeks). Our professionals will assess the mother's condition before starting the session.",
          },
          {
            question: "Can the service be provided at home?",
            answer:
              "Yes. Maia Care offers at-home services throughout Ho Chi Minh City. Mothers just need to schedule in advance, and our professionals will come to their location.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "Maia Care recommends booking at least 24 hours in advance to ensure we can accommodate your schedule and provide the best care possible.",
          },
        ],
      },

      {
        id: 1,
        name: "Massage lưng thư giãn",
        nameEn: "Relaxing Back Massage",
        price: "300,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "1,400,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "2,700,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Linh hoạt theo nhu cầu",
        packageInfoEn: "Flexible according to needs",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Massage lưng thư giãn giúp mẹ sau sinh giải tỏa căng thẳng, giảm đau nhức vùng lưng và vai do tư thế cho con bú, bế ẵm, đồng thời cải thiện chất lượng giấc ngủ.",

        shortDescriptionEn:
          "Relaxing back massage helps postpartum mothers relieve stress, reduce back and shoulder pain caused by breastfeeding and carrying the baby, and improve sleep quality.",

        images: [
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+Lưng",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Thư+giãn",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Chăm+sóc+mẹ",
        ],

        features: [
          { icon: "leaf", label: "An toàn", labelEn: "Safe" },
          { icon: "heart", label: "Thư giãn", labelEn: "Relaxing" },
          { icon: "user", label: "Cá nhân hóa", labelEn: "Personalized" },
          { icon: "star", label: "Chuyên nghiệp", labelEn: "Professional" },
        ],

        description:
          "Sau sinh, mẹ thường phải chịu áp lực lớn lên vùng lưng và vai do những thay đổi hormone, tư thế bế con, cho bú và thiếu ngủ. Dịch vụ massage lưng thư giãn tại Maia Care được thực hiện với kỹ thuật nhẹ nhàng, an toàn, kết hợp dầu thảo mộc thiên nhiên lành tính, giúp mẹ cảm thấy thư thái hoàn toàn sau mỗi buổi chăm sóc.",

        descriptionEn:
          "After childbirth, mothers often experience back and shoulder tension due to hormonal changes, breastfeeding positions, carrying the baby, and lack of sleep. Maia Care's relaxing back massage uses gentle and safe techniques combined with mild natural herbal massage oil to help mothers feel comfortable and relaxed after each session.",

        process: [
          {
            step: "01",
            title: "Trao đổi với mẹ",
            detail:
              "Chuyên viên lắng nghe tình trạng đau nhức cụ thể của mẹ để điều chỉnh kỹ thuật phù hợp.",
          },
          {
            step: "02",
            title: "Chuẩn bị",
            detail:
              "Chuẩn bị dầu massage thảo mộc, khăn ấm và không gian thoải mái.",
          },
          {
            step: "03",
            title: "Thực hiện massage",
            detail:
              "Massage vùng lưng, vai và cổ theo kỹ thuật chuyên nghiệp, điều chỉnh áp lực theo cảm giác của mẹ.",
          },
          {
            step: "04",
            title: "Hướng dẫn sau buổi",
            detail:
              "Tư vấn tư thế đúng khi cho con bú, bế ẵm và các bài tập giãn cơ nhẹ tại nhà.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Consultation",
            detail:
              "Our professional listens to the mother's specific areas of pain and adjusts the technique accordingly.",
          },
          {
            step: "02",
            title: "Preparation",
            detail:
              "We prepare herbal massage oil, warm towels, and a comfortable care environment.",
          },
          {
            step: "03",
            title: "Massage Session",
            detail:
              "We massage the back, shoulders, and neck using professional techniques and adjust pressure to the mother's comfort.",
          },
          {
            step: "04",
            title: "Post-Session Guidance",
            detail:
              "We provide guidance on proper breastfeeding and carrying positions, along with gentle stretching exercises for home.",
          },
        ],

        benefits: [
          "Giảm đau nhức lưng, vai và cổ hiệu quả",
          "Cải thiện chất lượng giấc ngủ",
          "Giảm căng thẳng, lo âu sau sinh",
          "Tăng cường lưu thông khí huyết",
          "Sử dụng dầu thảo mộc thiên nhiên, an toàn cho mẹ",
        ],
        benefitsEn: [
          "Effectively relieves back, shoulder, and neck pain",
          "Improves sleep quality",
          "Reduces postpartum stress and anxiety",
          "Promotes blood circulation",
          "Uses natural herbal oil suitable for mothers",
        ],

        faqs: [
          {
            question: "Dịch vụ phù hợp với mẹ sinh mổ không?",
            answer:
              "Massage lưng thư giãn phù hợp với cả mẹ sinh thường và sinh mổ vì không tác động lên vùng bụng.",
          },
          {
            question: "Mẹ đang cho con bú có sử dụng được không?",
            answer:
              "Hoàn toàn có thể. Các loại dầu massage được sử dụng đều an toàn cho mẹ đang cho con bú.",
          },
          {
            question: "Có thể thực hiện tại nhà không?",
            answer:
              "Có. Chuyên viên sẽ đến tận nhà theo lịch hẹn đã đặt trước.",
          },
          {
            question: "Nên thực hiện sau sinh bao lâu?",
            answer:
              "Có thể bắt đầu sớm nhất từ ngày thứ 3 sau sinh (với mẹ sinh thường) để giảm mệt mỏi và đau nhức.",
          },
        ],
        faqsEn: [
          {
            question:
              "Is this service suitable for mothers who had a cesarean section?",
            answer:
              "Yes. Relaxing back massage is suitable for both vaginal and cesarean delivery because it does not directly affect the abdominal area.",
          },
          {
            question: "Can breastfeeding mothers use this service?",
            answer:
              "Yes. The massage oils used are selected to be suitable for breastfeeding mothers.",
          },
          {
            question: "Can the service be provided at home?",
            answer:
              "Yes. Our professional can come to your home according to the appointment.",
          },
          {
            question: "How soon after childbirth can I have the massage?",
            answer:
              "For mothers with vaginal delivery, the service can generally begin from the third day after childbirth, subject to individual condition.",
          },
        ],
      },

      {
        id: 2,
        name: "Massage hỗ trợ thông tắc tia sữa",
        nameEn: "Breast Massage for Milk Duct Relief",
        price: "550,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price3d: "1,500,000đ",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "2,400,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Linh hoạt theo nhu cầu",
        packageInfoEn: "Flexible according to needs",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Dịch vụ massage hỗ trợ thông tắc tia sữa giúp mẹ giải quyết tình trạng căng tức ngực, tắc tia sữa và viêm tuyến vú — bảo vệ sức khỏe mẹ và duy trì nguồn sữa dồi dào cho bé.",

        shortDescriptionEn:
          "Breast massage for milk duct relief helps mothers manage breast fullness, blocked milk ducts, and breast inflammation while supporting breastfeeding.",

        images: [
          "https://placehold.co/800x600/F7F1E8/c89b8c?text=Tia+Sữa",
          "https://placehold.co/800x600/E2CFC2/8eaa8e?text=Chăm+sóc",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Sữa+mẹ",
        ],

        features: [
          { icon: "leaf", label: "An toàn", labelEn: "Safe" },
          { icon: "heart", label: "Nhẹ nhàng", labelEn: "Gentle" },
          { icon: "user", label: "Chuyên biệt", labelEn: "Specialized" },
          { icon: "star", label: "Hiệu quả", labelEn: "Effective" },
        ],

        description:
          "Tắc tia sữa là tình trạng phổ biến nhưng gây nhiều lo lắng và khó chịu cho mẹ sau sinh. Nếu không được xử lý kịp thời, có thể dẫn đến viêm tuyến vú nghiêm trọng. Đội ngũ chuyên viên Maia Care được đào tạo chuyên sâu về kỹ thuật massage thông tia sữa, giúp mẹ giải quyết hiệu quả tình trạng này một cách nhẹ nhàng và an toàn nhất.",

        descriptionEn:
          "Blocked milk ducts are common after childbirth and can cause significant discomfort and concern. If not addressed appropriately, they may contribute to breast inflammation. Maia Care professionals are trained in gentle breast massage techniques to support milk duct relief safely and comfortably.",

        process: [
          {
            step: "01",
            title: "Đánh giá tình trạng",
            detail:
              "Chuyên viên kiểm tra và đánh giá mức độ tắc, sưng để có phương án xử lý phù hợp.",
          },
          {
            step: "02",
            title: "Chườm ấm",
            detail:
              "Áp dụng khăn ấm để làm mềm vùng bị tắc và tăng tuần hoàn máu trước khi massage.",
          },
          {
            step: "03",
            title: "Massage thông tắc",
            detail:
              "Thực hiện kỹ thuật massage nhẹ nhàng, có chủ đích, hỗ trợ tia sữa thông suốt.",
          },
          {
            step: "04",
            title: "Hướng dẫn phòng ngừa",
            detail:
              "Tư vấn tư thế cho bú đúng, tần suất cho bú và các biện pháp phòng ngừa tái phát.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Condition Assessment",
            detail:
              "Our professional assesses the level of blockage and swelling to determine an appropriate approach.",
          },
          {
            step: "02",
            title: "Warm Compress",
            detail:
              "We use a warm compress to soften the affected area and promote circulation before massage.",
          },
          {
            step: "03",
            title: "Milk Duct Relief Massage",
            detail:
              "We perform gentle, targeted massage techniques to support milk flow.",
          },
          {
            step: "04",
            title: "Prevention Guidance",
            detail:
              "We advise on proper breastfeeding positions, feeding frequency, and ways to reduce the risk of recurrence.",
          },
        ],

        benefits: [
          "Giải quyết tắc tia sữa nhanh và hiệu quả",
          "Giảm đau, căng tức ngực",
          "Phòng ngừa viêm tuyến vú",
          "Duy trì và tăng nguồn sữa cho bé",
          "Kỹ thuật nhẹ nhàng, không gây đau",
        ],
        benefitsEn: [
          "Supports relief from blocked milk ducts",
          "Reduces breast pain and fullness",
          "Helps reduce the risk of breast inflammation",
          "Supports milk supply",
          "Gentle technique designed to minimize discomfort",
        ],

        faqs: [
          {
            question: "Khi nào nên gọi dịch vụ này?",
            answer:
              "Khi mẹ có cảm giác căng cứng, đau vùng ngực, sữa chảy ít hơn bình thường hoặc thấy cục cứng trong ngực.",
          },
          {
            question: "Cần bao nhiêu buổi để hết tắc?",
            answer:
              "Thông thường 1–2 buổi có thể giải quyết tắc tia sữa. Trường hợp nặng hơn có thể cần 3–4 buổi theo dõi.",
          },
          {
            question: "Có đau khi thực hiện không?",
            answer:
              "Chuyên viên luôn điều chỉnh lực phù hợp để giảm thiểu khó chịu. Mẹ có thể cảm thấy hơi tức ban đầu nhưng sẽ dễ chịu hơn sau mỗi buổi.",
          },
          {
            question: "Có cần đặt lịch gấp không?",
            answer:
              "Với tình trạng tắc tia sữa, mẹ nên đặt lịch ngay khi có triệu chứng. Maia Care hỗ trợ đặt lịch ưu tiên trong ngày.",
          },
        ],
        faqsEn: [
          {
            question: "When should I book this service?",
            answer:
              "Consider booking when you experience breast fullness, breast pain, reduced milk flow, or a firm area in the breast.",
          },
          {
            question: "How many sessions are needed?",
            answer:
              "Many mild cases may improve within 1–2 sessions. More persistent cases may require additional follow-up sessions.",
          },
          {
            question: "Is the massage painful?",
            answer:
              "Our professional adjusts the pressure to minimize discomfort. Some pressure may be felt initially, but the breast should become more comfortable as the session progresses.",
          },
          {
            question: "Should I book urgently?",
            answer:
              "If you experience symptoms of blocked milk ducts, it is best to seek appropriate support promptly. Maia Care can prioritize same-day appointments when available.",
          },
        ],
      },

      {
        id: 3,
        name: "Gói chăm sóc mẹ cơ bản",
        nameEn: "Postpartum Stitch and C-Section Incision Care",
        price: "350,000đ",
        priceUnit: "buổi",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "1,600,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "3,000,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "30 – 45 phút / buổi",
        durationEn: "30 – 45 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Linh hoạt theo nhu cầu",
        packageInfoEn: "Flexible according to needs",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Dịch vụ chăm sóc vết khâu tầng sinh môn và vết mổ lấy thai của Maia Care giúp vết thương mau lành, phòng ngừa nhiễm trùng và hỗ trợ mẹ phục hồi nhanh hơn.",
        shortDescriptionEn:
          "Maia Care's postpartum stitch and C-section incision care helps support wound healing, reduce infection risk, and promote a smoother recovery.",

        images: [
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Chăm+sóc+vết+thương",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Phục+hồi",
          "https://placehold.co/800x600/c4b5a5/ffffff?text=An+toàn",
        ],

        features: [
          { icon: "leaf", label: "Vô khuẩn", labelEn: "Sterile" },
          { icon: "heart", label: "Tận tâm", labelEn: "Dedicated" },
          { icon: "user", label: "Chuyên biệt", labelEn: "Specialized" },
          { icon: "star", label: "An toàn", labelEn: "Safe" },
        ],

        description:
          "Vết thương sau sinh cần được chăm sóc đúng cách để lành nhanh và tránh biến chứng. Maia Care cung cấp dịch vụ vệ sinh, thay băng và chăm sóc vết khâu tầng sinh môn (mẹ sinh thường) hoặc vết mổ bụng (mẹ sinh mổ) theo đúng quy trình vô khuẩn, sử dụng vật tư y tế đạt chuẩn.",

        descriptionEn:
          "Postpartum wounds require appropriate care to support healing and reduce complications. Maia Care provides cleaning, dressing changes, and care for perineal stitches after vaginal delivery or abdominal incisions after cesarean delivery, following appropriate sterile procedures and using standard medical supplies.",

        process: [
          {
            step: "01",
            title: "Kiểm tra vết thương",
            detail:
              "Đánh giá tình trạng vết khâu/vết mổ, phát hiện sớm dấu hiệu bất thường.",
          },
          {
            step: "02",
            title: "Vệ sinh và sát khuẩn",
            detail:
              "Vệ sinh vết thương theo quy trình vô khuẩn bằng dung dịch y tế phù hợp.",
          },
          {
            step: "03",
            title: "Thay băng",
            detail:
              "Thay băng sạch, thấm hút tốt để bảo vệ vết thương khỏi vi khuẩn và môi trường bên ngoài.",
          },
          {
            step: "04",
            title: "Theo dõi và tư vấn",
            detail:
              "Hướng dẫn mẹ cách tự chăm sóc tại nhà và dấu hiệu cần liên hệ ngay với y tế.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Wound Assessment",
            detail:
              "We assess the stitch or incision and check for early signs of abnormalities.",
          },
          {
            step: "02",
            title: "Cleaning and Antisepsis",
            detail:
              "We clean the wound using an appropriate medical solution and proper hygiene procedures.",
          },
          {
            step: "03",
            title: "Dressing Change",
            detail:
              "We apply a clean, absorbent dressing to help protect the wound from bacteria and the external environment.",
          },
          {
            step: "04",
            title: "Follow-Up and Guidance",
            detail:
              "We explain home-care steps and signs that require prompt medical attention.",
          },
        ],

        benefits: [
          "Vết thương lành nhanh, ít sẹo",
          "Phòng ngừa nhiễm trùng hiệu quả",
          "Chuyên viên được đào tạo bài bản",
          "Vật tư y tế đạt chuẩn, vô khuẩn",
          "Theo dõi liên tục trong quá trình hồi phục",
        ],
        benefitsEn: [
          "Supports faster healing and better scar care",
          "Helps reduce infection risk",
          "Professionally trained caregivers",
          "Standard medical supplies and sterile care",
          "Ongoing monitoring during recovery",
        ],

        faqs: [
          {
            question: "Bắt đầu chăm sóc vết mổ sau bao lâu?",
            answer:
              "Thông thường bắt đầu chăm sóc sau khi xuất viện, khoảng 3–5 ngày sau sinh mổ tùy chỉ định của bác sĩ.",
          },
          {
            question: "Cần bao nhiêu buổi chăm sóc?",
            answer:
              "Tùy tình trạng mỗi người, thông thường 5–10 buổi đến khi vết thương lành hoàn toàn.",
          },
          {
            question: "Có cần mang theo vật tư y tế không?",
            answer:
              "Không cần. Chuyên viên Maia Care mang đầy đủ vật tư y tế cần thiết theo.",
          },
          {
            question: "Làm thế nào biết vết mổ đang bình thường?",
            answer:
              "Chuyên viên sẽ hướng dẫn các dấu hiệu bình thường và bất thường sau mỗi buổi chăm sóc.",
          },
        ],
        faqsEn: [
          {
            question: "When should C-section incision care begin?",
            answer:
              "Care commonly begins after discharge, often around 3–5 days after a C-section, depending on the doctor's instructions.",
          },
          {
            question: "How many sessions are needed?",
            answer:
              "The number depends on the individual's condition. A typical course may involve 5–10 sessions until the wound has healed.",
          },
          {
            question: "Do I need to provide medical supplies?",
            answer:
              "No. Maia Care professionals bring the necessary medical supplies.",
          },
          {
            question:
              "How can I tell whether the incision is healing normally?",
            answer:
              "Our professional explains normal and warning signs to watch for after each care session.",
          },
        ],
      },

      {
        id: 4,
        name: "Gói chăm sóc mẹ cơ bản",
        nameEn: "Basic Postpartum Care Package",

        price: "2,990,000đ",
        priceUnit: "5 buổi",
        priceUnitEn: "5 sessions",

        price3d: "",
        price3dUnit: "",
        price3dUnitEn: "",

        price5d: "2,990,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",

        price10d: "",
        price10dUnit: "",
        price10dUnitEn: "",

        duration: "60 – 90 phút / buổi",
        durationEn: "60 – 90 minutes / session",

        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",

        packageInfo: "5 buổi chăm sóc tổng hợp",
        packageInfoEn: "5 comprehensive care sessions",

        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói chăm sóc mẹ cơ bản gồm 5 buổi chăm sóc tổng hợp, kết hợp massage bụng và massage lưng, giúp mẹ thư giãn, hỗ trợ phục hồi cơ thể và chăm sóc sức khỏe sau sinh.",

        shortDescriptionEn:
          "The Basic Postpartum Care Package includes 5 comprehensive care sessions combining abdominal and back massage to help mothers relax, support postpartum recovery, and promote overall well-being.",

        images: [
          "[https://placehold.co/800x600/F7F1E8/8eaa8e?text=Massage+bung](https://placehold.co/800x600/F7F1E8/8eaa8e?text=Massage+bung)",
          "[https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+lung](https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+lung)",
          "[https://placehold.co/800x600/c4b5a5/ffffff?text=Cham+soc+me](https://placehold.co/800x600/c4b5a5/ffffff?text=Cham+soc+me)",
        ],

        features: [
          {
            icon: "heart",
            label: "Chăm sóc tổng hợp",
            labelEn: "Comprehensive Care",
          },
          {
            icon: "leaf",
            label: "Thư giãn",
            labelEn: "Relaxing",
          },
          {
            icon: "user",
            label: "Chuyên biệt",
            labelEn: "Specialized",
          },
          {
            icon: "star",
            label: "Tận tâm",
            labelEn: "Dedicated",
          },
        ],

        description:
          "Gói Chăm sóc Mẹ - Cơ bản được thiết kế dành cho mẹ sau sinh có nhu cầu chăm sóc cơ thể định kỳ. Mỗi buổi là một lần chăm sóc tổng hợp, trong đó massage bụng và massage lưng được thực hiện kết hợp nhằm hỗ trợ mẹ thư giãn và phục hồi sau sinh. Các nội dung chăm sóc có thể được điều chỉnh linh hoạt theo nhu cầu và tình trạng thực tế của từng khách hàng.",

        descriptionEn:
          "The Basic Postpartum Care Package is designed for mothers who need regular postpartum body care. Each session is a comprehensive care session combining abdominal and back massage to help mothers relax and support postpartum recovery. The care approach can be adjusted according to each customer's individual needs and condition.",

        packageContents: [
          {
            title: "Massage bụng",
            titleEn: "Abdominal Massage",
            detail:
              "Massage vùng bụng theo quy trình chăm sóc phù hợp cho mẹ sau sinh, hỗ trợ thư giãn và chăm sóc vùng bụng.",
            detailEn:
              "Gentle abdominal massage following a postpartum care routine to promote relaxation and support abdominal care.",
          },
          {
            title: "Massage lưng",
            titleEn: "Back Massage",
            detail:
              "Massage vùng lưng giúp mẹ thư giãn, giảm cảm giác căng mỏi do sinh hoạt và chăm sóc em bé.",
            detailEn:
              "Back massage helps mothers relax and ease discomfort and muscle tension associated with postpartum activities and baby care.",
          },
        ],

        packageContentsEn: [
          {
            title: "Abdominal Massage",
            titleEn: "Abdominal Massage",
            detail:
              "Gentle abdominal massage following a postpartum care routine to promote relaxation and support abdominal care.",
            detailEn:
              "Gentle abdominal massage following a postpartum care routine to promote relaxation and support abdominal care.",
          },
          {
            title: "Back Massage",
            titleEn: "Back Massage",
            detail:
              "Back massage helps mothers relax and ease discomfort and muscle tension associated with postpartum activities and baby care.",
            detailEn:
              "Back massage helps mothers relax and ease discomfort and muscle tension associated with postpartum activities and baby care.",
          },
        ],

        process: [
          {
            step: "01",
            title: "Tư vấn và kiểm tra tình trạng",
            detail:
              "Trao đổi nhu cầu chăm sóc và tình trạng cơ thể của mẹ trước mỗi buổi.",
          },
          {
            step: "02",
            title: "Massage bụng",
            detail:
              "Thực hiện massage bụng theo quy trình chăm sóc phù hợp với mẹ sau sinh.",
          },
          {
            step: "03",
            title: "Massage lưng",
            detail:
              "Kết hợp massage lưng giúp mẹ thư giãn và giảm cảm giác căng mỏi.",
          },
          {
            step: "04",
            title: "Theo dõi và tư vấn",
            detail:
              "Ghi nhận tình trạng sau buổi chăm sóc và tư vấn cách chăm sóc cơ thể phù hợp.",
          },
        ],

        processEn: [
          {
            step: "01",
            title: "Consultation and Assessment",
            detail:
              "We discuss the mother's needs and assess her physical condition before each session.",
          },
          {
            step: "02",
            title: "Abdominal Massage",
            detail:
              "Abdominal massage is performed following a postpartum care routine appropriate for the mother.",
          },
          {
            step: "03",
            title: "Back Massage",
            detail:
              "Back massage is combined with abdominal massage to help the mother relax and ease muscle tension.",
          },
          {
            step: "04",
            title: "Follow-Up and Guidance",
            detail:
              "We review the mother's condition after the session and provide appropriate postpartum care guidance.",
          },
        ],

        benefits: [
          "Hỗ trợ thư giãn và phục hồi sau sinh",
          "Kết hợp massage bụng và massage lưng trong mỗi buổi",
          "Chăm sóc linh hoạt theo nhu cầu của mẹ",
          "Không gian chăm sóc riêng tư, thoải mái",
          "Được tư vấn và theo dõi trong quá trình sử dụng dịch vụ",
        ],

        benefitsEn: [
          "Supports relaxation and postpartum recovery",
          "Combines abdominal and back massage in each session",
          "Flexible care based on the mother's needs",
          "Comfortable and private care experience",
          "Guidance and follow-up throughout the care program",
        ],

        faqs: [
          {
            question: "Gói chăm sóc mẹ cơ bản gồm những dịch vụ gì?",
            answer:
              "Gói gồm 5 buổi chăm sóc tổng hợp. Mỗi buổi kết hợp massage bụng và massage lưng, được điều chỉnh theo nhu cầu và tình trạng của mẹ.",
          },
          {
            question: "Mỗi buổi chăm sóc kéo dài bao lâu?",
            answer:
              "Mỗi buổi dự kiến kéo dài khoảng 60–90 phút tùy theo nội dung chăm sóc và tình trạng thực tế của khách hàng.",
          },
          {
            question: "Tôi có thể sử dụng dịch vụ tại nhà không?",
            answer:
              "Có. Maia Care cung cấp dịch vụ tại nhà hoặc tại Maia Care tùy theo nhu cầu và khu vực phục vụ.",
          },
          {
            question: "Gói 5 buổi có thể điều chỉnh nội dung chăm sóc không?",
            answer:
              "Có. Nội dung chăm sóc có thể được tư vấn và điều chỉnh phù hợp với nhu cầu cũng như tình trạng của mẹ.",
          },
        ],

        faqsEn: [
          {
            question:
              "What services are included in the Basic Postpartum Care Package?",
            answer:
              "The package includes 5 comprehensive care sessions. Each session combines abdominal and back massage and can be adjusted according to the mother's needs and condition.",
          },
          {
            question: "How long does each session take?",
            answer:
              "Each session is expected to last approximately 60–90 minutes, depending on the care activities and the customer's condition.",
          },
          {
            question: "Can I receive the service at home?",
            answer:
              "Yes. Maia Care provides services either at home or at Maia Care, depending on the customer's needs and service area.",
          },
          {
            question:
              "Can the care content be adjusted during the 5-session package?",
            answer:
              "Yes. The care plan can be discussed and adjusted according to the mother's individual needs and condition.",
          },
        ],
      },

      {
        id: 5,
        name: "Gói chăm sóc mẹ toàn diện",
        nameEn: "Comprehensive Postpartum Care Package",

        price: "6,890,000đ",
        priceUnit: "10 buổi",
        priceUnitEn: "10 sessions",

        price3d: "",
        price3dUnit: "",
        price3dUnitEn: "",

        price5d: "",
        price5dUnit: "",
        price5dUnitEn: "",

        price10d: "6,890,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",

        duration: "60 – 90 phút / buổi",
        durationEn: "60 – 90 minutes / session",

        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",

        packageInfo: "10 buổi chăm sóc tổng hợp",
        packageInfoEn: "10 comprehensive care sessions",

        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói chăm sóc mẹ toàn diện gồm 10 buổi chăm sóc tổng hợp với massage bụng và massage lưng, kết hợp 2 buổi hỗ trợ thông tắc tia sữa và 1 buổi chăm sóc vết khâu/vết mổ theo nhu cầu và tình trạng của mẹ.",

        shortDescriptionEn:
          "The Comprehensive Postpartum Care Package includes 10 comprehensive care sessions with abdominal and back massage, plus 2 lactation support sessions and 1 wound-care session based on the mother's needs and condition.",

        images: [
          "[https://placehold.co/800x600/F7F1E8/8eaa8e?text=Massage+bung](https://placehold.co/800x600/F7F1E8/8eaa8e?text=Massage+bung)",
          "[https://placehold.co/800x600/E2CFC2/7a6b5a?text=Thong+tac+tia+sua](https://placehold.co/800x600/E2CFC2/7a6b5a?text=Thong+tac+tia+sua)",
          "[https://placehold.co/800x600/c4b5a5/ffffff?text=Cham+soc+me](https://placehold.co/800x600/c4b5a5/ffffff?text=Cham+soc+me)",
        ],

        features: [
          {
            icon: "heart",
            label: "Chăm sóc toàn diện",
            labelEn: "Comprehensive Care",
          },
          {
            icon: "leaf",
            label: "Phục hồi",
            labelEn: "Recovery",
          },
          {
            icon: "user",
            label: "Chuyên biệt",
            labelEn: "Specialized",
          },
          {
            icon: "star",
            label: "Tận tâm",
            labelEn: "Dedicated",
          },
        ],

        description:
          "Gói Chăm sóc Mẹ - Toàn diện được thiết kế với 10 buổi chăm sóc tổng hợp, trong đó massage bụng và massage lưng được kết hợp trong từng buổi. Bên cạnh chăm sóc cơ thể, gói còn bao gồm 2 buổi hỗ trợ thông tắc tia sữa và 1 buổi chăm sóc vết khâu/vết mổ. Các dịch vụ chuyên biệt được bố trí vào những buổi phù hợp tùy theo nhu cầu và tình trạng thực tế của khách hàng.",

        descriptionEn:
          "The Comprehensive Postpartum Care Package is designed with 10 comprehensive care sessions, combining abdominal and back massage in each session. In addition to body care, the package includes 2 lactation support sessions and 1 wound-care session. These specialized services are scheduled at appropriate sessions according to each customer's individual needs and condition.",

        packageContents: [
          {
            title: "Massage bụng",
            titleEn: "Abdominal Massage",
            detail:
              "10 buổi massage bụng được kết hợp trong các buổi chăm sóc tổng hợp nhằm hỗ trợ mẹ thư giãn và chăm sóc cơ thể sau sinh.",
            detailEn:
              "10 abdominal massage sessions are incorporated into the comprehensive care sessions to support relaxation and postpartum body care.",
          },
          {
            title: "Massage lưng",
            titleEn: "Back Massage",
            detail:
              "10 buổi massage lưng giúp mẹ thư giãn và giảm cảm giác căng mỏi trong quá trình chăm sóc em bé.",
            detailEn:
              "10 back massage sessions help mothers relax and ease muscle tension associated with postpartum activities and baby care.",
          },
          {
            title: "Hỗ trợ thông tắc tia sữa",
            titleEn: "Lactation Support",
            detail:
              "2 buổi hỗ trợ thông tắc tia sữa được bố trí tùy theo nhu cầu và tình trạng của mẹ.",
            detailEn:
              "2 lactation support sessions are arranged according to the mother's needs and condition.",
          },
          {
            title: "Chăm sóc vết khâu/vết mổ",
            titleEn: "Stitch / Incision Care",
            detail:
              "1 buổi chăm sóc vết khâu hoặc vết mổ được bố trí phù hợp với tình trạng của mẹ.",
            detailEn:
              "1 wound-care session for postpartum stitches or a C-section incision is arranged according to the mother's condition.",
          },
        ],

        packageContentsEn: [
          {
            title: "Abdominal Massage",
            titleEn: "Abdominal Massage",
            detail:
              "10 abdominal massage sessions are incorporated into the comprehensive care sessions to support relaxation and postpartum body care.",
            detailEn:
              "10 abdominal massage sessions are incorporated into the comprehensive care sessions to support relaxation and postpartum body care.",
          },
          {
            title: "Back Massage",
            titleEn: "Back Massage",
            detail:
              "10 back massage sessions help mothers relax and ease muscle tension associated with postpartum activities and baby care.",
            detailEn:
              "10 back massage sessions help mothers relax and ease muscle tension associated with postpartum activities and baby care.",
          },
          {
            title: "Lactation Support",
            titleEn: "Lactation Support",
            detail:
              "2 lactation support sessions are arranged according to the mother's needs and condition.",
            detailEn:
              "2 lactation support sessions are arranged according to the mother's needs and condition.",
          },
          {
            title: "Stitch / Incision Care",
            titleEn: "Stitch / Incision Care",
            detail:
              "1 wound-care session for postpartum stitches or a C-section incision is arranged according to the mother's condition.",
            detailEn:
              "1 wound-care session for postpartum stitches or a C-section incision is arranged according to the mother's condition.",
          },
        ],

        process: [
          {
            step: "01",
            title: "Tư vấn và đánh giá",
            detail:
              "Trao đổi nhu cầu, tình trạng sau sinh và xác định nội dung chăm sóc phù hợp.",
          },
          {
            step: "02",
            title: "Massage bụng và massage lưng",
            detail:
              "Thực hiện massage bụng kết hợp massage lưng trong mỗi buổi chăm sóc tổng hợp.",
          },
          {
            step: "03",
            title: "Chăm sóc chuyên biệt",
            detail:
              "Bố trí các buổi hỗ trợ thông tắc tia sữa và chăm sóc vết khâu/vết mổ theo nhu cầu và tình trạng của mẹ.",
          },
          {
            step: "04",
            title: "Theo dõi và tư vấn",
            detail:
              "Theo dõi quá trình chăm sóc, ghi nhận tình trạng và tư vấn các phương pháp chăm sóc phù hợp tại nhà.",
          },
        ],

        processEn: [
          {
            step: "01",
            title: "Consultation and Assessment",
            detail:
              "We discuss the mother's needs and postpartum condition to determine the appropriate care plan.",
          },
          {
            step: "02",
            title: "Abdominal and Back Massage",
            detail:
              "Abdominal and back massage are combined as part of each comprehensive care session.",
          },
          {
            step: "03",
            title: "Specialized Care",
            detail:
              "Lactation support and stitch/incision care sessions are scheduled according to the mother's needs and condition.",
          },
          {
            step: "04",
            title: "Follow-Up and Guidance",
            detail:
              "We monitor the care process and provide appropriate guidance for continued care at home.",
          },
        ],

        benefits: [
          "10 buổi chăm sóc tổng hợp kết hợp massage bụng và massage lưng",
          "2 buổi hỗ trợ thông tắc tia sữa",
          "1 buổi chăm sóc vết khâu/vết mổ",
          "Nội dung chuyên biệt được bố trí linh hoạt theo nhu cầu",
          "Theo dõi và tư vấn trong suốt quá trình chăm sóc",
        ],

        benefitsEn: [
          "10 comprehensive sessions combining abdominal and back massage",
          "2 lactation support sessions",
          "1 stitch/incision care session",
          "Specialized care scheduled flexibly according to individual needs",
          "Ongoing follow-up and guidance throughout the care program",
        ],

        faqs: [
          {
            question: "Gói chăm sóc mẹ toàn diện gồm những gì?",
            answer:
              "Gói gồm 10 buổi chăm sóc tổng hợp với massage bụng và massage lưng, kèm 2 buổi hỗ trợ thông tắc tia sữa và 1 buổi chăm sóc vết khâu/vết mổ.",
          },
          {
            question:
              "Các buổi thông tắc tia sữa và chăm sóc vết thương được thực hiện khi nào?",
            answer:
              "Các dịch vụ chuyên biệt được bố trí ở những buổi phù hợp tùy theo nhu cầu và tình trạng thực tế của mẹ.",
          },
          {
            question: "Nếu tôi không cần thông tắc tia sữa thì sao?",
            answer:
              "Nội dung chăm sóc được tư vấn dựa trên nhu cầu và tình trạng của từng khách hàng. Maia Care sẽ trao đổi cụ thể trước khi thực hiện dịch vụ.",
          },
          {
            question: "Gói có thể sử dụng tại nhà không?",
            answer:
              "Có. Dịch vụ có thể được thực hiện tại nhà hoặc tại Maia Care tùy theo nhu cầu và khu vực phục vụ.",
          },
        ],

        faqsEn: [
          {
            question:
              "What is included in the Comprehensive Postpartum Care Package?",
            answer:
              "The package includes 10 comprehensive care sessions with abdominal and back massage, plus 2 lactation support sessions and 1 stitch/incision care session.",
          },
          {
            question:
              "When are the lactation and wound-care sessions provided?",
            answer:
              "Specialized services are scheduled during appropriate sessions according to the mother's individual needs and condition.",
          },
          {
            question: "What if I do not need lactation support?",
            answer:
              "The care content is discussed based on each customer's needs and condition. Maia Care will provide specific guidance before the service is performed.",
          },
          {
            question: "Can the package be provided at home?",
            answer:
              "Yes. The service can be provided either at home or at Maia Care, depending on the customer's needs and service area.",
          },
        ],
      },
    ],
  },

  baby: {
    groupTitle: "Dịch vụ chăm sóc em bé",
    groupTitleEn: "Baby Care Services",
    img: "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Baby+Care",

    thumbs: [
      "https://placehold.co/200x160/E2CFC2/7a6b5a?text=Thumb+1",
      "https://placehold.co/200x160/F7F1E8/8eaa8e?text=Thumb+2",
      "https://placehold.co/200x160/A8BFA8/ffffff?text=Thumb+3",
    ],

    items: [
      {
        id: 0,
        name: "Kiểm tra và tư vấn sức khỏe bé",
        nameEn: "Health Check-up and Consultation Baby",
        price: "300,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "1,400,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "2,700,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "60 phút / buổi",
        durationEn: "60 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Tư vấn trực tiếp",
        packageInfoEn: "One-on-one consultation",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Dịch vụ kiểm tra và tư vấn sức khỏe cho bé sơ sinh giúp ba mẹ theo dõi sự phát triển của bé, nhận biết sớm các dấu hiệu bất thường và được tư vấn chăm sóc phù hợp.",

        shortDescriptionEn:
          "Newborn health check-ups and consultations help parents monitor their baby's development, identify possible concerns early, and receive appropriate care guidance.",

        images: [
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Kiểm+tra+bé",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tư+vấn",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Sức+khỏe+bé",
        ],

        features: [
          { icon: "leaf", label: "Chuyên nghiệp", labelEn: "Professional" },
          { icon: "heart", label: "Tận tâm", labelEn: "Dedicated" },
          { icon: "user", label: "Cá nhân hóa", labelEn: "Personalized" },
          { icon: "star", label: "Toàn diện", labelEn: "Comprehensive" },
        ],

        description:
          "Kiểm tra sức khỏe định kỳ và tư vấn chăm sóc bé sơ sinh là điều vô cùng quan trọng trong những tháng đầu đời. Đội ngũ chuyên viên Maia Care đánh giá toàn diện các chỉ số phát triển của bé, bao gồm cân nặng, chiều cao, phản xạ, màu da, rốn và các dấu hiệu sinh tồn cơ bản, đồng thời tư vấn ba mẹ cách chăm sóc đúng theo từng giai đoạn.",

        descriptionEn:
          "Regular health checks and newborn care guidance are especially important during the first months of life. Maia Care professionals review key developmental indicators such as weight, length, reflexes, skin color, umbilical cord condition, and basic vital signs, while guiding parents on age-appropriate care.",

        process: [
          {
            step: "01",
            title: "Đánh giá ban đầu",
            detail:
              "Lắng nghe ba mẹ chia sẻ về tình trạng của bé, thói quen ăn ngủ và các lo lắng hiện tại.",
          },
          {
            step: "02",
            title: "Kiểm tra toàn diện",
            detail:
              "Kiểm tra cân nặng, chiều dài, phản xạ, màu da, rốn, tim phổi và các chỉ số cơ bản.",
          },
          {
            step: "03",
            title: "Phân tích và tư vấn",
            detail:
              "Đưa ra nhận xét về sự phát triển và tư vấn chế độ chăm sóc phù hợp.",
          },
          {
            step: "04",
            title: "Lịch theo dõi",
            detail:
              "Thiết lập lịch kiểm tra định kỳ và hướng dẫn ba mẹ các dấu hiệu cần chú ý.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Initial Assessment",
            detail:
              "We listen to parents' concerns about the baby's condition, feeding, sleep, and current routines.",
          },
          {
            step: "02",
            title: "Comprehensive Check",
            detail:
              "We check weight, length, reflexes, skin, umbilical cord, heart and lungs, and other basic indicators.",
          },
          {
            step: "03",
            title: "Analysis and Consultation",
            detail:
              "We provide observations about the baby's development and recommend appropriate care.",
          },
          {
            step: "04",
            title: "Follow-Up Schedule",
            detail:
              "We establish a follow-up schedule and explain signs that parents should pay attention to.",
          },
        ],

        benefits: [
          "Theo dõi sự phát triển của bé chuyên nghiệp",
          "Nhận biết sớm dấu hiệu bất thường",
          "Ba mẹ được tư vấn kiến thức chăm sóc",
          "Giảm lo lắng, tự tin hơn khi nuôi con",
          "Kết nối với chuyên viên hỗ trợ 24/7",
        ],
        benefitsEn: [
          "Professional monitoring of baby's development",
          "Early identification of potential concerns",
          "Practical newborn-care guidance for parents",
          "Greater parental confidence",
          "Access to professional support",
        ],

        faqs: [
          {
            question: "Dịch vụ phù hợp với bé bao nhiêu tuổi?",
            answer:
              "Phù hợp nhất từ 0–6 tháng tuổi, đặc biệt trong tháng đầu sau sinh.",
          },
          {
            question: "Có thể thực hiện tại nhà không?",
            answer:
              "Có. Chuyên viên mang theo đầy đủ dụng cụ kiểm tra đến tận nhà.",
          },
          {
            question: "Cần chuẩn bị gì trước buổi kiểm tra?",
            answer:
              "Ba mẹ ghi lại các câu hỏi, lịch tiêm phòng và sổ theo dõi bé (nếu có) để chuyên viên tham khảo.",
          },
          {
            question: "Maia Care có hỗ trợ sau giờ hành chính không?",
            answer:
              "Có, Maia Care hỗ trợ tư vấn qua điện thoại 24/7 và dịch vụ tại nhà từ 8:00–20:00 hàng ngày.",
          },
        ],
        faqsEn: [
          {
            question: "What age is this service suitable for?",
            answer:
              "It is especially suitable for babies from 0–6 months, particularly during the first month.",
          },
          {
            question: "Can the service be provided at home?",
            answer:
              "Yes. Our professional brings the necessary basic assessment equipment to your home.",
          },
          {
            question: "What should parents prepare?",
            answer:
              "Prepare questions, vaccination records, and the baby's health record if available.",
          },
          {
            question: "Does Maia Care provide support outside office hours?",
            answer:
              "Yes. Maia Care provides phone consultation support 24/7 and at-home services from 8:00 to 20:00 daily.",
          },
        ],
      },

      {
        id: 1,
        name: "Tắm thủy liệu",
        nameEn: "Hydrotherapy Bath",
        price: "350,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "1,650,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "3,200,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",
        location: "Tại Maia Care",
        locationEn: "At Maia Care",
        packageInfo: "Combo nhiều buổi tiết kiệm",
        packageInfoEn: "Multi-session packages available",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Tắm thủy liệu cho bé là trải nghiệm tắm nước ấm đặc biệt trong bồn thủy liệu chuyên dụng, giúp bé thư giãn, kích thích phát triển thần kinh vận động và tăng sức đề kháng.",
        shortDescriptionEn:
          "Baby hydrotherapy is a warm-water bathing experience in a specialized hydrotherapy tub that helps babies relax and supports natural motor development.",

        images: [
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Tắm+Thủy+Liệu",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Bé+thư+giãn",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Phát+triển+bé",
        ],

        features: [
          { icon: "leaf", label: "An toàn", labelEn: "Safe" },
          { icon: "heart", label: "Dịu dàng", labelEn: "Gentle" },
          { icon: "user", label: "Chuyên biệt", labelEn: "Specialized" },
          { icon: "star", label: "Khoa học", labelEn: "Science-based" },
        ],

        description:
          "Tắm thủy liệu (Hydrotherapy) cho bé sơ sinh là phương pháp tắm trong bồn nước ấm với vòng nổi chuyên dụng, mô phỏng môi trường nước ối trong bụng mẹ. Phương pháp này đã được nghiên cứu khoa học chứng minh giúp bé ngủ ngon hơn, giảm quấy khóc, kích thích vận động tự nhiên và tăng cường phát triển thần kinh cơ.",
        descriptionEn:
          "Baby hydrotherapy is a warm-water bathing method using a specialized float ring and tub. The gentle water environment allows babies to move naturally while receiving supervised care in a calm and comfortable setting.",

        process: [
          {
            step: "01",
            title: "Kiểm tra nhiệt độ",
            detail:
              "Chuẩn bị bồn thủy liệu với nhiệt độ nước phù hợp (36–37°C), đảm bảo an toàn cho bé.",
          },
          {
            step: "02",
            title: "Chuẩn bị cho bé",
            detail:
              "Đặt vòng nổi cho bé, đảm bảo cổ và đầu được nâng đỡ hoàn toàn.",
          },
          {
            step: "03",
            title: "Thực hiện thủy liệu",
            detail:
              "Để bé tự do vận động trong bồn nước ấm 15–20 phút, hỗ trợ nhẹ nhàng khi cần.",
          },
          {
            step: "04",
            title: "Tắm sạch và massage",
            detail:
              "Tắm sạch bé sau thủy liệu và thực hiện massage nhẹ trước khi mặc quần áo.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Temperature Check",
            detail:
              "We prepare the hydrotherapy tub at an appropriate water temperature of 36–37°C.",
          },
          {
            step: "02",
            title: "Baby Preparation",
            detail:
              "We fit the baby with a suitable float ring and make sure the head and neck are properly supported.",
          },
          {
            step: "03",
            title: "Hydrotherapy Session",
            detail:
              "The baby moves freely in warm water for approximately 15–20 minutes with gentle assistance when needed.",
          },
          {
            step: "04",
            title: "Clean Bath and Massage",
            detail:
              "We rinse the baby after hydrotherapy and provide a gentle massage before dressing.",
          },
        ],

        benefits: [
          "Bé ngủ ngon và sâu giấc hơn",
          "Giảm quấy khóc, colic ở trẻ sơ sinh",
          "Kích thích phát triển thần kinh vận động",
          "Tăng sức đề kháng và hệ miễn dịch",
          "Tạo cảm giác an toàn, dễ chịu như trong bụng mẹ",
        ],
        benefitsEn: [
          "May support better sleep",
          "May help reduce fussiness",
          "Encourages natural movement and motor development",
          "Provides a relaxing sensory experience",
          "Creates a calm and comfortable bathing environment",
        ],

        faqs: [
          {
            question: "Bé mấy tuổi có thể tắm thủy liệu?",
            answer:
              "Từ sau khi rốn rụng (khoảng 2–4 tuần tuổi) đến 12 tháng tuổi.",
          },
          {
            question: "Tắm thủy liệu có an toàn không?",
            answer:
              "Hoàn toàn an toàn khi được thực hiện bởi chuyên viên được đào tạo với thiết bị chuyên dụng.",
          },
          {
            question: "Nên tắm mấy lần một tuần?",
            answer: "Khuyến nghị 2–3 lần/tuần để đạt hiệu quả tốt nhất.",
          },
          {
            question: "Bé bị cảm có tắm được không?",
            answer:
              "Không nên tắm thủy liệu khi bé đang bị sốt, cảm lạnh hoặc có vấn đề về da liễu.",
          },
        ],
        faqsEn: [
          {
            question: "What age can babies start hydrotherapy?",
            answer:
              "The service is generally considered after the umbilical cord has fallen off, around 2–4 weeks of age, and can be offered up to 12 months depending on the baby's condition.",
          },
          {
            question: "Is hydrotherapy safe?",
            answer:
              "It should be performed with appropriate supervision, trained staff, and suitable equipment.",
          },
          {
            question: "How many times a week is recommended?",
            answer:
              "A schedule of 2–3 sessions per week may be suggested depending on the baby's needs.",
          },
          {
            question: "Can a baby with a cold have hydrotherapy?",
            answer:
              "Hydrotherapy should be postponed if the baby has a fever, is unwell, or has a skin condition requiring medical attention.",
          },
        ],
      },

      {
        id: 2,
        name: "Massage cho bé",
        nameEn: "Baby Massage",
        price: "200,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "950,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "1,800,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "30 – 45 phút / buổi",
        durationEn: "30 – 45 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Linh hoạt theo nhu cầu",
        packageInfoEn: "Flexible according to needs",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Massage cho bé sơ sinh kích thích phát triển toàn diện, giúp bé tăng cân, ngủ ngon, giảm đầy hơi và xây dựng kết nối cảm xúc với ba mẹ.",

        shortDescriptionEn:
          "Baby massage supports relaxation and development, and may help babies sleep better, reduce gas discomfort, and strengthen emotional bonding with parents.",

        images: [
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+Bé",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Kết+nối+yêu+thương",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Phát+triển+bé",
        ],

        features: [
          { icon: "leaf", label: "An toàn", labelEn: "Safe" },
          { icon: "heart", label: "Yêu thương", labelEn: "Caring" },
          { icon: "user", label: "Chuyên biệt", labelEn: "Specialized" },
          { icon: "star", label: "Khoa học", labelEn: "Science-based" },
        ],

        description:
          "Massage cho bé sơ sinh là liệu pháp xúc giác đã được y học hiện đại công nhận với nhiều lợi ích cho sự phát triển của trẻ. Chuyên viên Maia Care thực hiện kỹ thuật massage nhẹ nhàng, sử dụng dầu massage tự nhiên an toàn, kết hợp hướng dẫn ba mẹ để có thể tiếp tục thực hành tại nhà.",

        descriptionEn:
          "Baby massage is a gentle touch-based care practice that can support a baby's comfort and development. Maia Care professionals use gentle techniques and suitable natural massage oil, while also teaching parents basic techniques they can continue practicing at home.",

        process: [
          {
            step: "01",
            title: "Chuẩn bị không gian",
            detail:
              "Đảm bảo phòng ấm áp, ánh sáng dịu và không gian yên tĩnh, dễ chịu cho bé.",
          },
          {
            step: "02",
            title: "Chuẩn bị dầu massage",
            detail:
              "Lựa chọn dầu massage thiên nhiên an toàn cho da nhạy cảm của bé.",
          },
          {
            step: "03",
            title: "Thực hiện massage",
            detail:
              "Massage toàn thân theo thứ tự từ đầu xuống chân, chú ý phản ứng của bé.",
          },
          {
            step: "04",
            title: "Hướng dẫn ba mẹ",
            detail:
              "Hướng dẫn ba mẹ các kỹ thuật cơ bản để có thể thực hành massage cho bé tại nhà mỗi ngày.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Prepare the Environment",
            detail:
              "We ensure the room is warm, softly lit, quiet, and comfortable for the baby.",
          },
          {
            step: "02",
            title: "Prepare Massage Oil",
            detail:
              "We select a suitable natural massage oil for the baby's sensitive skin.",
          },
          {
            step: "03",
            title: "Massage Session",
            detail:
              "We gently massage the baby's body from head to feet while observing the baby's responses.",
          },
          {
            step: "04",
            title: "Parent Guidance",
            detail:
              "We teach parents basic techniques they can safely practice with the baby at home.",
          },
        ],

        benefits: [
          "Kích thích tăng trưởng và tăng cân",
          "Giảm đầy hơi, khó tiêu ở trẻ sơ sinh",
          "Cải thiện giấc ngủ của bé",
          "Tăng cường kết nối ba mẹ và bé",
          "Phát triển cảm giác và hệ thần kinh",
        ],
        benefitsEn: [
          "Supports healthy growth and weight gain",
          "May reduce gas and digestive discomfort",
          "Supports better sleep",
          "Strengthens parent–baby bonding",
          "Provides positive sensory stimulation",
        ],

        faqs: [
          {
            question: "Bé bao nhiêu ngày tuổi có thể massage?",
            answer: "Từ 2 tuần tuổi trở lên, sau khi rốn đã rụng hoàn toàn.",
          },
          {
            question: "Có thể massage khi bé vừa bú xong không?",
            answer:
              "Không nên. Nên massage trước khi bú hoặc ít nhất 30–45 phút sau bú.",
          },
          {
            question: "Ba mẹ có thể học kỹ thuật từ chuyên viên không?",
            answer:
              "Có. Chuyên viên sẽ hướng dẫn ba mẹ các kỹ thuật cơ bản để thực hành tại nhà.",
          },
          {
            question: "Nên massage mấy lần một tuần?",
            answer:
              "Có thể massage mỗi ngày nếu bé thích. Tốt nhất là tạo thói quen vào buổi tối trước khi ngủ.",
          },
        ],
        faqsEn: [
          {
            question: "How old should a baby be before massage?",
            answer:
              "Massage can generally begin from around 2 weeks of age after the umbilical cord has fully fallen off, depending on the baby's condition.",
          },
          {
            question: "Can I massage the baby right after feeding?",
            answer:
              "It is better to avoid massage immediately after feeding. Massage before feeding or at least 30–45 minutes afterward.",
          },
          {
            question: "Can parents learn the techniques?",
            answer:
              "Yes. Our professional can teach parents basic techniques for home practice.",
          },
          {
            question: "How often can babies be massaged?",
            answer:
              "If the baby enjoys it, gentle massage may be practiced regularly. Many families choose a calm evening routine before bedtime.",
          },
        ],
      },

      {
        id: 3,
        name: "Chăm sóc bé tại nhà 4 giờ",
        nameEn: "4-Hour In-Home Baby Care",
        price: "450,000đ",
        priceUnit: "giờ",
        priceUnitEn: "hour",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "2,150,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "4,200,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "4 giờ",
        durationEn: "4 hours",
        location: "Tại nhà",
        locationEn: "At home",
        packageInfo: "Tính theo giờ, linh hoạt",
        packageInfoEn: "Flexible hourly service",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Dịch vụ chăm sóc bé tại nhà theo giờ của Maia Care cung cấp chuyên viên có kinh nghiệm đến nhà hỗ trợ ba mẹ chăm sóc bé trong khoảng thời gian cần thiết.",
        shortDescriptionEn:
          "Maia Care's hourly in-home baby care provides an experienced professional to support parents with baby care whenever help is needed.",

        images: [
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Chăm+sóc+bé",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tại+nhà",
          "https://placehold.co/800x600/c4b5a5/ffffff?text=Chuyên+viên",
        ],

        features: [
          { icon: "leaf", label: "Uy tín", labelEn: "Trusted" },
          { icon: "heart", label: "Tận tâm", labelEn: "Dedicated" },
          { icon: "user", label: "Linh hoạt", labelEn: "Flexible" },
          { icon: "star", label: "Chuyên nghiệp", labelEn: "Professional" },
        ],

        description:
          "Ba mẹ có thể cần thời gian nghỉ ngơi, xử lý công việc hoặc cần hỗ trợ chăm sóc bé trong những lúc đặc biệt. Maia Care cung cấp dịch vụ chăm sóc bé tại nhà theo giờ với chuyên viên giàu kinh nghiệm, được kiểm tra lý lịch và đào tạo bài bản.",

        descriptionEn:
          "Parents may need time to rest, work, or handle special situations while still ensuring their baby receives attentive care. Maia Care provides hourly in-home baby care with experienced professionals who are background-checked and properly trained.",

        process: [
          {
            step: "01",
            title: "Trao đổi trước",
            detail:
              "Ba mẹ chia sẻ lịch sinh hoạt, thói quen và các lưu ý đặc biệt của bé.",
          },
          {
            step: "02",
            title: "Chuyên viên đến nhà",
            detail:
              "Chuyên viên đúng giờ, mang theo đầy đủ vật tư cần thiết theo yêu cầu.",
          },
          {
            step: "03",
            title: "Chăm sóc toàn diện",
            detail:
              "Cho bé bú/ăn, thay tã, dỗ ngủ, tắm và theo dõi tình trạng sức khỏe bé.",
          },
          {
            step: "04",
            title: "Bàn giao và báo cáo",
            detail:
              "Chuyên viên báo cáo tình trạng bé cho ba mẹ sau mỗi ca chăm sóc.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Pre-Service Consultation",
            detail:
              "Parents share the baby's routine, habits, and any special care instructions.",
          },
          {
            step: "02",
            title: "Professional Arrives",
            detail:
              "The professional arrives on time with the necessary supplies according to the agreed requirements.",
          },
          {
            step: "03",
            title: "Comprehensive Baby Care",
            detail:
              "Care may include feeding, diaper changes, soothing, bathing, and basic health observation.",
          },
          {
            step: "04",
            title: "Handover and Report",
            detail:
              "The professional updates parents on the baby's condition after each care shift.",
          },
        ],

        benefits: [
          "Ba mẹ có thời gian nghỉ ngơi phục hồi",
          "Bé được chăm sóc bởi chuyên viên kinh nghiệm",
          "Linh hoạt theo lịch của gia đình",
          "Chuyên viên được kiểm tra lý lịch kỹ càng",
          "Hỗ trợ đêm khuya theo yêu cầu",
        ],
        benefitsEn: [
          "Gives parents time to rest and recover",
          "Experienced professional baby care",
          "Flexible scheduling for families",
          "Professionals are carefully background-checked",
          "Night support available upon request",
        ],

        faqs: [
          {
            question: "Thời gian tối thiểu cho mỗi ca là bao lâu?",
            answer: "Tối thiểu 2 giờ mỗi ca để đảm bảo chất lượng chăm sóc.",
          },
          {
            question: "Có thể đặt lịch vào ban đêm không?",
            answer:
              "Có. Maia Care hỗ trợ ca đêm từ 20:00–06:00 với phụ phí theo quy định.",
          },
          {
            question: "Chuyên viên có kinh nghiệm với trẻ sơ sinh không?",
            answer:
              "Tất cả chuyên viên đều được đào tạo chuyên biệt về chăm sóc trẻ sơ sinh và trẻ nhỏ.",
          },
          {
            question: "Làm sao đảm bảo an toàn cho bé?",
            answer:
              "Maia Care kiểm tra lý lịch tư pháp, xác nhận sức khỏe và đào tạo sơ cấp cứu cho tất cả chuyên viên.",
          },
        ],
        faqsEn: [
          {
            question: "What is the minimum duration for a shift?",
            answer:
              "The minimum is 2 hours per shift to maintain care quality.",
          },
          {
            question: "Can I book overnight care?",
            answer:
              "Yes. Maia Care can support night shifts from 20:00 to 06:00 with an applicable surcharge.",
          },
          {
            question: "Are the professionals experienced with newborns?",
            answer:
              "All professionals receive specialized training in newborn and infant care.",
          },
          {
            question: "How is the baby's safety ensured?",
            answer:
              "Maia Care conducts background checks, health verification, and first-aid training for all professionals.",
          },
        ],
      },

      {
        id: 4,
        name: "Chăm sóc bé tại nhà 8 giờ",
        nameEn: "8-Hour In-Home Baby Care",
        price: "850,000đ",
        priceUnit: "giờ",
        priceUnitEn: "hour",
        price3d: "",
        price3dUnit: "3 buổi",
        price3dUnitEn: "3 sessions",
        price5d: "4,100,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price10d: "8,000,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",
        duration: "8 giờ",
        durationEn: "8 hours",
        location: "Tại nhà",
        locationEn: "At home",
        packageInfo: "Tính theo giờ, linh hoạt",
        packageInfoEn: "Flexible hourly service",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Dịch vụ chăm sóc bé tại nhà theo giờ của Maia Care cung cấp chuyên viên có kinh nghiệm đến nhà hỗ trợ ba mẹ chăm sóc bé trong khoảng thời gian cần thiết.",
        shortDescriptionEn:
          "Maia Care's hourly in-home baby care provides an experienced professional to support parents with baby care whenever help is needed.",

        images: [
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Chăm+sóc+bé",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tại+nhà",
          "https://placehold.co/800x600/c4b5a5/ffffff?text=Chuyên+viên",
        ],

        features: [
          { icon: "leaf", label: "Uy tín", labelEn: "Trusted" },
          { icon: "heart", label: "Tận tâm", labelEn: "Dedicated" },
          { icon: "user", label: "Linh hoạt", labelEn: "Flexible" },
          { icon: "star", label: "Chuyên nghiệp", labelEn: "Professional" },
        ],

        description:
          "Ba mẹ có thể cần thời gian nghỉ ngơi, xử lý công việc hoặc cần hỗ trợ chăm sóc bé trong những lúc đặc biệt. Maia Care cung cấp dịch vụ chăm sóc bé tại nhà theo giờ với chuyên viên giàu kinh nghiệm, được kiểm tra lý lịch và đào tạo bài bản.",

        descriptionEn:
          "Parents may need time to rest, work, or handle special situations while still ensuring their baby receives attentive care. Maia Care provides hourly in-home baby care with experienced professionals who are background-checked and properly trained.",

        process: [
          {
            step: "01",
            title: "Trao đổi trước",
            detail:
              "Ba mẹ chia sẻ lịch sinh hoạt, thói quen và các lưu ý đặc biệt của bé.",
          },
          {
            step: "02",
            title: "Chuyên viên đến nhà",
            detail:
              "Chuyên viên đúng giờ, mang theo đầy đủ vật tư cần thiết theo yêu cầu.",
          },
          {
            step: "03",
            title: "Chăm sóc toàn diện",
            detail:
              "Cho bé bú/ăn, thay tã, dỗ ngủ, tắm và theo dõi tình trạng sức khỏe bé.",
          },
          {
            step: "04",
            title: "Bàn giao và báo cáo",
            detail:
              "Chuyên viên báo cáo tình trạng bé cho ba mẹ sau mỗi ca chăm sóc.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Pre-Service Consultation",
            detail:
              "Parents share the baby's routine, habits, and any special care instructions.",
          },
          {
            step: "02",
            title: "Professional Arrives",
            detail:
              "The professional arrives on time with the necessary supplies according to the agreed requirements.",
          },
          {
            step: "03",
            title: "Comprehensive Baby Care",
            detail:
              "Care may include feeding, diaper changes, soothing, bathing, and basic health observation.",
          },
          {
            step: "04",
            title: "Handover and Report",
            detail:
              "The professional updates parents on the baby's condition after each care shift.",
          },
        ],

        benefits: [
          "Ba mẹ có thời gian nghỉ ngơi phục hồi",
          "Bé được chăm sóc bởi chuyên viên kinh nghiệm",
          "Linh hoạt theo lịch của gia đình",
          "Chuyên viên được kiểm tra lý lịch kỹ càng",
          "Hỗ trợ đêm khuya theo yêu cầu",
        ],
        benefitsEn: [
          "Gives parents time to rest and recover",
          "Experienced professional baby care",
          "Flexible scheduling for families",
          "Professionals are carefully background-checked",
          "Night support available upon request",
        ],

        faqs: [
          {
            question: "Thời gian tối thiểu cho mỗi ca là bao lâu?",
            answer: "Tối thiểu 2 giờ mỗi ca để đảm bảo chất lượng chăm sóc.",
          },
          {
            question: "Có thể đặt lịch vào ban đêm không?",
            answer:
              "Có. Maia Care hỗ trợ ca đêm từ 20:00–06:00 với phụ phí theo quy định.",
          },
          {
            question: "Chuyên viên có kinh nghiệm với trẻ sơ sinh không?",
            answer:
              "Tất cả chuyên viên đều được đào tạo chuyên biệt về chăm sóc trẻ sơ sinh và trẻ nhỏ.",
          },
          {
            question: "Làm sao đảm bảo an toàn cho bé?",
            answer:
              "Maia Care kiểm tra lý lịch tư pháp, xác nhận sức khỏe và đào tạo sơ cấp cứu cho tất cả chuyên viên.",
          },
        ],
        faqsEn: [
          {
            question: "What is the minimum duration for a shift?",
            answer:
              "The minimum is 2 hours per shift to maintain care quality.",
          },
          {
            question: "Can I book overnight care?",
            answer:
              "Yes. Maia Care can support night shifts from 20:00 to 06:00 with an applicable surcharge.",
          },
          {
            question: "Are the professionals experienced with newborns?",
            answer:
              "All professionals receive specialized training in newborn and infant care.",
          },
          {
            question: "How is the baby's safety ensured?",
            answer:
              "Maia Care conducts background checks, health verification, and first-aid training for all professionals.",
          },
        ],
      },

      {
        id: 6,
        name: "Gói chăm sóc bé cơ bản",
        nameEn: "Basic Baby Care Package",

        price: "2,790,000đ",
        priceUnit: "5 buổi",
        priceUnitEn: "5 sessions",

        price3d: "",
        price3dUnit: "",
        price3dUnitEn: "",

        price5d: "2,790,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",

        price10d: "",
        price10dUnit: "",
        price10dUnitEn: "",

        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",

        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",

        packageInfo: "5 buổi chăm sóc bé",
        packageInfoEn: "5 baby care sessions",

        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói chăm sóc bé cơ bản gồm 5 buổi tắm thủy liệu kết hợp massage cho bé và 1 lần kiểm tra, tư vấn sức khỏe, giúp bé thư giãn và được theo dõi tình trạng định kỳ.",

        shortDescriptionEn:
          "The Basic Baby Care Package includes 5 hydrotherapy bathing and baby massage sessions, plus 1 health check and consultation to support the baby's relaxation and regular health monitoring.",

        images: [
          "[https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tam+thuy+lieu](https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tam+thuy+lieu)",
          "[https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+cho+be](https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+cho+be)",
          "[https://placehold.co/800x600/c4b5a5/ffffff?text=Cham+soc+be](https://placehold.co/800x600/c4b5a5/ffffff?text=Cham+soc+be)",
        ],

        features: [
          {
            icon: "droplets",
            label: "Tắm thủy liệu",
            labelEn: "Hydrotherapy",
          },
          {
            icon: "heart",
            label: "Massage cho bé",
            labelEn: "Baby Massage",
          },
          {
            icon: "user",
            label: "Theo dõi sức khỏe",
            labelEn: "Health Monitoring",
          },
          {
            icon: "star",
            label: "Tận tâm",
            labelEn: "Dedicated",
          },
        ],

        description:
          "Gói Chăm sóc Bé - Cơ bản được thiết kế dành cho trẻ sơ sinh với 5 buổi chăm sóc, trong đó tắm thủy liệu và massage cho bé được thực hiện kết hợp trong cùng một buổi. Bên cạnh đó, bé được kiểm tra và tư vấn tình trạng sức khỏe định kỳ 1 lần, giúp phụ huynh có thêm thông tin để theo dõi và chăm sóc bé phù hợp.",

        descriptionEn:
          "The Basic Baby Care Package is designed for newborns and includes 5 care sessions, with hydrotherapy bathing and baby massage combined in the same session. The package also includes 1 health check and consultation to help parents better understand and monitor their baby's condition.",

        packageContents: [
          {
            title: "Tắm thủy liệu",
            titleEn: "Hydrotherapy Bath",
            detail:
              "5 buổi tắm thủy liệu được thực hiện trong môi trường phù hợp, giúp bé thư giãn và vận động nhẹ nhàng.",
            detailEn:
              "5 hydrotherapy bathing sessions are provided in an appropriate environment to help the baby relax and engage in gentle movement.",
          },
          {
            title: "Massage cho bé",
            titleEn: "Baby Massage",
            detail:
              "Massage nhẹ nhàng được kết hợp ngay trong mỗi buổi tắm thủy liệu, phù hợp với tình trạng và độ tuổi của bé.",
            detailEn:
              "Gentle baby massage is combined with each hydrotherapy session and adapted to the baby's age and condition.",
          },
          {
            title: "Kiểm tra và tư vấn sức khỏe",
            titleEn: "Health Check and Consultation",
            detail:
              "1 lần kiểm tra và tư vấn giúp phụ huynh nắm được tình trạng của bé và được hướng dẫn chăm sóc phù hợp.",
            detailEn:
              "1 health check and consultation helps parents understand their baby's condition and receive appropriate care guidance.",
          },
        ],

        process: [
          {
            step: "01",
            title: "Kiểm tra tình trạng của bé",
            detail:
              "Đánh giá tình trạng sức khỏe và nhu cầu chăm sóc của bé trước khi bắt đầu buổi chăm sóc.",
          },
          {
            step: "02",
            title: "Tắm thủy liệu",
            detail:
              "Thực hiện tắm thủy liệu phù hợp với độ tuổi và tình trạng của bé.",
          },
          {
            step: "03",
            title: "Massage cho bé",
            detail:
              "Kết hợp massage nhẹ nhàng trong cùng buổi chăm sóc để giúp bé thư giãn.",
          },
          {
            step: "04",
            title: "Theo dõi và tư vấn",
            detail:
              "Định kỳ kiểm tra tình trạng của bé và tư vấn cho phụ huynh cách chăm sóc phù hợp.",
          },
        ],

        processEn: [
          {
            step: "01",
            title: "Baby Assessment",
            detail:
              "We assess the baby's condition and care needs before starting the session.",
          },
          {
            step: "02",
            title: "Hydrotherapy Bath",
            detail:
              "Hydrotherapy bathing is provided according to the baby's age and condition.",
          },
          {
            step: "03",
            title: "Baby Massage",
            detail:
              "Gentle massage is incorporated into the same care session to help the baby relax.",
          },
          {
            step: "04",
            title: "Monitoring and Consultation",
            detail:
              "The baby's condition is checked periodically and parents receive appropriate care guidance.",
          },
        ],

        benefits: [
          "Kết hợp tắm thủy liệu và massage trong cùng một buổi",
          "Giúp bé thư giãn và vận động nhẹ nhàng",
          "Kiểm tra và tư vấn sức khỏe định kỳ",
          "Chăm sóc phù hợp với tình trạng và độ tuổi của bé",
          "Phụ huynh được hướng dẫn cách chăm sóc bé",
        ],

        benefitsEn: [
          "Combines hydrotherapy bathing and baby massage in the same session",
          "Helps babies relax and engage in gentle movement",
          "Regular health checks and consultations",
          "Care adapted to the baby's age and condition",
          "Parents receive guidance on baby care",
        ],

        faqs: [
          {
            question: "Gói chăm sóc bé cơ bản gồm những gì?",
            answer:
              "Gói gồm 5 buổi tắm thủy liệu kết hợp massage cho bé và 1 lần kiểm tra, tư vấn sức khỏe.",
          },
          {
            question:
              "Tắm thủy liệu và massage có thực hiện cùng một buổi không?",
            answer:
              "Có. Tắm thủy liệu và massage cho bé được thiết kế kết hợp trong cùng một buổi chăm sóc.",
          },
          {
            question: "Khi nào bé được kiểm tra và tư vấn sức khỏe?",
            answer:
              "Gói cơ bản bao gồm 1 lần kiểm tra và tư vấn sức khỏe, được bố trí phù hợp trong quá trình sử dụng gói.",
          },
          {
            question: "Có thể chăm sóc bé tại nhà không?",
            answer:
              "Có. Dịch vụ có thể được thực hiện tại nhà hoặc tại Maia Care tùy theo nhu cầu và khu vực phục vụ.",
          },
        ],

        faqsEn: [
          {
            question: "What is included in the Basic Baby Care Package?",
            answer:
              "The package includes 5 hydrotherapy bathing and baby massage sessions, plus 1 health check and consultation.",
          },
          {
            question:
              "Are hydrotherapy bathing and baby massage provided in the same session?",
            answer:
              "Yes. Hydrotherapy bathing and baby massage are designed to be combined in the same care session.",
          },
          {
            question:
              "When is the baby's health check and consultation provided?",
            answer:
              "The Basic Package includes 1 health check and consultation, scheduled at an appropriate point during the care program.",
          },
          {
            question: "Can the baby care service be provided at home?",
            answer:
              "Yes. The service can be provided either at home or at Maia Care, depending on the customer's needs and service area.",
          },
        ],
      },

      {
        id: 7,
        name: "Gói chăm sóc bé toàn diện",
        nameEn: "Comprehensive Baby Care Package",

        price: "5,490,000đ",
        priceUnit: "10 buổi",
        priceUnitEn: "10 sessions",

        price3d: "",
        price3dUnit: "",
        price3dUnitEn: "",

        price5d: "",
        price5dUnit: "",
        price5dUnitEn: "",

        price10d: "5,490,000đ",
        price10dUnit: "10 buổi",
        price10dUnitEn: "10 sessions",

        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",

        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",

        packageInfo: "10 buổi chăm sóc bé",
        packageInfoEn: "10 baby care sessions",

        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói chăm sóc bé toàn diện gồm 10 buổi tắm thủy liệu kết hợp massage cho bé và 2 lần kiểm tra, tư vấn sức khỏe, giúp bé được chăm sóc và theo dõi định kỳ trong suốt quá trình sử dụng gói.",

        shortDescriptionEn:
          "The Comprehensive Baby Care Package includes 10 hydrotherapy bathing and baby massage sessions, plus 2 health checks and consultations to provide regular care and monitoring throughout the program.",

        images: [
          "[https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tam+thuy+lieu](https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tam+thuy+lieu)",
          "[https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+cho+be](https://placehold.co/800x600/E2CFC2/7a6b5a?text=Massage+cho+be)",
          "[https://placehold.co/800x600/c4b5a5/ffffff?text=Theo+doi+suc+khoe](https://placehold.co/800x600/c4b5a5/ffffff?text=Theo+doi+suc+khoe)",
        ],

        features: [
          {
            icon: "droplets",
            label: "Tắm thủy liệu",
            labelEn: "Hydrotherapy",
          },
          {
            icon: "heart",
            label: "Massage cho bé",
            labelEn: "Baby Massage",
          },
          {
            icon: "user",
            label: "Theo dõi sức khỏe",
            labelEn: "Health Monitoring",
          },
          {
            icon: "star",
            label: "Chăm sóc toàn diện",
            labelEn: "Comprehensive Care",
          },
        ],

        description:
          "Gói Chăm sóc Bé - Toàn diện được thiết kế với 10 buổi chăm sóc, trong đó tắm thủy liệu và massage cho bé được thực hiện kết hợp trong cùng một buổi. Trong suốt quá trình sử dụng gói, bé được kiểm tra và tư vấn tình trạng sức khỏe định kỳ 2 lần, giúp phụ huynh có thêm cơ sở để theo dõi sự phát triển và điều chỉnh cách chăm sóc bé khi cần thiết.",

        descriptionEn:
          "The Comprehensive Baby Care Package includes 10 care sessions, with hydrotherapy bathing and baby massage combined in the same session. Throughout the program, the baby receives 2 health checks and consultations, helping parents monitor the baby's development and adjust care practices when needed.",

        packageContents: [
          {
            title: "Tắm thủy liệu",
            titleEn: "Hydrotherapy Bath",
            detail:
              "10 buổi tắm thủy liệu được thực hiện trong môi trường phù hợp, hỗ trợ bé thư giãn và vận động nhẹ nhàng.",
            detailEn:
              "10 hydrotherapy bathing sessions are provided in an appropriate environment to support relaxation and gentle movement.",
          },
          {
            title: "Massage cho bé",
            titleEn: "Baby Massage",
            detail:
              "10 buổi massage cho bé được kết hợp cùng tắm thủy liệu trong từng buổi chăm sóc.",
            detailEn:
              "10 baby massage sessions are combined with hydrotherapy bathing as part of each care session.",
          },
          {
            title: "Kiểm tra và tư vấn sức khỏe",
            titleEn: "Health Check and Consultation",
            detail:
              "2 lần kiểm tra và tư vấn sức khỏe được bố trí định kỳ trong quá trình sử dụng gói.",
            detailEn:
              "2 health checks and consultations are scheduled periodically throughout the care program.",
          },
        ],

        process: [
          {
            step: "01",
            title: "Kiểm tra tình trạng của bé",
            detail:
              "Đánh giá tình trạng và nhu cầu chăm sóc của bé trước mỗi buổi.",
          },
          {
            step: "02",
            title: "Tắm thủy liệu",
            detail:
              "Thực hiện tắm thủy liệu phù hợp với độ tuổi và tình trạng của bé.",
          },
          {
            step: "03",
            title: "Massage cho bé",
            detail: "Kết hợp massage nhẹ nhàng trong cùng buổi chăm sóc.",
          },
          {
            step: "04",
            title: "Kiểm tra và tư vấn định kỳ",
            detail:
              "Thực hiện 2 lần kiểm tra, tư vấn sức khỏe và hướng dẫn phụ huynh chăm sóc bé.",
          },
        ],

        processEn: [
          {
            step: "01",
            title: "Baby Assessment",
            detail:
              "We assess the baby's condition and care needs before each session.",
          },
          {
            step: "02",
            title: "Hydrotherapy Bath",
            detail:
              "Hydrotherapy bathing is provided according to the baby's age and condition.",
          },
          {
            step: "03",
            title: "Baby Massage",
            detail:
              "Gentle baby massage is incorporated into the same care session.",
          },
          {
            step: "04",
            title: "Periodic Health Check and Consultation",
            detail:
              "Two health checks and consultations are provided, together with guidance for parents on baby care.",
          },
        ],

        benefits: [
          "10 buổi tắm thủy liệu kết hợp massage cho bé",
          "2 lần kiểm tra và tư vấn sức khỏe",
          "Theo dõi tình trạng của bé định kỳ",
          "Chăm sóc phù hợp với độ tuổi và nhu cầu của bé",
          "Phụ huynh được tư vấn và hướng dẫn trong quá trình chăm sóc",
        ],

        benefitsEn: [
          "10 hydrotherapy bathing and baby massage sessions",
          "2 health checks and consultations",
          "Regular monitoring of the baby's condition",
          "Care adapted to the baby's age and needs",
          "Ongoing guidance and consultation for parents",
        ],

        faqs: [
          {
            question: "Gói chăm sóc bé toàn diện gồm những gì?",
            answer:
              "Gói gồm 10 buổi tắm thủy liệu kết hợp massage cho bé và 2 lần kiểm tra, tư vấn sức khỏe.",
          },
          {
            question:
              "Tắm thủy liệu và massage có thực hiện cùng một buổi không?",
            answer:
              "Có. Hai dịch vụ được thiết kế kết hợp trong cùng một buổi chăm sóc.",
          },
          {
            question: "Có bao nhiêu lần kiểm tra và tư vấn sức khỏe?",
            answer:
              "Gói toàn diện bao gồm 2 lần kiểm tra và tư vấn sức khỏe, được bố trí định kỳ trong quá trình sử dụng gói.",
          },
          {
            question: "Gói chăm sóc bé có thể thực hiện tại nhà không?",
            answer:
              "Có. Dịch vụ có thể được thực hiện tại nhà hoặc tại Maia Care tùy theo nhu cầu và khu vực phục vụ.",
          },
        ],

        faqsEn: [
          {
            question:
              "What is included in the Comprehensive Baby Care Package?",
            answer:
              "The package includes 10 hydrotherapy bathing and baby massage sessions, plus 2 health checks and consultations.",
          },
          {
            question:
              "Are hydrotherapy bathing and baby massage provided in the same session?",
            answer:
              "Yes. The two services are designed to be combined in the same care session.",
          },
          {
            question: "How many health checks and consultations are included?",
            answer:
              "The Comprehensive Package includes 2 health checks and consultations scheduled periodically throughout the care program.",
          },
          {
            question: "Can the baby care package be provided at home?",
            answer:
              "Yes. The service can be provided either at home or at Maia Care, depending on the customer's needs and service area.",
          },
        ],
      },
    ],
  },

  pregnant: {
    groupTitle: "Combo chăm sóc mẹ và bé",
    groupTitleEn: "Mother & Baby Care Packages",
    img: "https://placehold.co/800x600/A8BFA8/ffffff?text=Combo+Care",

    thumbs: [
      "https://placehold.co/200x160/A8BFA8/ffffff?text=Combo+1",
      "https://placehold.co/200x160/F7F1E8/8eaa8e?text=Combo+2",
      "https://placehold.co/200x160/E2CFC2/7a6b5a?text=Combo+3",
    ],

    items: [
      {
        id: 0,
        name: 'Combo "Mẹ khỏe - Bé yêu"',
        nameEn: '"Healthy Mom – Happy Baby" Package',
        price: "790,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price5d: "3,750,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price7d: "5,250,000đ",
        price7dUnit: "7 buổi",
        price7dUnitEn: "7 sessions",
        duration: "90 – 120 phút / buổi",
        durationEn: "90 – 120 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Combo 5 buổi tiết kiệm 10%",
        packageInfoEn: "5-session package with 10% savings",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          'Combo "Mẹ khỏe - Bé yêu" kết hợp chăm sóc toàn diện cho cả mẹ và bé trong cùng một buổi, tiết kiệm thời gian và chi phí.',

        shortDescriptionEn:
          "The Healthy Mom – Happy Baby Package combines comprehensive care for both mother and baby in one session, saving time and cost.",

        images: [
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Combo+Mẹ+Khỏe",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Mẹ+và+Bé",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Hạnh+phúc",
        ],

        features: [
          { icon: "leaf", label: "Toàn diện", labelEn: "Comprehensive" },
          { icon: "heart", label: "Tiết kiệm", labelEn: "Cost-effective" },
          { icon: "user", label: "Tiện lợi", labelEn: "Convenient" },
          { icon: "star", label: "Chuyên nghiệp", labelEn: "Professional" },
        ],

        description:
          'Combo "Mẹ khỏe - Bé yêu" là gói dịch vụ kết hợp chăm sóc cho cả mẹ và bé trong cùng một buổi. Chuyên viên sẽ thực hiện massage và chăm sóc cho mẹ, sau đó chuyển sang chăm sóc bé — tắm, massage và tư vấn sức khỏe tổng quát. Đây là giải pháp lý tưởng cho các gia đình bận rộn muốn đảm bảo cả mẹ và bé đều được chăm sóc tốt nhất.',

        descriptionEn:
          "The Healthy Mom – Happy Baby Package combines care for both mother and baby in the same session. The professional first provides massage and postpartum care for the mother, then cares for the baby through bathing, massage, and basic health consultation. It is an ideal option for busy families who want coordinated care.",

        process: [
          {
            step: "01",
            title: "Tư vấn và lập kế hoạch",
            detail:
              "Chuyên viên trao đổi về nhu cầu của mẹ và bé để thiết lập lịch trình buổi chăm sóc phù hợp.",
          },
          {
            step: "02",
            title: "Chăm sóc mẹ (45–60 phút)",
            detail:
              "Massage phục hồi hoặc thư giãn cho mẹ theo tình trạng hiện tại.",
          },
          {
            step: "03",
            title: "Chăm sóc bé (45–60 phút)",
            detail: "Tắm, massage và kiểm tra sức khỏe cơ bản cho bé.",
          },
          {
            step: "04",
            title: "Tư vấn tổng kết",
            detail:
              "Chia sẻ nhận xét về tình trạng của cả mẹ và bé, tư vấn chăm sóc tại nhà.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Consultation and Planning",
            detail:
              "We discuss the needs of both mother and baby and create an appropriate session plan.",
          },
          {
            step: "02",
            title: "Mother Care (45–60 minutes)",
            detail:
              "We provide recovery or relaxation massage based on the mother's current condition.",
          },
          {
            step: "03",
            title: "Baby Care (45–60 minutes)",
            detail:
              "We provide bathing, massage, and a basic health check for the baby.",
          },
          {
            step: "04",
            title: "Final Consultation",
            detail:
              "We share observations about mother and baby and provide home-care guidance.",
          },
        ],

        benefits: [
          "Tiết kiệm thời gian với 2 dịch vụ trong 1 buổi",
          "Tiết kiệm chi phí hơn so với đặt riêng lẻ",
          "Mẹ và bé đều được chăm sóc toàn diện",
          "Chuyên viên theo dõi sự phát triển theo lịch",
          "Phù hợp gia đình bận rộn",
        ],
        benefitsEn: [
          "Saves time by combining two services in one session",
          "More cost-effective than booking separately",
          "Comprehensive care for both mother and baby",
          "Scheduled monitoring by the professional",
          "Suitable for busy families",
        ],

        faqs: [
          {
            question: "Thứ tự chăm sóc mẹ hay bé trước?",
            answer:
              "Thông thường chăm sóc mẹ trước để bé ngủ; nếu bé đang đói hoặc quấy, có thể đổi thứ tự.",
          },
          {
            question: "Combo có thể điều chỉnh dịch vụ không?",
            answer:
              "Có. Ba mẹ có thể thay thế các dịch vụ trong combo theo nhu cầu cụ thể.",
          },
          {
            question: "Có ưu đãi khi mua nhiều buổi không?",
            answer:
              "Có, combo 5 buổi tiết kiệm 10% và combo 10 buổi tiết kiệm 15%.",
          },
          {
            question: "Cần đặt lịch trước bao lâu?",
            answer:
              "Khuyến nghị đặt trước ít nhất 24 giờ, đặc biệt vào cuối tuần.",
          },
        ],
        faqsEn: [
          {
            question: "Who is cared for first, the mother or the baby?",
            answer:
              "The mother is usually cared for first so the baby can rest. If the baby is hungry or unsettled, the order can be adjusted.",
          },
          {
            question: "Can the services in the package be customized?",
            answer:
              "Yes. Parents can discuss service adjustments based on their specific needs.",
          },
          {
            question: "Are there discounts for multiple sessions?",
            answer:
              "Yes. The 5-session package saves 10%, while the 10-session package saves 15%.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "We recommend booking at least 24 hours in advance, especially on weekends.",
          },
        ],
      },

      {
        id: 1,
        name: 'Combo "Mẹ phục hồi - Bé khỏe"',
        nameEn: "\"Mom's Recovery – Baby's Health\" Package",
        price: "990,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price5d: "4,700,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price7d: "6,580,000đ",
        price7dUnit: "7 buổi",
        price7dUnitEn: "7 sessions",
        duration: "90 – 120 phút / buổi",
        durationEn: "90 – 120 minutes / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Combo 5 buổi tiết kiệm 10%",
        packageInfoEn: "5-session package with 10% savings",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Combo tập trung vào phục hồi sau sinh cho mẹ kết hợp chăm sóc sức khỏe toàn diện cho bé, đặc biệt phù hợp trong 4–8 tuần đầu sau sinh.",

        shortDescriptionEn:
          "This package focuses on postpartum recovery for the mother while providing comprehensive baby care, making it especially suitable for the first 4–8 weeks after childbirth.",

        images: [
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Phục+Hồi+Mẹ",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Bé+Khỏe",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Yêu+thương",
        ],

        features: [
          { icon: "leaf", label: "Phục hồi", labelEn: "Recovery-focused" },
          { icon: "heart", label: "Toàn diện", labelEn: "Comprehensive" },
          { icon: "user", label: "Chuyên biệt", labelEn: "Specialized" },
          { icon: "star", label: "Hiệu quả", labelEn: "Effective" },
        ],

        description:
          'Gói "Mẹ phục hồi - Bé khỏe" được thiết kế đặc biệt cho giai đoạn 4–8 tuần sau sinh — thời điểm mẹ cần hỗ trợ phục hồi nhiều nhất. Dịch vụ cho mẹ tập trung vào massage bụng, chăm sóc vết thương và phục hồi thể lực; trong khi đó bé được kiểm tra sức khỏe và tắm massage đúng kỹ thuật.',

        descriptionEn:
          "The Mom's Recovery – Baby's Health Package is designed for the first 4–8 weeks after childbirth, when mothers often need the most recovery support. Mother's care focuses on abdominal massage, wound care, and physical relaxation, while the baby receives health checks and appropriate bathing and massage.",

        process: [
          {
            step: "01",
            title: "Đánh giá tình trạng mẹ",
            detail:
              "Kiểm tra quá trình hồi phục của mẹ bao gồm vết mổ/khâu, tình trạng sữa và tâm lý.",
          },
          {
            step: "02",
            title: "Phục hồi cho mẹ (60 phút)",
            detail:
              "Massage bụng y khoa, chăm sóc vết thương và massage thư giãn lưng/vai.",
          },
          {
            step: "03",
            title: "Chăm sóc bé (45 phút)",
            detail:
              "Kiểm tra cân nặng, tắm thủy liệu hoặc massage và tư vấn dinh dưỡng.",
          },
          {
            step: "04",
            title: "Hướng dẫn toàn diện",
            detail:
              "Tư vấn dinh dưỡng cho mẹ cho bú và lịch sinh hoạt khoa học cho cả gia đình.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Mother's Condition Assessment",
            detail:
              "We review the mother's recovery, including incision or stitches, breastfeeding condition, and emotional well-being.",
          },
          {
            step: "02",
            title: "Mother Recovery (60 minutes)",
            detail:
              "We provide medical abdominal massage, wound care, and relaxing back/shoulder massage as appropriate.",
          },
          {
            step: "03",
            title: "Baby Care (45 minutes)",
            detail:
              "We check weight and provide hydrotherapy or massage, along with nutrition guidance.",
          },
          {
            step: "04",
            title: "Comprehensive Guidance",
            detail:
              "We provide breastfeeding nutrition guidance and a practical daily routine for the family.",
          },
        ],

        benefits: [
          "Tập trung phục hồi toàn diện cho mẹ sau sinh",
          "Theo dõi sức khỏe bé trong giai đoạn quan trọng",
          "Tư vấn dinh dưỡng cho mẹ đang cho con bú",
          "Giảm nguy cơ trầm cảm sau sinh",
          "Hỗ trợ thiết lập lịch sinh hoạt khoa học",
        ],
        benefitsEn: [
          "Comprehensive postpartum recovery support",
          "Baby health monitoring during an important period",
          "Nutrition guidance for breastfeeding mothers",
          "Support for postpartum emotional well-being",
          "Help establishing a healthy family routine",
        ],

        faqs: [
          {
            question: "Gói này có phù hợp với mẹ sinh mổ không?",
            answer:
              "Phù hợp và đặc biệt được khuyến nghị cho mẹ sinh mổ để hỗ trợ lành vết thương và phục hồi thể chất.",
          },
          {
            question: "Thời gian bắt đầu sử dụng gói là khi nào?",
            answer:
              "Có thể bắt đầu từ ngày thứ 3–5 sau sinh hoặc ngay sau khi xuất viện.",
          },
          {
            question: "Có bao gồm tư vấn nuôi con bằng sữa mẹ không?",
            answer:
              "Có, chuyên viên tư vấn kỹ thuật cho bú, cách duy trì sữa và xử lý các vấn đề thường gặp.",
          },
          {
            question: "Mua bao nhiêu buổi là hợp lý?",
            answer:
              "Khuyến nghị đặt combo 10 buổi để theo dõi suốt 4–6 tuần đầu sau sinh.",
          },
        ],
        faqsEn: [
          {
            question:
              "Is this package suitable for mothers who had a C-section?",
            answer:
              "Yes. It can be particularly useful for mothers recovering from a C-section, subject to appropriate wound healing and professional assessment.",
          },
          {
            question: "When can I start using the package?",
            answer:
              "It may begin around 3–5 days after childbirth or after discharge, depending on medical guidance and individual condition.",
          },
          {
            question: "Does it include breastfeeding support?",
            answer:
              "Yes. The professional can provide guidance on breastfeeding technique, maintaining milk supply, and common breastfeeding concerns.",
          },
          {
            question: "How many sessions should I book?",
            answer:
              "A 10-session package may be suitable for follow-up during the first 4–6 weeks, depending on individual needs.",
          },
        ],
      },

      {
        id: 2,
        name: 'Combo "Mẹ và bé toàn diện"',
        nameEn: '"Complete Mom & Baby Care" Package',
        price: "1,190,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price5d: "5,650,000đ",
        price5dUnit: "5 buổi",
        price5dUnitEn: "5 sessions",
        price7d: "7,900,000đ",
        price7dUnit: "7 buổi",
        price7dUnitEn: "7 sessions",
        duration: "2 giờ / buổi",
        durationEn: "2 hours / session",
        location: "Tại nhà hoặc tại Maia Care",
        locationEn: "At home or at Maia Care",
        packageInfo: "Combo 10 buổi tiết kiệm 15%",
        packageInfoEn: "10-session package with 15% savings",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói chăm sóc toàn diện nhất của Maia Care, bao gồm đầy đủ các dịch vụ cho cả mẹ và bé, đồng hành cùng gia đình trong suốt tháng đầu sau sinh.",

        shortDescriptionEn:
          "Maia Care's most comprehensive package combines essential services for both mother and baby and supports the family throughout the first month after childbirth.",

        images: [
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Toàn+Diện",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Mẹ+và+Bé",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Gia+đình",
        ],

        features: [
          { icon: "leaf", label: "Toàn diện", labelEn: "Comprehensive" },
          { icon: "heart", label: "Cao cấp", labelEn: "Premium" },
          { icon: "user", label: "Đồng hành", labelEn: "Companion" },
          { icon: "star", label: "Tốt nhất", labelEn: "Complete" },
        ],

        description:
          'Combo "Mẹ và bé toàn diện" là gói dịch vụ đỉnh cao của Maia Care, đảm bảo mẹ và bé được chăm sóc ở mức độ đầy đủ nhất. Mỗi buổi kéo dài 2 giờ với toàn bộ các dịch vụ: chăm sóc phục hồi cho mẹ, kiểm tra sức khỏe, tắm và massage cho bé, tư vấn dinh dưỡng và hỗ trợ tâm lý sau sinh.',

        descriptionEn:
          "The Complete Mom & Baby Care Package is Maia Care's most comprehensive service option. Each two-hour session combines postpartum recovery care for the mother, baby health checks, baby bathing and massage, nutrition consultation, and postpartum emotional support.",

        process: [
          {
            step: "01",
            title: "Đánh giá toàn diện (15 phút)",
            detail:
              "Kiểm tra tình trạng mẹ và bé, ghi nhận những thay đổi kể từ buổi trước.",
          },
          {
            step: "02",
            title: "Chăm sóc mẹ (75 phút)",
            detail:
              "Massage toàn thân, chăm sóc vết thương, tư vấn dinh dưỡng và hỗ trợ tâm lý.",
          },
          {
            step: "03",
            title: "Chăm sóc bé (45 phút)",
            detail: "Kiểm tra sức khỏe, tắm thủy liệu và massage bé.",
          },
          {
            step: "04",
            title: "Tổng kết và kế hoạch (15 phút)",
            detail:
              "Báo cáo chi tiết tình trạng mẹ và bé, lên kế hoạch buổi tiếp theo.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Comprehensive Assessment (15 minutes)",
            detail:
              "We review the condition of both mother and baby and record changes since the previous session.",
          },
          {
            step: "02",
            title: "Mother Care (75 minutes)",
            detail:
              "We provide full-body massage, wound care, nutrition guidance, and emotional support as appropriate.",
          },
          {
            step: "03",
            title: "Baby Care (45 minutes)",
            detail:
              "We provide a health check, hydrotherapy, and baby massage.",
          },
          {
            step: "04",
            title: "Summary and Plan (15 minutes)",
            detail:
              "We provide a detailed update on mother and baby and plan the next session.",
          },
        ],

        benefits: [
          "Chăm sóc mẹ và bé đầy đủ nhất",
          "Hỗ trợ tâm lý sau sinh cho mẹ",
          "Theo dõi sức khỏe theo lịch khoa học",
          "Tiết kiệm chi phí với combo dài hạn",
          "Nhận báo cáo chi tiết sau mỗi buổi",
        ],
        benefitsEn: [
          "Most complete care for mother and baby",
          "Postpartum emotional support",
          "Structured health monitoring",
          "Long-term package savings",
          "Detailed report after each session",
        ],

        faqs: [
          {
            question: "Combo này khác gì so với các gói khác?",
            answer:
              "Đây là gói toàn diện nhất, bao gồm thêm hỗ trợ tâm lý sau sinh và báo cáo theo dõi sức khỏe sau mỗi buổi.",
          },
          {
            question: "Có thể tặng gói này như quà sinh nhật không?",
            answer:
              "Hoàn toàn có. Maia Care hỗ trợ làm voucher quà tặng theo yêu cầu.",
          },
          {
            question: "Thời gian sử dụng combo có giới hạn không?",
            answer:
              "Combo 10 buổi có giá trị sử dụng trong vòng 3 tháng từ ngày mua.",
          },
          {
            question: "Có thể điều chỉnh nội dung buổi chăm sóc không?",
            answer:
              "Có, chuyên viên sẽ linh hoạt điều chỉnh theo tình trạng và nhu cầu của mẹ và bé mỗi buổi.",
          },
        ],
        faqsEn: [
          {
            question: "How is this package different from the others?",
            answer:
              "It is the most comprehensive package and includes postpartum emotional support and health monitoring reports after each session.",
          },
          {
            question:
              "Can this package be given as a birthday or maternity gift?",
            answer: "Yes. Maia Care can prepare a gift voucher upon request.",
          },
          {
            question: "Does the package have an expiration period?",
            answer:
              "The 10-session package is valid for 3 months from the purchase date.",
          },
          {
            question: "Can the session content be adjusted?",
            answer:
              "Yes. The professional can adjust the session according to the condition and needs of the mother and baby.",
          },
        ],
      },

      {
        id: 3,
        name: 'Combo "Đồng hành sau sinh"',
        nameEn: '"Postpartum Care Companion" Package',
        price: "1,390,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        price1m: "9,900,000đ",
        price1mUnit: "tháng",
        price1mUnitEn: "month",
        duration: "60 phút / buổi",
        durationEn: "60 minutes / session",
        location: "Tại nhà",
        locationEn: "At home",
        packageInfo: "Đồng hành cả tháng đầu",
        packageInfoEn: "Support throughout the first month",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          'Gói "Đồng hành sau sinh" cung cấp chuyên viên cố định đến nhà hàng ngày trong tháng đầu, hỗ trợ toàn diện về chăm sóc mẹ, chăm sóc bé và hướng dẫn ba mẹ tự chăm sóc.',

        shortDescriptionEn:
          "The Postpartum Care Companion Package provides a dedicated professional who visits the home during the first month to support mother and baby care and teach parents essential skills.",

        images: [
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Đồng+Hành",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tháng+Đầu",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Hỗ+trợ",
        ],

        features: [
          { icon: "leaf", label: "Liên tục", labelEn: "Continuous" },
          { icon: "heart", label: "Đồng hành", labelEn: "Companion" },
          {
            icon: "user",
            label: "Chuyên viên cố định",
            labelEn: "Dedicated professional",
          },
          { icon: "star", label: "Toàn diện", labelEn: "Comprehensive" },
        ],

        description:
          'Tháng đầu sau sinh là giai đoạn khó khăn nhất nhưng cũng quan trọng nhất. Gói "Đồng hành sau sinh" của Maia Care cung cấp chuyên viên cố định đến nhà hàng ngày, trở thành người bạn đồng hành tin cậy của gia đình trong suốt giai đoạn này.',

        descriptionEn:
          "The first month after childbirth can be both challenging and important. Maia Care's Postpartum Care Companion Package provides a dedicated professional who visits the home regularly and becomes a trusted support person for the family during this period.",

        process: [
          {
            step: "01",
            title: "Gặp gỡ và lập kế hoạch",
            detail:
              "Chuyên viên gặp gỡ gia đình, tìm hiểu nhu cầu và thiết lập lịch trình chăm sóc cả tháng.",
          },
          {
            step: "02",
            title: "Chăm sóc hàng ngày",
            detail:
              "Đến nhà đúng giờ, thực hiện chăm sóc mẹ và bé theo kế hoạch đã thống nhất.",
          },
          {
            step: "03",
            title: "Đào tạo ba mẹ",
            detail:
              "Song song chăm sóc, hướng dẫn ba mẹ các kỹ năng tự chăm sóc mẹ và bé tại nhà.",
          },
          {
            step: "04",
            title: "Theo dõi và báo cáo",
            detail:
              "Ghi nhận sự tiến bộ hàng ngày và báo cáo cho gia đình định kỳ.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Meet and Plan",
            detail:
              "The professional meets the family, understands their needs, and creates a monthly care schedule.",
          },
          {
            step: "02",
            title: "Daily Care",
            detail:
              "The professional arrives on time and provides mother and baby care according to the agreed plan.",
          },
          {
            step: "03",
            title: "Parent Education",
            detail:
              "Alongside care, the professional teaches parents practical skills for caring for themselves and their baby.",
          },
          {
            step: "04",
            title: "Monitoring and Reporting",
            detail:
              "Daily progress is recorded and updates are provided to the family regularly.",
          },
        ],

        benefits: [
          "Chuyên viên cố định tạo cảm giác an tâm",
          "Hỗ trợ liên tục trong giai đoạn khó khăn nhất",
          "Ba mẹ học được kỹ năng chăm sóc từ chuyên viên",
          "Giảm stress và lo lắng sau sinh",
          "Gia đình tự tin hơn sau giai đoạn được đồng hành",
        ],
        benefitsEn: [
          "A dedicated professional provides continuity and reassurance",
          "Ongoing support during the most demanding period",
          "Parents learn practical care skills",
          "Helps reduce postpartum stress and worry",
          "Builds family confidence after the support period",
        ],

        faqs: [
          {
            question: "Chuyên viên có thể đến vào buổi sáng sớm không?",
            answer:
              "Có, Maia Care hỗ trợ lịch từ 6:00 sáng theo yêu cầu của gia đình.",
          },
          {
            question: "Nếu chuyên viên nghỉ thì sao?",
            answer:
              "Maia Care luôn có chuyên viên dự phòng để đảm bảo không gián đoạn lịch chăm sóc.",
          },
          {
            question: "Có thể đặt gói này trước khi sinh không?",
            answer:
              "Có và rất nên. Đặt trước để đảm bảo có chuyên viên phù hợp sẵn sàng ngay sau khi sinh.",
          },
          {
            question: "Chi phí gói cả tháng là bao nhiêu?",
            answer:
              "Liên hệ Maia Care để nhận báo giá gói tháng với mức chiết khấu đặc biệt.",
          },
        ],
        faqsEn: [
          {
            question: "Can the professional come early in the morning?",
            answer:
              "Yes. Maia Care can arrange visits from 6:00 AM upon request.",
          },
          {
            question:
              "What happens if the assigned professional is unavailable?",
            answer:
              "Maia Care has backup professionals to help prevent interruptions to scheduled care.",
          },
          {
            question: "Can I book this package before giving birth?",
            answer:
              "Yes, and early booking is recommended to help secure a suitable professional after childbirth.",
          },
          {
            question: "How much does the full-month package cost?",
            answer:
              "Please contact Maia Care for a monthly quotation and applicable package discount.",
          },
        ],
      },
    ],
  },

  complex: {
    groupTitle: "Gói tặng kèm tư vấn dinh dưỡng",
    groupTitleEn: "Complimentary Nutrition Consultation Packages",
    img: "https://placehold.co/800x600/c4b5a5/ffffff?text=Nutrition",

    thumbs: [
      "https://placehold.co/200x160/c4b5a5/ffffff?text=Thumb+1",
      "https://placehold.co/200x160/F7F1E8/8eaa8e?text=Thumb+2",
      "https://placehold.co/200x160/E2CFC2/7a6b5a?text=Thumb+3",
    ],

    items: [
      {
        id: 0,
        name: "Tư vấn dinh dưỡng cho mẹ sau sinh",
        nameEn: "Postpartum Nutrition Consultation for Mothers",
        price: "299,000đ",
        priceUnit: "buổi",
        priceUnitEn: "session",
        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",
        location: "Online hoặc tại Maia Care",
        locationEn: "Online or at Maia Care",
        packageInfo: "Tư vấn 1-1 với chuyên gia",
        packageInfoEn: "One-on-one expert consultation",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Buổi tư vấn dinh dưỡng cá nhân hóa cho mẹ sau sinh, giúp mẹ hiểu rõ nhu cầu dinh dưỡng, xây dựng thực đơn phù hợp và phục hồi sức khỏe nhanh hơn.",

        shortDescriptionEn:
          "Personalized postpartum nutrition consultation helps mothers understand their nutritional needs, build a suitable meal plan, and support recovery.",

        images: [
          "https://placehold.co/800x600/c4b5a5/ffffff?text=Dinh+dưỡng",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Tư+vấn",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Sức+khỏe+mẹ",
        ],

        features: [
          { icon: "leaf", label: "Khoa học", labelEn: "Science-based" },
          { icon: "heart", label: "Cá nhân hóa", labelEn: "Personalized" },
          { icon: "user", label: "Chuyên gia", labelEn: "Expert-led" },
          { icon: "star", label: "Thực tiễn", labelEn: "Practical" },
        ],

        description:
          "Dinh dưỡng sau sinh đóng vai trò cực kỳ quan trọng trong quá trình phục hồi của mẹ và chất lượng sữa mẹ cho bé. Chuyên gia dinh dưỡng của Maia Care sẽ đánh giá tình trạng sức khỏe, thói quen ăn uống và nhu cầu dinh dưỡng cụ thể của mẹ, từ đó xây dựng kế hoạch ăn uống phù hợp, thực tế và dễ thực hiện.",

        descriptionEn:
          "Postpartum nutrition plays an important role in maternal recovery and breastfeeding. Maia Care's nutrition specialist reviews the mother's health condition, eating habits, and nutritional needs, then develops a practical and personalized nutrition plan.",

        process: [
          {
            step: "01",
            title: "Khảo sát ban đầu",
            detail:
              "Thu thập thông tin về tình trạng sức khỏe, thói quen ăn uống, dị ứng và sở thích thực phẩm của mẹ.",
          },
          {
            step: "02",
            title: "Đánh giá dinh dưỡng",
            detail:
              "Phân tích chế độ ăn hiện tại và xác định các thiếu hụt dinh dưỡng cần bổ sung.",
          },
          {
            step: "03",
            title: "Xây dựng kế hoạch ăn uống",
            detail:
              "Thiết kế thực đơn cá nhân hóa phù hợp với hoàn cảnh và nhu cầu cụ thể của mẹ.",
          },
          {
            step: "04",
            title: "Theo dõi và điều chỉnh",
            detail:
              "Hỗ trợ mẹ thực hiện kế hoạch và điều chỉnh linh hoạt theo phản hồi.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Initial Assessment",
            detail:
              "We collect information about health, eating habits, food allergies, and food preferences.",
          },
          {
            step: "02",
            title: "Nutrition Assessment",
            detail:
              "We review the current diet and identify nutritional gaps that may need attention.",
          },
          {
            step: "03",
            title: "Meal Plan Development",
            detail:
              "We create a personalized meal plan based on the mother's circumstances and needs.",
          },
          {
            step: "04",
            title: "Follow-Up and Adjustment",
            detail:
              "We support implementation and adjust the plan based on feedback.",
          },
        ],

        benefits: [
          "Thực đơn cá nhân hóa theo tình trạng riêng",
          "Cải thiện chất lượng sữa mẹ",
          "Phục hồi sức khỏe nhanh hơn",
          "Kiểm soát cân nặng sau sinh khoa học",
          "Tư vấn thực phẩm cần tránh khi cho con bú",
        ],
        benefitsEn: [
          "Personalized meal plan",
          "Supports breastfeeding nutrition",
          "Supports postpartum recovery",
          "Science-based weight management guidance",
          "Guidance on foods to limit or avoid while breastfeeding",
        ],

        faqs: [
          {
            question: "Có thể tư vấn online không?",
            answer:
              "Có. Maia Care hỗ trợ tư vấn dinh dưỡng qua video call tiện lợi từ nhà.",
          },
          {
            question: "Chuyên gia có kinh nghiệm với mẹ sau sinh không?",
            answer:
              "Chuyên gia dinh dưỡng của Maia Care được đào tạo chuyên biệt về dinh dưỡng bà mẹ và trẻ em.",
          },
          {
            question: "Thực đơn có phức tạp không?",
            answer:
              "Không. Thực đơn được thiết kế thực tế, dễ chuẩn bị, phù hợp với điều kiện và thói quen ăn uống của gia đình Việt.",
          },
          {
            question: "Có theo dõi sau buổi tư vấn không?",
            answer:
              "Có. Maia Care hỗ trợ tư vấn bổ sung qua chat/điện thoại trong 7 ngày sau buổi tư vấn.",
          },
        ],
        faqsEn: [
          {
            question: "Can the consultation be online?",
            answer:
              "Yes. Maia Care offers convenient nutrition consultations by video call.",
          },
          {
            question:
              "Does the specialist have postpartum nutrition experience?",
            answer:
              "Maia Care's nutrition specialist focuses on maternal and child nutrition.",
          },
          {
            question: "Is the meal plan complicated?",
            answer:
              "No. The plan is designed to be practical, easy to prepare, and suitable for Vietnamese family meals.",
          },
          {
            question: "Is there follow-up after the consultation?",
            answer:
              "Yes. Maia Care provides additional support by chat or phone for 7 days after the consultation.",
          },
        ],
      },

      {
        id: 1,
        name: "Gói thực đơn dinh dưỡng cho mẹ sau sinh",
        nameEn: "Postpartum Nutrition Meal Plan",
        price: "799,000đ",
        priceUnit: "tháng",
        priceUnitEn: "month",
        duration: "Theo dõi hàng tuần",
        durationEn: "Weekly follow-up",
        location: "Online hoặc tại Maia Care",
        locationEn: "Online or at Maia Care",
        packageInfo: "Gói 4 tuần đầu sau sinh",
        packageInfoEn: "4-week postpartum package",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói thực đơn dinh dưỡng chi tiết cho 4 tuần đầu sau sinh, bao gồm thực đơn hàng tuần, danh sách thực phẩm cần mua và hướng dẫn chế biến phù hợp.",

        shortDescriptionEn:
          "A detailed four-week postpartum nutrition meal plan with weekly menus, a shopping list, and practical preparation guidance.",

        images: [
          "https://placehold.co/800x600/c4b5a5/ffffff?text=Thực+đơn",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Dinh+dưỡng+mẹ",
          "https://placehold.co/800x600/A8BFA8/ffffff?text=Sức+khỏe",
        ],

        features: [
          { icon: "leaf", label: "Chi tiết", labelEn: "Detailed" },
          { icon: "heart", label: "Thực tiễn", labelEn: "Practical" },
          { icon: "user", label: "Linh hoạt", labelEn: "Flexible" },
          { icon: "star", label: "Khoa học", labelEn: "Science-based" },
        ],

        description:
          "Gói thực đơn dinh dưỡng 4 tuần cung cấp kế hoạch ăn uống chi tiết theo từng tuần, bao gồm 3 bữa chính và 2–3 bữa phụ mỗi ngày. Thực đơn được xây dựng dựa trên nguyên liệu phổ biến tại Việt Nam, dễ tìm mua và dễ chế biến, nhưng đảm bảo đủ dinh dưỡng cho mẹ phục hồi và có sữa dồi dào cho bé.",

        descriptionEn:
          "The four-week nutrition meal plan provides a detailed weekly eating schedule with three main meals and two to three snacks per day. It uses common Vietnamese ingredients that are easy to buy and prepare while supporting the mother's recovery and breastfeeding nutrition.",

        process: [
          {
            step: "01",
            title: "Thu thập thông tin",
            detail:
              "Tìm hiểu về loại sinh, tình trạng sức khỏe, dị ứng thực phẩm và sở thích ăn uống.",
          },
          {
            step: "02",
            title: "Xây dựng thực đơn tuần 1–2",
            detail:
              "Thiết kế thực đơn phù hợp với giai đoạn đầu sau sinh, tập trung bổ máu và hồi sức.",
          },
          {
            step: "03",
            title: "Thực đơn tuần 3–4",
            detail:
              "Điều chỉnh thực đơn theo sự hồi phục của mẹ, tăng dần đa dạng thực phẩm.",
          },
          {
            step: "04",
            title: "Theo dõi và cập nhật",
            detail:
              "Hỗ trợ điều chỉnh thực đơn theo phản hồi và tình trạng thực tế của mẹ.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Information Collection",
            detail:
              "We review delivery type, health condition, food allergies, and eating preferences.",
          },
          {
            step: "02",
            title: "Week 1–2 Meal Plan",
            detail:
              "We design meals for the early postpartum period with a focus on recovery and nutrient intake.",
          },
          {
            step: "03",
            title: "Week 3–4 Meal Plan",
            detail:
              "We adjust the plan as recovery progresses and gradually increase food variety.",
          },
          {
            step: "04",
            title: "Monitoring and Updates",
            detail:
              "We adjust the meal plan based on feedback and the mother's actual condition.",
          },
        ],

        benefits: [
          "Thực đơn chi tiết, dễ thực hiện",
          "Nguyên liệu Việt Nam, dễ mua, giá hợp lý",
          "Đủ dinh dưỡng cho mẹ phục hồi và có sữa",
          "Bao gồm danh sách thực phẩm cần tránh",
          "Có thể điều chỉnh linh hoạt theo khẩu vị",
        ],
        benefitsEn: [
          "Detailed and practical meal plan",
          "Accessible Vietnamese ingredients at reasonable cost",
          "Supports recovery and breastfeeding nutrition",
          "Includes foods to limit or avoid",
          "Flexible meal substitutions based on preferences",
        ],

        faqs: [
          {
            question: "Thực đơn có phù hợp với mẹ ăn chay không?",
            answer:
              "Có thể tùy chỉnh thực đơn cho mẹ ăn chay, đảm bảo đủ protein và vi chất từ thực vật.",
          },
          {
            question: "Có nhận file thực đơn sau khi đặt không?",
            answer:
              "Có, mẹ nhận được file PDF thực đơn chi tiết theo từng tuần sau buổi tư vấn.",
          },
          {
            question: "Thực đơn có tính theo calo không?",
            answer:
              "Có, mỗi ngày ăn được ước tính lượng calo và các nhóm dinh dưỡng chính.",
          },
          {
            question: "Nếu không thích một món có thể thay thế không?",
            answer:
              "Hoàn toàn có thể. Chuyên gia sẽ gợi ý các món thay thế có giá trị dinh dưỡng tương đương.",
          },
        ],
        faqsEn: [
          {
            question: "Can the plan be adapted for vegetarian mothers?",
            answer:
              "Yes. The plan can be customized to provide adequate protein and micronutrients from plant sources.",
          },
          {
            question: "Will I receive the meal plan file after booking?",
            answer:
              "Yes. You will receive a detailed weekly PDF meal plan after the consultation.",
          },
          {
            question: "Does the meal plan include calorie estimates?",
            answer:
              "Yes. Daily calorie estimates and the main nutrition groups can be included.",
          },
          {
            question: "Can I replace a dish I do not like?",
            answer:
              "Yes. The specialist can suggest nutritionally comparable alternatives.",
          },
        ],
      },

      {
        id: 2,
        name: "Tư vấn dinh dưỡng và thực đơn ăn dặm cho bé",
        nameEn: "Nutrition Consultation and Weaning Meal Plan for Babies",
        price: "599,000đ",
        priceUnit: "tháng",
        priceUnitEn: "month",
        duration: "45 – 60 phút / buổi",
        durationEn: "45 – 60 minutes / session",
        location: "Online hoặc tại Maia Care",
        locationEn: "Online or at Maia Care",
        packageInfo: "Tư vấn theo từng giai đoạn",
        packageInfoEn: "Guidance by developmental stage",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Tư vấn dinh dưỡng và xây dựng thực đơn ăn dặm cho bé theo từng giai đoạn phát triển, giúp bé bắt đầu hành trình ăn dặm khoa học, an toàn và ngon miệng.",

        shortDescriptionEn:
          "Nutrition consultation and weaning meal planning for babies supports a safe, practical, and age-appropriate start to complementary feeding.",

        images: [
          "https://placehold.co/800x600/c4b5a5/ffffff?text=Ăn+Dặm",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Bé+Yêu",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Dinh+dưỡng+bé",
        ],

        features: [
          { icon: "leaf", label: "Khoa học", labelEn: "Science-based" },
          { icon: "heart", label: "An toàn", labelEn: "Safe" },
          {
            icon: "user",
            label: "Phù hợp lứa tuổi",
            labelEn: "Age-appropriate",
          },
          { icon: "star", label: "Thực tiễn", labelEn: "Practical" },
        ],

        description:
          "Ăn dặm là giai đoạn quan trọng trong sự phát triển của bé, bắt đầu từ 4–6 tháng tuổi. Chuyên gia dinh dưỡng của Maia Care sẽ hướng dẫn ba mẹ phương pháp ăn dặm phù hợp (ăn dặm truyền thống, BLW hoặc kết hợp), xây dựng thực đơn theo từng giai đoạn và giải đáp mọi băn khoăn của ba mẹ.",

        descriptionEn:
          "Complementary feeding is an important stage in a baby's development. Maia Care's nutrition specialist guides parents on appropriate complementary-feeding approaches, helps build age-appropriate meal plans, and answers parents' questions throughout the transition.",

        process: [
          {
            step: "01",
            title: "Đánh giá sẵn sàng ăn dặm",
            detail:
              "Kiểm tra các dấu hiệu bé sẵn sàng bắt đầu ăn dặm và chọn thời điểm phù hợp.",
          },
          {
            step: "02",
            title: "Lựa chọn phương pháp",
            detail:
              "Tư vấn các phương pháp ăn dặm và giúp ba mẹ chọn phù hợp với gia đình.",
          },
          {
            step: "03",
            title: "Xây dựng thực đơn giai đoạn 1",
            detail:
              "Thiết kế thực đơn bột/cháo loãng cho tháng đầu ăn dặm với các thực phẩm an toàn.",
          },
          {
            step: "04",
            title: "Kế hoạch theo dõi",
            detail:
              "Lập lịch theo dõi và tư vấn bổ sung khi bé chuyển sang giai đoạn ăn dặm mới.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Assess Readiness for Complementary Feeding",
            detail:
              "We review signs that the baby is ready and identify an appropriate starting time.",
          },
          {
            step: "02",
            title: "Choose a Feeding Approach",
            detail:
              "We discuss different approaches and help parents choose one that fits their family.",
          },
          {
            step: "03",
            title: "Build the Stage-One Meal Plan",
            detail:
              "We design a simple first-stage meal plan using age-appropriate foods.",
          },
          {
            step: "04",
            title: "Follow-Up Plan",
            detail:
              "We establish follow-up guidance as the baby progresses to new feeding stages.",
          },
        ],

        benefits: [
          "Bắt đầu ăn dặm đúng thời điểm và đúng cách",
          "Thực đơn phù hợp với từng giai đoạn phát triển",
          "Phòng ngừa dị ứng thực phẩm hiệu quả",
          "Bé phát triển cân nặng và chiều cao tốt",
          "Ba mẹ tự tin hơn trong hành trình ăn dặm của bé",
        ],
        benefitsEn: [
          "Supports starting complementary feeding appropriately",
          "Age-appropriate meal plans",
          "Practical allergy-introduction guidance",
          "Supports healthy growth",
          "Builds parental confidence",
        ],

        faqs: [
          {
            question: "Bé bao nhiêu tháng thì bắt đầu ăn dặm?",
            answer:
              "WHO và Bộ Y tế Việt Nam khuyến nghị bắt đầu ăn dặm khi bé đủ 6 tháng tuổi. Một số trường hợp có thể sớm hơn từ 4 tháng nhưng cần tham khảo bác sĩ.",
          },
          {
            question: "Phương pháp BLW có an toàn không?",
            answer:
              "BLW (Baby-Led Weaning) an toàn khi được thực hiện đúng cách. Chuyên gia sẽ hướng dẫn ba mẹ chi tiết.",
          },
          {
            question: "Thực đơn có bao gồm công thức nấu không?",
            answer:
              "Có, mỗi món ăn đều kèm theo công thức và hướng dẫn chế biến phù hợp với lứa tuổi của bé.",
          },
          {
            question: "Bé kén ăn có cần tư vấn đặc biệt không?",
            answer:
              "Có, Maia Care có tư vấn chuyên biệt cho bé kén ăn, biếng ăn với các chiến lược hiệu quả.",
          },
        ],
        faqsEn: [
          {
            question: "At what age should a baby start complementary feeding?",
            answer:
              "Many health organizations recommend starting around 6 months when the baby shows readiness signs. Individual circumstances should be discussed with a qualified healthcare professional.",
          },
          {
            question: "Is BLW safe?",
            answer:
              "Baby-Led Weaning can be practiced safely when appropriate foods, textures, and supervision are used. Our specialist provides practical guidance.",
          },
          {
            question: "Does the meal plan include recipes?",
            answer:
              "Yes. Meals can include recipes and preparation guidance appropriate for the baby's age.",
          },
          {
            question: "Does Maia Care provide advice for picky eaters?",
            answer:
              "Yes. Maia Care can provide specialized feeding guidance for babies who are selective or reluctant to eat.",
          },
        ],
      },

      {
        id: 3,
        name: 'Gói dinh dưỡng "Mẹ khỏe - Bé ăn ngon"',
        nameEn: '"Healthy Mom – Happy Eater" Nutrition Package',
        price: "1,099,000đ",
        priceUnit: "tháng",
        priceUnitEn: "month",
        duration: "Theo dõi hàng tháng",
        durationEn: "Monthly follow-up",
        location: "Online hoặc tại Maia Care",
        locationEn: "Online or at Maia Care",
        packageInfo: "Gói 3 tháng toàn diện",
        packageInfoEn: "Comprehensive 3-month package",
        scheduling: "Đặt lịch trước",
        schedulingEn: "Book in advance",

        shortDescription:
          "Gói dinh dưỡng toàn diện đồng thời tư vấn cho cả mẹ đang cho con bú và bé đang ăn dặm — đảm bảo nguồn dinh dưỡng tốt nhất cho cả hai trong giai đoạn vàng.",

        shortDescriptionEn:
          "A coordinated nutrition package for breastfeeding mothers and babies starting complementary feeding, supporting both through an important developmental period.",

        images: [
          "https://placehold.co/800x600/c4b5a5/ffffff?text=Mẹ+Khỏe+Bé+Ngon",
          "https://placehold.co/800x600/F7F1E8/8eaa8e?text=Dinh+dưỡng",
          "https://placehold.co/800x600/E2CFC2/7a6b5a?text=Gia+đình+khỏe",
        ],

        features: [
          { icon: "leaf", label: "Toàn diện", labelEn: "Comprehensive" },
          { icon: "heart", label: "Đồng bộ", labelEn: "Coordinated" },
          { icon: "user", label: "Chuyên gia", labelEn: "Expert-led" },
          { icon: "star", label: "Tiết kiệm", labelEn: "Cost-effective" },
        ],

        description:
          'Gói "Mẹ khỏe - Bé ăn ngon" là giải pháp dinh dưỡng đồng bộ cho cả mẹ và bé trong giai đoạn vàng 6–12 tháng sau sinh. Chuyên gia sẽ xây dựng kế hoạch dinh dưỡng song song cho mẹ đang cho con bú và thực đơn ăn dặm cho bé, đảm bảo cả hai đều được nuôi dưỡng tối ưu.',

        descriptionEn:
          "The Healthy Mom – Happy Eater Nutrition Package provides coordinated nutrition support for mother and baby during the important 6–12 month postpartum period. The specialist develops a nutrition plan for the breastfeeding mother alongside complementary-feeding menus for the baby.",

        process: [
          {
            step: "01",
            title: "Đánh giá ban đầu",
            detail:
              "Đánh giá tình trạng dinh dưỡng của mẹ và giai đoạn phát triển của bé.",
          },
          {
            step: "02",
            title: "Lập kế hoạch đồng bộ",
            detail:
              "Xây dựng thực đơn cho mẹ và thực đơn ăn dặm cho bé cùng lúc, đảm bảo liên kết dinh dưỡng.",
          },
          {
            step: "03",
            title: "Theo dõi hàng tháng",
            detail:
              "Gặp gỡ định kỳ hàng tháng để điều chỉnh thực đơn theo sự phát triển của bé và sức khỏe của mẹ.",
          },
          {
            step: "04",
            title: "Tư vấn liên tục",
            detail:
              "Hỗ trợ tư vấn qua chat/điện thoại giữa các buổi gặp khi có câu hỏi phát sinh.",
          },
        ],
        processEn: [
          {
            step: "01",
            title: "Initial Assessment",
            detail:
              "We assess the mother's nutrition status and the baby's developmental and feeding stage.",
          },
          {
            step: "02",
            title: "Coordinated Planning",
            detail:
              "We build the mother's meal plan and baby's complementary-feeding plan together.",
          },
          {
            step: "03",
            title: "Monthly Follow-Up",
            detail:
              "We meet monthly and adjust the plans according to the baby's development and the mother's health.",
          },
          {
            step: "04",
            title: "Ongoing Consultation",
            detail:
              "We provide chat or phone support between sessions for questions that arise.",
          },
        ],

        benefits: [
          "Dinh dưỡng tối ưu cho cả mẹ và bé",
          "Tiết kiệm hơn so với tư vấn riêng lẻ",
          "Chuyên gia theo dõi liên tục trong 3 tháng",
          "Thực đơn cập nhật theo sự phát triển của bé",
          "Mẹ và bé đều phát triển khỏe mạnh tối ưu",
        ],
        benefitsEn: [
          "Coordinated nutrition for mother and baby",
          "More cost-effective than separate consultations",
          "Three months of continuous expert support",
          "Menus updated as the baby develops",
          "Supports healthy development for both mother and baby",
        ],

        faqs: [
          {
            question: "Gói này phù hợp với bé bao nhiêu tháng tuổi?",
            answer:
              "Phù hợp nhất khi bé từ 6–12 tháng tuổi, giai đoạn ăn dặm và mẹ đang cho con bú.",
          },
          {
            question: "Có thể bắt đầu giữa chừng không?",
            answer:
              "Có thể bắt đầu bất kỳ lúc nào trong giai đoạn 6–12 tháng của bé.",
          },
          {
            question: "Gói 3 tháng có bao nhiêu buổi tư vấn?",
            answer:
              "3 buổi tư vấn chính hàng tháng và hỗ trợ tư vấn không giới hạn qua chat trong suốt 3 tháng.",
          },
          {
            question: "Khi bé ngừng bú thì có cần điều chỉnh không?",
            answer:
              "Có, chuyên gia sẽ điều chỉnh thực đơn của mẹ khi ngừng cho bú và tập trung hoàn toàn vào thực đơn của bé.",
          },
        ],
        faqsEn: [
          {
            question: "What age is this package suitable for?",
            answer:
              "It is especially suitable for babies aged 6–12 months while the mother is breastfeeding.",
          },
          {
            question: "Can I start the package midway through this period?",
            answer:
              "Yes. The package can start at any point during the baby's 6–12 month stage.",
          },
          {
            question:
              "How many consultations are included in the 3-month package?",
            answer:
              "There are three main monthly consultations plus chat support throughout the three-month period.",
          },
          {
            question: "What if the mother stops breastfeeding?",
            answer:
              "The specialist can adjust the mother's nutrition plan and focus more of the package on the baby's complementary-feeding plan.",
          },
        ],
      },
    ],
  },
};

export function getServiceDetail(groupKey, itemIdx) {
  const group = serviceGroups[groupKey];

  if (!group) return null;

  const idx = parseInt(itemIdx, 10);

  if (isNaN(idx) || idx < 0 || idx >= group.items.length) {
    return null;
  }

  return {
    ...group.items[idx],
    groupTitle: group.groupTitle,
    groupTitleEn: group.groupTitleEn,
    groupKey,
  };
}
