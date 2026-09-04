import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  LuCalendar,
  LuClock,
  LuUser,
  LuHeart,
  LuLock,
  LuChevronDown,
  LuClipboardList,
  LuArrowLeft,
} from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";
import "./Booking.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { serviceGroups } from "../../data/services";

const Booking = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const [selectedService, setSelectedService] = useState(() => {
    if (location.state && location.state.serviceName) {
      return {
        name: location.state.serviceName,
        price: location.state.servicePrice,
        priceUnit: location.state.servicePriceUnit,
      };
    }
    return null;
  });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    note: "",
    date: "",
    time: "",
  });
  
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error', 'required'

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleServiceChange = (e) => {
    const val = e.target.value;
    if (!val) return;
    const [groupKey, itemIdx] = val.split("-");
    const group = serviceGroups[groupKey];
    if (group) {
      const item = group.items[parseInt(itemIdx, 10)];
      if (item) {
        setSelectedService({
          name: item.name,
          price: item.price,
          priceUnit: item.priceUnit,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!selectedService || !form.name || !form.phone || !form.date || !form.time) {
      setStatus('required');
      return;
    }

    setStatus('loading');

    const templateParams = {
      service: selectedService.name,
      customer_name: form.name,
      phone: form.phone,
      booking_date: form.date,
      booking_time: form.time,
      note: form.note || "Không có ghi chú",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setForm({
            name: "",
            phone: "",
            note: "",
            date: "",
            time: "",
          });
          setSelectedService(null);
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("error");
        }
      );
  };

  const days = t("booking.days") || [];
  const timeOptions = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00",
  ];

  return (
    <div className="page booking-page">
      <div className="bk-bg" aria-hidden="true" />

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
         <SectionHeading title={t("booking.heroTitle")}  />
        <p className="ct-hero__subtitle">{t("booking.heroDesc")}</p>
      </section>

      {/* ── Booking Card ── */}
      <form className="bk-card" onSubmit={handleSubmit} noValidate>
        
        {/* ── Selected Service Info or Dropdown ── */}
        {!selectedService ? (
          <div className="bk-service">
            <label className="bk-service__label">
              <LuClipboardList size={18} className="bk-icon bk-icon--sage" />
              {t("booking.selectServiceLabel") || "Chọn dịch vụ"}
            </label>
            <div className="bk-select-wrap">
              <select
                className="bk-select bk-select--lg"
                value=""
                onChange={handleServiceChange}
                required
              >
                <option value="" disabled>
                  {t("booking.selectServicePlaceholder") || "Vui lòng chọn dịch vụ..."}
                </option>
                {Object.keys(serviceGroups).map((groupKey) => (
                  <optgroup key={groupKey} label={serviceGroups[groupKey].groupTitle}>
                    {serviceGroups[groupKey].items.map((item, idx) => (
                      <option key={`${groupKey}-${idx}`} value={`${groupKey}-${idx}`}>
                        {item.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <LuChevronDown className="bk-select-arrow" size={18} />
            </div>
          </div>
        ) : (
          <div className="bk-selected-service">
            <div className="bk-selected-service__header">
              <h3 className="bk-selected-service__title">DỊCH VỤ BẠN ĐANG ĐẶT</h3>
              <button 
                type="button"
                className="bk-selected-service__change"
                onClick={() => setSelectedService(null)}
              >
                Thay đổi
              </button>
            </div>
            <div className="bk-selected-service__box">
              <div className="bk-selected-service__name">{selectedService.name}</div>
              <div className="bk-selected-service__price">
                {selectedService.price} <span className="bk-selected-service__unit">/ {selectedService.priceUnit}</span>
              </div>
            </div>
          </div>
        )}

        <hr className="bk-divider" />

        {/* ── Two-column layout ── */}
        <div className={`bk-columns ${!selectedService ? 'bk-columns--disabled' : ''}`}>
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

        {/* ── Status Messages ── */}
        {status === 'success' && (
          <div className="bk-status bk-status--success">
            {t("booking.statusSuccess")}
          </div>
        )}
        {status === 'error' && (
          <div className="bk-status bk-status--error">
            {t("booking.statusError")}
          </div>
        )}
        {status === 'required' && (
          <div className="bk-status bk-status--error">
            {t("booking.statusRequired")}
          </div>
        )}

        {/* ── CTA Button ── */}
        <button 
          type="submit" 
          className={`bk-submit ${status === 'loading' ? 'bk-submit--loading' : ''}`}
          disabled={status === 'loading'}
        >
          <LuCalendar size={18} />
          {status === 'loading' ? t("booking.statusLoading") : t("booking.submitButton")}
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
