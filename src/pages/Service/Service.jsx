import { useLanguage } from "../../context/LanguageContext";
import "./Service.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import SectionSubHeading from "../../components/SectionHeading/SectionSubHeading";

const Service = () => {
  const { t } = useLanguage();

  const groups = [
    {
      key: "postpartum",
      img: "https://placehold.co/400x350/F7F1E8/8eaa8e?text=Mother+Care",
    },
    {
      key: "baby",
      img: "https://placehold.co/400x350/E2CFC2/7a6b5a?text=Baby+Care",
    },
    {
      key: "pregnant",
      img: "https://placehold.co/400x350/A8BFA8/ffffff?text=Combo+Care",
    },
    {
      key: "complex",
      img: "https://placehold.co/400x350/c4b5a5/ffffff?text=Nutrition",
    },
  ];

  return (
    <div className="page service-page">
      <div className="sp-container">
        {/* ── HEADER ── */}
        <div className="sp-header">
          <div className="sp-bg" aria-hidden="true" />
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

          <SectionHeading title={t("service.title")} />
          <p className="sp-subtitle">{t("service.subtitle")}</p>
        </div>

        {groups.map((group) => {
          const groupData = t(`home.servicesSection.${group.key}`);
          if (!groupData) return null;

          return (
            <div key={group.key} className="sp-group">
              <div className="sp-header">
                <SectionSubHeading title={groupData.title} />
              </div>

              {/* ── CARDS GRID ── */}
              <div className="sp-grid">
                {Array.isArray(groupData.items) &&
                  groupData.items.map((item, idx) => {
                    // Dùng item.id nếu có, không thì fallback về index
                    const itemId = item?.id ?? idx;

                    return (
                      <Link
                        key={itemId}
                        to={`/service/${group.key}/${itemId}`}
                        className="sp-card"
                      >
                        <div className="sp-card__img-wrap">
                          <img
                            src={group.img}
                            alt={item.name || item}
                            className="sp-card__img"
                            loading="lazy"
                          />
                        </div>
                        <div className="sp-card__content">
                          <h3 className="sp-card__title">
                            {item.name || item}
                          </h3>

                          <div className="sp-card__footer">
                            <div className="sp-card__price">
                              <span className="sp-card__price-prefix">
                                {t("service.pricePrefix")}
                              </span>
                              <span className="sp-card__price-amount">
                                {item.price || ""}
                              </span>
                              <span className="sp-card__price-suffix">
                                {t("service.priceSuffix")}
                              </span>
                            </div>

                            <LuArrowRight className="sp-card__arrow" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;