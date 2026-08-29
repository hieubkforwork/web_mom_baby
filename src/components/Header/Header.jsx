import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { useLanguage } from "../../context/LanguageContext";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-bar">
        {/* Logo area — placeholder for future logo */}
        <Link to="/" className="logo-box" onClick={closeMenu}>
          <span className="logo-text">{t("header.logo")}</span>
        </Link>

        {/* Center navigation */}
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <div className="nav-inner">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {t("nav.about")}
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {t("nav.service")}
            </NavLink>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {t("nav.contact")}
            </NavLink>

            {/* Mobile-only: Book Now + Lang toggle inside nav */}
            <div className="nav-mobile-actions">
              <Link
                to="/booking"
                className="btn-cta-mobile"
                onClick={closeMenu}
              >
                {t("header.bookNow")}
              </Link>
              <button className="btn-lang-mobile" onClick={toggleLang}>
                {lang === "en" ? "🇻🇳 Tiếng Việt" : "🇬🇧 English"}
              </button>
            </div>
          </div>
        </nav>

        {/* Right actions */}
        <div className="header-actions">
          {/* Language dropdown — hover to reveal */}
          <div className="lang-dropdown">
            <button className="lang-dropdown-trigger" aria-label="Language">
              <GrLanguage size={18} />
            </button>
            <div className="lang-dropdown-menu">
              <button
                className={`lang-dropdown-item ${lang === "vi" ? "lang-dropdown-item--active" : ""}`}
                onClick={() => {
                  toggleLang();
                }}
                disabled={lang === "vi"}
              >
                <span className="lang-dropdown-flag">
                  <img
                    src="https://flagcdn.com/w40/vn.png"
                    alt="Vietnam"
                    width={20}
                    height={14}
                  />
                </span>
                Tiếng Việt
              </button>
              <button
                className={`lang-dropdown-item ${lang === "en" ? "lang-dropdown-item--active" : ""}`}
                onClick={() => {
                  toggleLang();
                }}
                disabled={lang === "en"}
              >
                <span className="lang-dropdown-flag">
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="UK"
                    width={20}
                    height={14}
                  />
                </span>
                English
              </button>
            </div>
          </div>

          {/* Search button */}
          <button
            className="btn-search"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* CTA button */}
          <Link to="/booking" className="btn-cta" onClick={closeMenu}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: "6px" }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {t("header.bookNow")}
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${menuOpen ? "hamburger--active" : ""}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Search bar (expandable) */}
      {searchOpen && (
        <div className="search-bar">
          <div className="search-bar-inner">
            <input
              type="text"
              placeholder={t("header.search")}
              className="search-input"
              autoFocus
            />
            <button
              className="search-close"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </header>
  );
};

export default Header;
