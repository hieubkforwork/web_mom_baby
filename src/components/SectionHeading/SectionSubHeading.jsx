import "./SectionSubHeading.css";

const SectionSubHeading = ({ title }) => {
  return (
    <section className="section-subheading">
      <h2 className="section-subheading__heading">
        {title}
      </h2>

      <div
        className="section-subheading__divider"
        aria-hidden="true"
      >
        <span className="section-subheading__line" />

        <svg
          className="section-subheading__icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8,3 C6.5,0.5 3,1.5 3,4 C3,7.5 8,11 8,11 C8,11 13,7.5 13,4 C13,1.5 9.5,0.5 8,3 Z"
            fill="#A8BFA8"
            opacity="0.6"
          />
        </svg>

        <span className="section-subheading__line" />
      </div>
    </section>
  );
};

export default SectionSubHeading;