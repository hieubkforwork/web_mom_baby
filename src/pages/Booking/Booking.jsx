import { useState } from "react";
import {
  LuCalendar,
  LuClock,
  LuUser,
  LuHeart,
  LuLock,
  LuChevronDown,
  LuClipboardList,
} from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";
import "./Booking.css";

const Booking = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    service: "",
    name: "",
    phone: "",
    note: "",
    date: "",
    day: "",
    time: "",
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — replace with real submission logic
    console.log("Booking submitted:", form);
  };

  const services = t("booking.services") || [];
  const days = t("booking.days") || [];
  const timeOptions = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00",
  ];

  return (
    <div className="page booking-page">
      <div className="bk-bg" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="bk-header">
        <h1 className="bk-header__title">
          {t("booking.heroTitle")}
          <LuHeart className="bk-header__heart" size={15} />
        </h1>
        <p className="bk-header__desc">
          {t("booking.heroDesc")}
        </p>
      </header>

      {/* ── Booking Card ── */}
      <form className="bk-card" onSubmit={handleSubmit} noValidate>
        {/* ── Service Selector ── */}
        <div className="bk-service">
          <label className="bk-service__label">
            <LuClipboardList size={18} className="bk-icon bk-icon--sage" />
            {t("booking.selectServiceLabel")}
          </label>
          <div className="bk-select-wrap">
            <select
              className="bk-select bk-select--lg"
              value={form.service}
              onChange={update("service")}
              required
            >
              <option value="" disabled>
                {t("booking.selectServicePlaceholder")}
              </option>
              {Array.isArray(services) && services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <LuChevronDown className="bk-select-arrow" size={18} />
          </div>
        </div>

        <hr className="bk-divider" />

        {/* ── Two-column layout ── */}
        <div className="bk-columns">
          {/* LEFT — Customer Info */}
          <div className="bk-col bk-col--left">
            <h2 className="bk-col__heading">
              <LuUser size={20} className="bk-icon bk-icon--sage" />
              {t("booking.customerInfoTitle")}
            </h2>

            <div className="bk-field">
              <label className="bk-label">
                {t("booking.fullNameLabel")} <span className="bk-required">*</span>
              </label>
              <input
                type="text"
                className="bk-input"
                placeholder={t("booking.fullNamePlaceholder")}
                value={form.name}
                onChange={update("name")}
                required
              />
            </div>

            <div className="bk-field">
              <label className="bk-label">
                {t("booking.phoneLabel")} <span className="bk-required">*</span>
              </label>
              <input
                type="tel"
                className="bk-input"
                placeholder={t("booking.phonePlaceholder")}
                value={form.phone}
                onChange={update("phone")}
                required
              />
            </div>
            <div className="bk-field">
              <label className="bk-label">{t("booking.noteLabel")}</label>
              <textarea
                className="bk-textarea"
                placeholder={t("booking.notePlaceholder")}
                rows={4}
                value={form.note}
                onChange={update("note")}
              />
            </div>
          </div>

          {/* RIGHT — Time Selection */}
          <div className="bk-col bk-col--right">
            <h2 className="bk-col__heading">
              <LuCalendar size={20} className="bk-icon bk-icon--sage" />
              {t("booking.timeSelectionTitle")}
            </h2>

            <div className="bk-field">
              <label className="bk-label">
                {t("booking.dateLabel")} <span className="bk-required">*</span>
              </label>
              <div className="bk-input-wrap">
                <input
                  type="date"
                  className="bk-input"
                  value={form.date}
                  onChange={update("date")}
                  required
                />
              </div>
            </div>

            {/* <div className="bk-field">
              <label className="bk-label">
                {t("booking.dayLabel")} <span className="bk-required">*</span>
              </label>
              <div className="bk-select-wrap">
                <select
                  className="bk-select"
                  value={form.day}
                  onChange={update("day")}
                  required
                >
                  <option value="" disabled>
                    {t("booking.dayPlaceholder")}
                  </option>
                  {Array.isArray(days) && days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <LuChevronDown className="bk-select-arrow" size={18} />
              </div>
            </div> */}

            <div className="bk-field">
              <label className="bk-label">
                {t("booking.timeLabel")} <span className="bk-required">*</span>
              </label>
              <div className="bk-select-wrap">
                <select
                  className="bk-select"
                  value={form.time}
                  onChange={update("time")}
                  required
                >
                  <option value="" disabled>
                    {t("booking.timePlaceholder")}
                  </option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <LuChevronDown className="bk-select-arrow" size={18} />
              </div>
            </div>

            <div className="bk-work-hours">
              <LuClock size={15} className="bk-icon bk-icon--sage" />
              <span>
                {t("booking.workingHours")}
              </span>
            </div>
          </div>
        </div>

        {/* ── CTA Button ── */}
        <button type="submit" className="bk-submit">
          <LuCalendar size={18} />
          {t("booking.submitButton")}
        </button>

        {/* ── Privacy ── */}
        <p className="bk-privacy">
          <LuLock size={14} className="bk-icon bk-icon--sage" />
          {t("booking.privacyText")}
        </p>
      </form>
    </div>
  );
};

export default Booking;
