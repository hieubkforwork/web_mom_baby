import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  LuMountainSnow,
  LuHeartHandshake,
  LuShieldCheck,
  LuGraduationCap,
  LuUserCheck,
  LuEye,
  LuLeaf,
} from "react-icons/lu";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubHeading from "../../components/SectionHeading/SectionSubHeading";
import "./About.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import "./../../pages/Contact/Contact.css";
/* ── Data ── */
const coreValues = [
  {
    num: "01",
    id: "safety",
    icon: LuShieldCheck,
    title: "An toàn",
    desc: "Quy trình chăm sóc chuẩn y khoa, sản phẩm an toàn, lành tính và được kiểm định kỹ lưỡng.",
  },
  {
    num: "02",
    id: "expertise",
    icon: LuGraduationCap,
    title: "Chuyên môn",
    desc: "Đội ngũ được đào tạo bài bản, có kiến thức chuyên sâu về chăm sóc mẹ và bé.",
  },
  {
    num: "03",
    id: "dedication",
    icon: LuHeartHandshake,
    title: "Tận tâm",
    desc: "Luôn lắng nghe, thấu hiểu và đồng hành cùng mẹ trong từng giai đoạn.",
  },
  {
    num: "04",
    id: "personalized",
    icon: LuUserCheck,
    title: "Cá nhân hóa",
    desc: "Điều chỉnh dịch vụ phù hợp với nhu cầu và tình trạng riêng của từng gia đình.",
  },
  {
    num: "05",
    id: "transparency",
    icon: LuEye,
    title: "Minh bạch",
    desc: "Rõ ràng trong quy trình, chi phí và cam kết chất lượng dịch vụ.",
  },
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
  {
    src: "aboutus-img.png",
    alt: "Nhân viên đang massage chăm sóc mẹ",
  },
  {
    src: "aboutus-img2.png",
    alt: "Đội ngũ Maia Care",
  },
  {
    src: "aboutus-img1.png",
    alt: "Nhân viên đang chăm sóc mẹ",
  },
];

/* ── Component ── */
const About = () => {
  const { t } = useLanguage();
  return (
    <div className="page about-page">
      {/* ══════════════════════════════════════════
          2. VỀ MAIA CARE
          ══════════════════════════════════════════ */}
      <section className="ap-about">
        {/* Background layer */}
              <div className="ab-bg" aria-hidden="true" />
        <div className="ap-about__container">
          <section className="ct-hero">
            <div className="ct-hero__deco" aria-hidden="true">
              
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14,5 C11,0 4,2 4,7 C4,14 14,21 14,21 C14,21 24,14 24,7 C24,2 17,0 14,5 Z"
                  stroke="#E2CFC2"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>
            <SectionHeading title={t("about.title")} />
          </section>
          <div className="ap-about__content">
            <div className="ap-about__text">
              <div className="ap-accent-line" aria-hidden="true" />
              <h1 className="ap-hero__heading">
                {t("about.heroHeading")}
              </h1>
              <p>
                {t("about.heroDesc")}
              </p>
              <div className="ap-about__highlights">
                {t("about.highlights").map((tag) => (
                  <span key={tag} className="ap-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="ap-about__image-wrap">
              <img
                src="https://placehold.co/520x400/A8BFA8/ffffff?text=About+Maia+Care"
                alt="Đội ngũ Maia Care chăm sóc mẹ và bé"
                className="ap-about__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TẦM NHÌN & SỨ MỆNH
          ══════════════════════════════════════════ */}
      <section className="ap-vision">
        <div className="ap-vision__container">
          <SectionSubHeading title={t("about.visionMissionTitle")} />
          <div className="ap-vision__grid">
            {/* Tầm nhìn */}
            <div className="ap-vision__block">
              <div className="ap-icon-circle bg-sage">
                <LuMountainSnow size={28} />
              </div>
              <h3 className="ap-vision__title">{t("about.visionTitle")}</h3>
              <p className="ap-vision__desc">
                {t("about.visionDesc")}
              </p>
            </div>
            {/* Sứ mệnh */}
            <div className="ap-vision__block">
              <div className="ap-icon-circle bg-beige">
                <LuHeartHandshake size={28} />
              </div>
              <h3 className="ap-vision__title">{t("about.missionTitle")}</h3>
              <p className="ap-vision__desc">
                {t("about.missionDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. GIÁ TRỊ CỐT LÕI
          ══════════════════════════════════════════ */}
      <SectionSubHeading title={t("about.coreValuesTitle")} />
      <WhyChooseUs title = "" />

      {/* ══════════════════════════════════════════
          5. CHÍNH SÁCH & CAM KẾT
          ══════════════════════════════════════════ */}
      <section className="ap-policy">
        <div className="ap-policy__container">
          <SectionSubHeading title={t("about.policyTitle")} />
          <h3 className="ap-policy__subheading">
            {t("about.policySubheading")}
          </h3>
          <div className="ap-policy__layout">
            <div className="ap-policy__col ap-policy__col--left">
              {(t("about.policies") || []).slice(0, 3).map((item, index) => (
                <div className="ap-policy__item-wrapper" key={item}>
                  <div className="ap-policy__item">
                    <span className="ap-policy__num">0{index + 1}</span>
                    <span className="ap-policy__text">{item}</span>
                  </div>
                  {index < 2 && (
                    <div className="ap-policy__divider-h">
                      <span className="ap-policy__dot"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="ap-policy__divider-v"></div>

            <div className="ap-policy__col ap-policy__col--right">
              {(t("about.policies") || []).slice(3, 6).map((item, index) => (
                <div className="ap-policy__item-wrapper" key={item}>
                  <div className="ap-policy__item">
                    <span className="ap-policy__num">0{index + 4}</span>
                    <span className="ap-policy__text">{item}</span>
                  </div>
                  {index < 2 && (
                    <div className="ap-policy__divider-h">
                      <span className="ap-policy__dot"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. ĐỘI NGŨ CHUYÊN MÔN
          ══════════════════════════════════════════ */}
      <section className="ap-team">
        <div className="ap-team__container">
          <SectionSubHeading title={t("about.teamTitle")} />
          <p className="ap-team__intro">
            {t("about.teamIntro")}
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
            {t("about.quote")}
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
          <SectionHeading title={t("about.ctaTitle")} />
          <p className="ap-cta__desc">
            {t("about.ctaDesc")}
          </p>
          <div className="ap-cta__buttons">
            <Link to="/booking" className="about-cta">
              <LuLeaf size={16} />
              {t("about.btnConsult")}
            </Link>
            <Link to="/service" className="about-cta">
              <LuLeaf size={16} />
              {t("about.btnViewService")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
