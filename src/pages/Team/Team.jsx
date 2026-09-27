import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Team.css";

const Team = () => {
  const { t, language, teamMembers } = useLanguage();
  const lang = language || "vi";

  return (
    <div className="page team-page">
      <section className="team-hero">
        <div className="team-hero__container">
          <SectionHeading title={t("team.pageTitle")} />
          <p className="team-hero__intro">
            {t("team.pageIntro")}
          </p>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="team-grid__container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.id} className="team-card">
                <div className="team-card__image-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card__image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x480/E2CFC2/7a6b5a?text=${encodeURIComponent(member.name.split(' ').pop())}`;
                    }}
                  />
                 
                </div>

                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__position">{member.position[lang]}</p>

                  <div className="team-card__info">
                    <div className="team-card__info-row">
                      <span className="team-card__label">
                        {lang === "vi" ? "Trình độ" : "Degree"}
                      </span>
                      <span className="team-card__value">{member.degree[lang]}</span>
                    </div>
                    <div className="team-card__info-row">
                      <span className="team-card__label">
                        {lang === "vi" ? "Kinh nghiệm" : "Experience"}
                      </span>
                      <span className="team-card__value">{member.experience[lang]}</span>
                    </div>
                  </div>

                  <div className="team-card__section">
                    <h4 className="team-card__section-title">
                      {lang === "vi" ? "Vai trò tại Maia Care" : "Role at Maia Care"}
                    </h4>
                    <p className="team-card__role">{member.role[lang]}</p>
                  </div>

                  {member.certificates && (
                    <div className="team-card__section">
                      <h4 className="team-card__section-title">
                        {lang === "vi" ? "Đào tạo & Chứng nhận chuyên môn" : "Training & Professional Certifications"}
                      </h4>
                      <ul className="team-card__list">
                        {member.certificates[lang].map((cert, idx) => (
                          <li key={idx} className="team-card__list-item">
                            <span className="team-card__dot" aria-hidden="true" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.skills && (
                    <div className="team-card__section">
                      <h4 className="team-card__section-title">
                        {lang === "vi" ? "Đào tạo & Chứng nhận chuyên môn" : "Training & Professional Certifications"}
                      </h4>
                      <ul className="team-card__list">
                        {member.skills[lang].map((skill, idx) => (
                          <li key={idx} className="team-card__list-item">
                            <span className="team-card__dot" aria-hidden="true" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-back">
        <div className="team-back__container">
          <Link to="/about" className="team-back__link">
            <span>←</span>
            {lang === "vi" ? "Quay lại Về Chúng Tôi" : "Back to About Us"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
