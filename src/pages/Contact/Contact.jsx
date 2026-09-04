import {
  LuPhone,
  LuMapPin,
  LuMessageCircle,
  LuMail,
  LuClock,
} from "react-icons/lu";

import {
  SiZalo 
} from "react-icons/si";

import { FaFacebookF } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionSubHeading from "../../components/SectionHeading/SectionSubHeading";
/* ── Placeholder — replace with real Google Maps embed URL ── */
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62712.45279108949!2d106.60634994506837!3d10.770790258371761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f222c044fc3%3A0xd1191e984624ed1b!2zNTc0IMSQxrDhu51uZyBOZ3V54buFbiDEkMOsbmggQ2hp4buDdSwgQsOgbiBD4budLCBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1788498060696!5m2!1svi!2s"
const GOOGLE_MAPS_DIR_URL =
  "https://www.google.com/maps/dir/10.8429958,106.7116815/574+%C4%90%C6%B0%E1%BB%9Dng+Nguy%E1%BB%85n+%C4%90%C3%ACnh+Chi%E1%BB%83u,+B%C3%A0n+C%E1%BB%9D,+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vi%E1%BB%87t+Nam/@10.806905,106.6580951,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31752f222c044fc3:0xd1191e984624ed1b!2m2!1d106.682559!2d10.7707995?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D";

/* ── Card config ── */
const getCardData = (t) => [
  {
    icon: LuPhone,
    title: t("contact.cards.phone.title"),
    value: t("contact.cards.phone.value"),
    note: t("contact.cards.phone.note"),
    href: "tel:+84855000123",
    iconBg: "ct-icon--sage",
  },
  {
    icon: LuMapPin,
    title: t("contact.cards.address.title"),
    value: t("contact.cards.address.value"),
    note: null,
    href: null,
    iconBg: "ct-icon--beige",
  },
  {
    icon: SiZalo,
    title: t("contact.cards.zalo.title"),
    value: t("contact.cards.zalo.value"),
    note: t("contact.cards.zalo.note"),
    href: "https://zalo.me/0855000123",
    iconBg: "ct-icon--sage",
  },
  {
    icon: FaFacebookF,
    title: t("contact.cards.facebook.title"),
    value: t("contact.cards.facebook.value"),
    note: t("contact.cards.facebook.note"),
    href: "https://facebook.com/maiacare",
    iconBg: "ct-icon--beige",
  },
  {
    icon: LuMail,
    title: t("contact.cards.email.title"),
    value: t("contact.cards.email.value"),
    note: null,
    href: "mailto:hello@maiacare.vn",
    iconBg: "ct-icon--sage",
  },
  {
    icon: LuClock,
    title: t("contact.cards.hours.title"),
    value: t("contact.cards.hours.value"),
    note: t("contact.cards.hours.note"),
    href: null,
    iconBg: "ct-icon--beige",
  },
];

/* ── Component ── */
const Contact = () => {
  const { t } = useLanguage();
  const cards = getCardData(t);

  return (
    <div className="page contact-page">
      {/* Background layer */}
      <div className="ct-bg" aria-hidden="true" />

      {/* ── Hero ── */}
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
        {/* Hero Title */}
        <SectionHeading title={t("contact.title")} />
        <p className="ct-hero__subtitle">{t("contact.subtitle")}</p>
      </section>
    

      {/* ── Info Cards ── */}
      <section className="ct-cards">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const inner = (
            <>
              <div className={`ct-card__icon ${card.iconBg}`}>
                <Icon size={22} />
              </div>
              <h3 className="ct-card__title">{card.title}</h3>
              <p className="ct-card__value">{card.value}</p>
              {card.note && <p className="ct-card__note">{card.note}</p>}
            </>
          );

          return card.href ? (
            <a
              key={i}
              className="ct-card ct-card--link"
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {inner}
            </a>
          ) : (
            <div key={i} className="ct-card">
              {inner}
            </div>
          );
        })}
      </section>

      {/* ── Location ── */}
      <section className="ct-location">
        <SectionSubHeading title={t("contact.location.heading")} />
        <div className="ct-map">
          <iframe
            title="Maia Care Location"
            src={GOOGLE_MAPS_EMBED_URL}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="ct-map-bar">
          <div className="ct-map-bar__address">
            <LuMapPin size={18} className="ct-map-bar__icon" />
            <span>{t("contact.cards.address.value")}</span>
          </div>
          <a
            className="ct-map-bar__btn"
            href={GOOGLE_MAPS_DIR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact.location.directionsBtn")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
