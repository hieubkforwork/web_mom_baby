import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getServiceDetail } from "../../data/services";
import {
  LuCalendar,
  LuClock,
  LuMapPin,
  LuPackage,
  LuLeaf,
  LuHeart,
  LuUser,
  LuStar,
  LuCheck,
  LuArrowLeft,
  LuChevronDown,
  LuChevronUp,
} from "react-icons/lu";
import "./ServiceDetail.css";

/* ── Icon map for feature highlights ── */
const ICON_MAP = {
  leaf: LuLeaf,
  heart: LuHeart,
  user: LuUser,
  star: LuStar,
};

/* ── Accordion item ── */
const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`sd-accordion__item${
        open ? " sd-accordion__item--open" : ""
      }`}
    >
      <button
        type="button"
        className="sd-accordion__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? <LuChevronUp size={18} /> : <LuChevronDown size={18} />}
      </button>

      {open && <div className="sd-accordion__body">{answer}</div>}
    </div>
  );
};

/* ── Main component ── */
const ServiceDetail = () => {
  const { t, lang } = useLanguage();
  const { groupKey, itemIdx } = useParams();
  const navigate = useNavigate();

  const service = getServiceDetail(groupKey, itemIdx);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  if (!service) {
    return (
      <div className="page sd-not-found">
        <div className="sd-not-found__inner">
          <p className="sd-not-found__icon">🌿</p>

          <h2 className="sd-not-found__title">
            {t("serviceDetail.notFoundTitle")}
          </h2>

          <p className="sd-not-found__desc">
            {t("serviceDetail.notFoundDesc")}
          </p>

          <Link to="/service" className="sd-not-found__btn">
            <LuArrowLeft size={16} />
            {t("serviceDetail.backToService")}
          </Link>
        </div>
      </div>
    );
  }

  /*
   * ─────────────────────────────────────────────
   * BILINGUAL HELPERS
   * ─────────────────────────────────────────────
   *
   * Data convention:
   *   name / nameEn
   *   description / descriptionEn
   *   duration / durationEn
   *   ...
   *
   * When English is selected:
   *   1. Use the *En field when it exists.
   *   2. Otherwise fall back to Vietnamese instead of
   *      rendering undefined.
   *
   * This makes the page safe while the remaining English
   * translations are being completed in services.js.
   */
  const isEnglish = lang === "en";

  const getField = (field) => {
    const englishValue = service[`${field}En`];
    const vietnameseValue = service[field];

    return isEnglish && englishValue ? englishValue : vietnameseValue;
  };

  const getFeatureLabel = (feature) => {
    if (!feature) return "";

    if (isEnglish && feature.labelEn) {
      return feature.labelEn;
    }

    return feature.label || "";
  };

  const getProcessField = (step, field) => {
    if (!step) return "";

    const englishValue = step[`${field}En`];
    const vietnameseValue = step[field];

    return isEnglish && englishValue ? englishValue : vietnameseValue;
  };

  const getFaqField = (faq, field) => {
    if (!faq) return "";

    const englishValue = faq[`${field}En`];
    const vietnameseValue = faq[field];

    return isEnglish && englishValue ? englishValue : vietnameseValue;
  };

  const getBenefit = (benefit) => {
    if (typeof benefit === "string") {
      return benefit;
    }

    if (!benefit) return "";

    if (isEnglish && benefit.en) {
      return benefit.en;
    }

    return benefit.vi || "";
  };

  const images = Array.isArray(service.images) ? service.images : [];
  const currentImage = images[activeImage] || images[0];

  /*
   * Keep booking data synchronized with the current language.
   * This is important because ServiceDetail may be opened in EN
   * and then sent to /booking.
   */
  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        serviceName: getField("name"),
        servicePrice: getField("price"),
        servicePriceUnit: getField("priceUnit"),
        groupKey,
        itemIdx,
      },
    });
  };

  const process = getField("process");
  const benefits = getField("benefits");
  const faqs = getField("faqs");
  const features = getField("features");

  return (
    <div className="page sd-page">
      <div className="sd-container">
        {/* ════════════════════════════════════
            HERO — 2-column layout
            ════════════════════════════════════ */}
        <div className="sd-hero">
          {/* LEFT — Gallery */}
          <div className="sd-gallery">
            <div className="sd-gallery__main">
              {currentImage && (
                <img
                  src={currentImage}
                  alt={getField("name")}
                  className="sd-gallery__main-img"
                />
              )}
            </div>

            {images.length > 1 && (
              <div className="sd-gallery__thumbs">
                {images.map((img, idx) => (
                  <button
                    type="button"
                    key={`${img}-${idx}`}
                    className={`sd-gallery__thumb${
                      activeImage === idx
                        ? " sd-gallery__thumb--active"
                        : ""
                    }`}
                    onClick={() => setActiveImage(idx)}
                    aria-label={
                      isEnglish
                        ? `View image ${idx + 1}`
                        : `Xem ảnh ${idx + 1}`
                    }
                  >
                    <img
                      src={img}
                      alt={`${getField("name")} ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Info */}
          <div className="sd-info">
            <p className="sd-info__group">
              {getField("groupTitle")}
            </p>

            <h1 className="sd-info__name">{getField("name")}</h1>

            <div className="sd-info__price">
              <span className="sd-info__price-amount">
                {getField("price")}
              </span>

              <span className="sd-info__price-unit">
                / {getField("priceUnit")}
              </span>
            </div>

            <p className="sd-info__short-desc">
              {getField("shortDescription")}
            </p>

            {/* Feature highlights */}
            {Array.isArray(features) && features.length > 0 && (
              <div className="sd-features">
                {features.map((feature, index) => {
                  const Icon = ICON_MAP[feature?.icon] || LuLeaf;

                  return (
                    <div
                      key={`${feature?.icon || "feature"}-${index}`}
                      className="sd-features__item"
                    >
                      <span className="sd-features__icon">
                        <Icon size={16} />
                      </span>

                      <span className="sd-features__label">
                        {getFeatureLabel(feature)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Information box */}
            <div className="sd-infobox">
              <ul className="sd-infobox__list">
                <li className="sd-infobox__item">
                  <LuClock size={16} className="sd-infobox__icon" />
                  <span className="sd-infobox__key">
                    {t("serviceDetail.time")}
                  </span>
                  <span className="sd-infobox__val">
                    {getField("duration")}
                  </span>
                </li>

                <li className="sd-infobox__item">
                  <LuMapPin size={16} className="sd-infobox__icon" />
                  <span className="sd-infobox__key">
                    {t("serviceDetail.location")}
                  </span>
                  <span className="sd-infobox__val">
                    {getField("location")}
                  </span>
                </li>

                <li className="sd-infobox__item">
                  <LuPackage size={16} className="sd-infobox__icon" />
                  <span className="sd-infobox__key">
                    {t("serviceDetail.package")}
                  </span>
                  <span className="sd-infobox__val">
                    {getField("packageInfo")}
                  </span>
                </li>

                <li className="sd-infobox__item">
                  <LuCalendar size={16} className="sd-infobox__icon" />
                  <span className="sd-infobox__key">
                    {t("serviceDetail.schedule")}
                  </span>
                  <span className="sd-infobox__val">
                    {getField("scheduling")}
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              className="sd-cta"
              onClick={handleBookNow}
            >
              <LuCalendar size={18} />
              {t("serviceDetail.bookNow")}
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════
            CONTENT AREA — tabs + benefits
            ════════════════════════════════════ */}
        <div className="sd-content">
          {/* Tabs navigation */}
          <div className="sd-tabs">
            {[
              {
                key: "description",
                label: t("serviceDetail.tabDesc"),
              },
              {
                key: "process",
                label: t("serviceDetail.tabProcess"),
              },
              {
                key: "faq",
                label: t("serviceDetail.tabFaq"),
              },
            ].map((tab) => (
              <button
                type="button"
                key={tab.key}
                className={`sd-tabs__btn${
                  activeTab === tab.key
                    ? " sd-tabs__btn--active"
                    : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="sd-content__body">
            {/* Left — Tab content */}
            <div className="sd-content__main">
              {/* Tab: Description */}
              {activeTab === "description" && (
                <div className="sd-tab-panel">
                  <h3 className="sd-tab-panel__heading">
                    {t("serviceDetail.aboutService")}
                  </h3>

                  <p className="sd-tab-panel__text">
                    {getField("description")}
                  </p>
                </div>
              )}

              {/* Tab: Process */}
              {activeTab === "process" && (
                <div className="sd-tab-panel">
                  <h3 className="sd-tab-panel__heading">
                    {t("serviceDetail.tabProcess")}
                  </h3>

                  <div className="sd-process">
                    {Array.isArray(process) &&
                      process.map((step, index) => (
                        <div
                          key={`${step?.step || index}-${index}`}
                          className="sd-process__step"
                        >
                          <div className="sd-process__num">
                            {step.step}
                          </div>

                          <div className="sd-process__content">
                            <h4 className="sd-process__title">
                              {getProcessField(step, "title")}
                            </h4>

                            <p className="sd-process__detail">
                              {getProcessField(step, "detail")}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Tab: FAQ */}
              {activeTab === "faq" && (
                <div className="sd-tab-panel">
                  <h3 className="sd-tab-panel__heading">
                    {t("serviceDetail.tabFaq")}
                  </h3>

                  <div className="sd-accordion">
                    {Array.isArray(faqs) &&
                      faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          question={getFaqField(faq, "question")}
                          answer={getFaqField(faq, "answer")}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — Benefits */}
            {Array.isArray(benefits) && benefits.length > 0 && (
              <aside className="sd-benefits">
                <h3 className="sd-benefits__heading">
                  {t("serviceDetail.benefits")}
                </h3>

                <ul className="sd-benefits__list">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="sd-benefits__item"
                    >
                      <span className="sd-benefits__check">
                        <LuCheck size={14} />
                      </span>

                      {getBenefit(benefit)}
                    </li>
                  ))}
                </ul>

                {/* Secondary CTA */}
                <button
                  type="button"
                  className="sd-benefits__cta"
                  onClick={handleBookNow}
                >
                  <LuCalendar size={16} />
                  {t("serviceDetail.bookNow")}
                </button>
              </aside>
            )}
          </div>
        </div>

        {/* Back to service list */}
        <div className="sd-back">
          <Link to="/service" className="sd-back__btn">
            <LuArrowLeft size={16} />
            {t("serviceDetail.viewAll")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
