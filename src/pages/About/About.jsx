import { Link } from "react-router-dom";
import {
  LuMountainSnow,
  LuHeartHandshake,
  LuShieldCheck,
  LuGraduationCap,
  LuUserCheck,
  LuEye,
  LuClipboardCheck,
  LuCheck,
  LuLeaf,
} from "react-icons/lu";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./About.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

/* ── Data ── */
const coreValues = [
  { num: "01", id: "safety",       icon: LuShieldCheck,    title: "An toàn",       desc: "Quy trình chăm sóc chuẩn y khoa, sản phẩm an toàn, lành tính và được kiểm định kỹ lưỡng." },
  { num: "02", id: "expertise",    icon: LuGraduationCap,  title: "Chuyên môn",    desc: "Đội ngũ được đào tạo bài bản, có kiến thức chuyên sâu về chăm sóc mẹ và bé." },
  { num: "03", id: "dedication",   icon: LuHeartHandshake, title: "Tận tâm",       desc: "Luôn lắng nghe, thấu hiểu và đồng hành cùng mẹ trong từng giai đoạn." },
  { num: "04", id: "personalized", icon: LuUserCheck,      title: "Cá nhân hóa",   desc: "Điều chỉnh dịch vụ phù hợp với nhu cầu và tình trạng riêng của từng gia đình." },
  { num: "05", id: "transparency", icon: LuEye,            title: "Minh bạch",     desc: "Rõ ràng trong quy trình, chi phí và cam kết chất lượng dịch vụ." },
];

const policyItems = [
  "An toàn cho mẹ và bé",
  "Quy trình chăm sóc rõ ràng",
  "Nhân viên được đào tạo",
  "Tôn trọng nhu cầu riêng của từng gia đình",
  "Minh bạch trong dịch vụ",
  "Luôn lắng nghe và điều chỉnh",
];

const personalizedChecks = [
  "Lắng nghe nhu cầu",
  "Điều chỉnh linh hoạt",
  "Đồng hành tận tâm",
];

const teamImages = [
  { src: "https://placehold.co/400x300/E2CFC2/7a6b5a?text=Massage+Care",  alt: "Nhân viên đang massage chăm sóc mẹ" },
  { src: "https://placehold.co/400x300/A8BFA8/ffffff?text=Our+Team",       alt: "Đội ngũ MOMCARE24H" },
  { src: "https://placehold.co/400x300/c4b5a5/ffffff?text=Baby+Care",      alt: "Nhân viên đang chăm sóc em bé" },
];

/* ── Component ── */
const About = () => {
  return (
    <div className="page about-page">

      {/* ══════════════════════════════════════════
          1. HERO / INTRODUCTION
          ══════════════════════════════════════════ */}
      <section className="ap-hero">
        <div className="ap-hero__container">
          <div className="ap-hero__text">
            <span className="ap-hero__eyebrow">VỀ CHÚNG TÔI</span>
            <h1 className="ap-hero__heading">
              Đồng hành cùng mẹ, cùng bé chăm sóc trọn vẹn từ những ngày đầu
            </h1>
            <p className="ap-hero__desc">
              Maia Care mang đến dịch vụ chăm sóc mẹ và bé chuyên nghiệp,
              tận tâm — giúp mẹ yên tâm tận hưởng hành trình làm mẹ.
            </p>
          </div>
          <div className="ap-hero__image-wrap">
            <div className="ap-hero__blob" aria-hidden="true" />
            <img
              src="https://placehold.co/520x620/E2CFC2/7a6b5a?text=Hero+Image"
              alt="Mẹ ôm em bé trong không gian ấm áp"
              className="ap-hero__image"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. VỀ MAIA CARE
          ══════════════════════════════════════════ */}
      <section className="ap-about">
        <div className="ap-about__container">
          <SectionHeading title="VỀ MAIA CARE" />
          <div className="ap-about__content">
            <div className="ap-about__image-wrap">
              <img
                src="https://placehold.co/520x400/A8BFA8/ffffff?text=About+Maia+Care"
                alt="Đội ngũ Maia Care chăm sóc mẹ và bé"
                className="ap-about__image"
              />
            </div>
            <div className="ap-about__text">
              <div className="ap-accent-line" aria-hidden="true" />
              <h3 className="ap-about__heading">
                Chăm sóc tận tâm, theo nhu cầu của từng gia đình
              </h3>
              <p>
                MAIA CARE cung cấp dịch vụ chăm sóc mẹ và bé sau sinh, lấy sức
                khỏe, sự an toàn và nhu cầu riêng của từng gia đình làm trọng tâm.
                Với mô hình chăm sóc 1:1, dịch vụ tại nhà và tư vấn dinh dưỡng,
                Maia Care mang đến giải pháp chăm sóc chuyên nghiệp, linh hoạt và
                phù hợp cho mẹ và bé trong từng giai đoạn.
              </p>
              <div className="ap-about__highlights">
                {["Chăm sóc 1:1", "Dịch vụ tại nhà", "Tư vấn dinh dưỡng", "Chăm sóc mẹ sau sinh", "Chăm sóc em bé"].map((tag) => (
                  <span key={tag} className="ap-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TẦM NHÌN & SỨ MỆNH
          ══════════════════════════════════════════ */}
      <section className="ap-vision">
        <div className="ap-vision__container">
          <SectionHeading title="TẦM NHÌN & SỨ MỆNH" />
          <div className="ap-vision__grid">
            {/* Tầm nhìn */}
            <div className="ap-vision__block">
              <div className="ap-icon-circle bg-sage">
                <LuMountainSnow size={28} />
              </div>
              <h3 className="ap-vision__title">TẦM NHÌN</h3>
              <p className="ap-vision__desc">
                Trở thành thương hiệu chăm sóc mẹ và bé được tin chọn hàng đầu,
                nơi mỗi gia đình đều tìm thấy sự đồng hành chuyên nghiệp và
                yêu thương.
              </p>
            </div>
            {/* Sứ mệnh */}
            <div className="ap-vision__block">
              <div className="ap-icon-circle bg-beige">
                <LuHeartHandshake size={28} />
              </div>
              <h3 className="ap-vision__title">SỨ MỆNH</h3>
              <p className="ap-vision__desc">
                Mang đến dịch vụ chăm sóc chuyên nghiệp, an toàn và phù hợp
                với nhu cầu riêng của từng gia đình — giúp mẹ yên tâm, bé khỏe
                mạnh ngay từ những ngày đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. GIÁ TRỊ CỐT LÕI
          ══════════════════════════════════════════ */}
           <WhyChooseUs title="GIÁ TRỊ CỐT LÕI"/>


      {/* ══════════════════════════════════════════
          5. CHÍNH SÁCH & CAM KẾT
          ══════════════════════════════════════════ */}
      <section className="ap-policy">
        <div className="ap-policy__container">
          <SectionHeading title="CHÍNH SÁCH & CAM KẾT" />
          <div className="ap-policy__content">
            <div className="ap-policy__icon-side">
              <div className="ap-icon-circle ap-icon-circle--lg bg-sage">
                <LuClipboardCheck size={40} />
              </div>
            </div>
            <div className="ap-policy__text-side">
              <h3 className="ap-policy__heading">
                An tâm trong từng trải nghiệm chăm sóc
              </h3>
              <ul className="ap-policy__list">
                {policyItems.map((item) => (
                  <li key={item} className="ap-policy__list-item">
                    <LuCheck size={18} className="ap-policy__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. ĐỘI NGŨ CHUYÊN MÔN
          ══════════════════════════════════════════ */}
      <section className="ap-team">
        <div className="ap-team__container">
          <SectionHeading title="ĐỘI NGŨ CHUYÊN MÔN" />
          <p className="ap-team__intro">
            MOMCARE24H xây dựng đội ngũ nhân sự được đào tạo bài bản về chăm sóc
            mẹ và bé, có kiến thức và kỹ năng phù hợp với từng loại dịch vụ.
          </p>
          <div className="ap-team__gallery">
            {teamImages.map((img, idx) => (
              <div key={idx} className="ap-team__img-wrap">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="ap-team__img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CHĂM SÓC 1:1
          ══════════════════════════════════════════ */}
      {/* <section className="ap-personalized">
        <div className="ap-personalized__container">
          <SectionHeading title="CHĂM SÓC 1:1" />
          <div className="ap-personalized__content">
            <div className="ap-personalized__image-wrap">
              <img
                src="https://placehold.co/520x480/E2CFC2/7a6b5a?text=1:1+Care"
                alt="Nhân viên tư vấn chăm sóc mẹ và bé tại nhà"
                className="ap-personalized__image"
                loading="lazy"
              />
            </div>
            <div className="ap-personalized__text">
              <h3 className="ap-personalized__heading">
                Mỗi gia đình, một nhu cầu riêng
              </h3>
              <p>
                Với mô hình Personalized Care, MOMCARE24H lắng nghe nhu cầu,
                thói quen và tình trạng thực tế của từng gia đình để điều chỉnh
                dịch vụ chăm sóc phù hợp.
              </p>
              <ul className="ap-personalized__checks">
                {personalizedChecks.map((item) => (
                  <li key={item} className="ap-personalized__check-item">
                    <LuCheck size={18} className="ap-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          8. QUOTE / BRAND STATEMENT
          ══════════════════════════════════════════ */}
      <section className="ap-quote">
        <div className="ap-quote__container">
          <blockquote className="ap-quote__text">
            "Chăm sóc mẹ thật tốt, để hành trình làm mẹ trở nên nhẹ nhàng hơn."
          </blockquote>
          <div className="ap-quote__leaf" aria-hidden="true">
            <LuLeaf size={22} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. CTA CUỐI TRANG
          ══════════════════════════════════════════ */}
      <section className="ap-cta">
        <div className="ap-cta__container">
          <SectionHeading title="SẴN SÀNG ĐỒNG HÀNH CÙNG GIA ĐÌNH BẠN?" />
          <p className="ap-cta__desc">
            Liên hệ ngay để được tư vấn và trải nghiệm dịch vụ chăm sóc mẹ và
            bé chuyên nghiệp từ MOMCARE24H.
          </p>
          <div className="ap-cta__buttons">
            <Link to="/booking" className="cta-button">
              ĐĂNG KÝ TƯ VẤN
            </Link>
            <Link to="/service" className="about-cta">
              <LuLeaf size={16} />
              XEM DỊCH VỤ
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
