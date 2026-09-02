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
import "./Booking.css";

/* ── Dropdown options ── */
const serviceOptions = [
  "Dịch vụ cho bé",
  "Dịch vụ cho mẹ bầu",
  "Dịch vụ cho mẹ sau sinh",
];

const timeOptions = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

/* ── Background SVG Decorations ── */
const BgDecorations = () => (
  <div className="bk-bg" aria-hidden="true">
    {/* Top-left: sage branch */}
    <svg
      className="bk-bg__tl"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,180 Q40,120 30,80 Q25,50 60,30"
        stroke="#A8BFA8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <ellipse
        cx="55"
        cy="28"
        rx="12"
        ry="7"
        transform="rotate(-30 55 28)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.45"
      />
      <ellipse
        cx="42"
        cy="45"
        rx="10"
        ry="6"
        transform="rotate(15 42 45)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <ellipse
        cx="28"
        cy="68"
        rx="11"
        ry="6"
        transform="rotate(-20 28 68)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <ellipse
        cx="35"
        cy="95"
        rx="9"
        ry="5"
        transform="rotate(10 35 95)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
    </svg>

    {/* Top-left hearts */}
    <svg
      className="bk-bg__hearts-tl"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35,25 C30,15 20,18 20,25 C20,33 35,42 35,42 C35,42 50,33 50,25 C50,18 40,15 35,25 Z"
        stroke="#E8B4B8"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M55,10 C53,5 48,7 48,10 C48,14 55,18 55,18 C55,18 62,14 62,10 C62,7 57,5 55,10 Z"
        stroke="#E8B4B8"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
    </svg>

    {/* Bottom-left: sage branch */}
    <svg
      className="bk-bg__bl"
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20,10 Q50,60 40,110 Q35,150 60,190"
        stroke="#A8BFA8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      <ellipse
        cx="48"
        cy="55"
        rx="14"
        ry="7"
        transform="rotate(25 48 55)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <ellipse
        cx="35"
        cy="90"
        rx="12"
        ry="6"
        transform="rotate(-15 35 90)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <ellipse
        cx="45"
        cy="125"
        rx="13"
        ry="6"
        transform="rotate(20 45 125)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <ellipse
        cx="38"
        cy="160"
        rx="11"
        ry="5"
        transform="rotate(-10 38 160)"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
    </svg>

    {/* Mid-right heart */}
    <svg
      className="bk-bg__hearts-mr"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30,22 C26,14 18,16 18,22 C18,29 30,36 30,36 C30,36 42,29 42,22 C42,16 34,14 30,22 Z"
        stroke="#E8B4B8"
        strokeWidth="1"
        fill="none"
        opacity="0.45"
      />
    </svg>

    {/* Bottom-right: mother & baby line-art */}
    <svg
      className="bk-bg__br"
      viewBox="0 0 260 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mother silhouette */}
      <path
        d="M130,40 Q125,30 130,22 Q138,12 145,22 Q150,30 145,40"
        stroke="#A8BFA8"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M120,45 Q130,38 145,45 Q155,55 150,80 Q148,100 155,130"
        stroke="#A8BFA8"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      <path
        d="M120,45 Q115,55 118,80 Q120,100 110,130"
        stroke="#A8BFA8"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* Baby outline */}
      <ellipse
        cx="140"
        cy="72"
        rx="12"
        ry="10"
        stroke="#A8BFA8"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M133,80 Q140,90 148,80"
        stroke="#A8BFA8"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Surrounding leaves */}
      <path
        d="M90,120 Q75,100 80,80"
        stroke="#A8BFA8"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      <ellipse
        cx="78"
        cy="82"
        rx="10"
        ry="5"
        transform="rotate(-40 78 82)"
        stroke="#A8BFA8"
        strokeWidth="0.8"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M170,100 Q185,85 190,65"
        stroke="#A8BFA8"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      <ellipse
        cx="188"
        cy="68"
        rx="10"
        ry="5"
        transform="rotate(35 188 68)"
        stroke="#A8BFA8"
        strokeWidth="0.8"
        fill="none"
        opacity="0.25"
      />
      {/* Small flowers */}
      <circle
        cx="85"
        cy="140"
        r="4"
        stroke="#E2CFC2"
        strokeWidth="0.8"
        fill="none"
        opacity="0.35"
      />
      <circle cx="85" cy="140" r="1.5" fill="#E8B4B8" opacity="0.3" />
      <circle
        cx="175"
        cy="135"
        r="3.5"
        stroke="#E2CFC2"
        strokeWidth="0.8"
        fill="none"
        opacity="0.35"
      />
      <circle cx="175" cy="135" r="1.2" fill="#E8B4B8" opacity="0.3" />
      {/* Heart near mother */}
      <path
        d="M160,48 C158,43 153,44 153,48 C153,52 160,56 160,56 C160,56 167,52 167,48 C167,44 162,43 160,48 Z"
        stroke="#E8B4B8"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
    </svg>
  </div>
);

/* ── Component ── */
const Booking = () => {
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

  return (
    <div className="page booking-page">
      <BgDecorations />

      {/* ── Header ── */}
      <header className="bk-header">
        <h1 className="bk-header__title">
          Booking dịch vụ
          <LuHeart className="bk-header__heart" size={20} />
        </h1>
        <p className="bk-header__desc">
          Vui lòng điền đầy đủ thông tin và chọn thời gian phù hợp. Chúng tôi sẽ
          xác nhận lịch hẹn với bạn trong thời gian sớm nhất.
        </p>
      </header>

      {/* ── Booking Card ── */}
      <form className="bk-card" onSubmit={handleSubmit} noValidate>
        {/* ── Service Selector ── */}
        <div className="bk-service">
          <label className="bk-service__label">
            <LuClipboardList size={18} className="bk-icon bk-icon--sage" />
            Chọn tên dịch vụ
          </label>
          <div className="bk-select-wrap">
            <select
              className="bk-select bk-select--lg"
              value={form.service}
              onChange={update("service")}
              required
            >
              <option value="" disabled>
                Chọn dịch vụ
              </option>
              {serviceOptions.map((s) => (
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
              1. Thông tin khách hàng
            </h2>

            <div className="bk-field">
              <label className="bk-label">
                Họ và tên <span className="bk-required">*</span>
              </label>
              <input
                type="text"
                className="bk-input"
                placeholder="Nhập họ và tên"
                value={form.name}
                onChange={update("name")}
                required
              />
            </div>

            <div className="bk-field">
              <label className="bk-label">
                Số điện thoại <span className="bk-required">*</span>
              </label>
              <input
                type="tel"
                className="bk-input"
                placeholder="Nhập số điện thoại"
                value={form.phone}
                onChange={update("phone")}
                required
              />
            </div>
            <div className="bk-field">
              <label className="bk-label">Ghi chú (nếu có)</label>
              <textarea
                className="bk-textarea"
                placeholder="Nhập ghi chú của bạn..."
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
              2. Chọn thời gian
            </h2>

            <div className="bk-field">
              <label className="bk-label">
                Chọn ngày <span className="bk-required">*</span>
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

            <div className="bk-field">
              <label className="bk-label">
                Chọn giờ <span className="bk-required">*</span>
              </label>
              <div className="bk-select-wrap">
                <select
                  className="bk-select"
                  value={form.time}
                  onChange={update("time")}
                  required
                >
                  <option value="" disabled>
                    Chọn thời gian
                  </option>
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <LuChevronDown className="bk-select-arrow" size={18} />
              </div>
            </div>

            <div className="bk-work-hours">
              <LuClock size={15} className="bk-icon bk-icon--sage" />
              <span>
                Thời gian làm việc: 08:00 - 20:00 (Tất cả các ngày trong tuần)
              </span>
            </div>
          </div>
        </div>

        {/* ── CTA Button ── */}
        <button type="submit" className="bk-submit">
          <LuCalendar size={18} />
          Xác nhận đặt lịch
        </button>

        {/* ── Privacy ── */}
        <p className="bk-privacy">
          <LuLock size={14} className="bk-icon bk-icon--sage" />
          Thông tin của bạn được bảo mật tuyệt đối
        </p>
      </form>
    </div>
  );
};

export default Booking;
