import "./SectionHeading.css";

/**
 * SectionHeading — Reusable title + decorative divider.
 *
 * Props:
 *   title  {string}  — Section heading text (e.g. "DỊCH VỤ CỦA CHÚNG TÔI")
 *
 * NOTE: Mirrors the About section title/divider style (SVG waves + dots +
 * centre icon). When the real About Us component is provided, sync
 * font-size, letter-spacing, and SVG proportions here to match 1-to-1.
 */
const SectionHeading = ({ title }) => {
  return (
    <div className="section-heading">
      <h2 className="section-heading__title">{title}</h2>

      {/* Decorative divider — mirrors About section SVG style */}
      <div className="section-heading__divider" aria-hidden="true">
        <svg
          viewBox="0 0 800 60"
          className="section-heading__svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left dots */}
          <circle cx="140" cy="30" r="2.5" fill="#8FA68E" />
          <circle cx="160" cy="30" r="4" fill="#D9C4A8" />

          {/* Left wave */}
          <path
            d="M180,30 Q250,10 320,30"
            fill="none"
            stroke="#8FA68E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Left small heart */}
          <path
            d="M340,35 C 330,25 335,18 340,22 C 345,18 350,25 340,35 Z"
            fill="none"
            stroke="#C89B8C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Centre icon — same image as About section */}
          <image
            href="/icon-title.png"
            x={-40}
            y={-40}
            width={80}
            height={80}
            transform="translate(400, 30)"
          />

          {/* Right small heart */}
          <path
            d="M460,35 C 450,25 455,18 460,22 C 465,18 470,25 460,35 Z"
            fill="none"
            stroke="#C89B8C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right wave */}
          <path
            d="M480,30 Q550,10 620,30"
            fill="none"
            stroke="#8FA68E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Right dots */}
          <circle cx="640" cy="30" r="4" fill="#D9C4A8" />
          <circle cx="660" cy="30" r="2.5" fill="#8FA68E" />
        </svg>
      </div>
    </div>
  );
};

export default SectionHeading;
