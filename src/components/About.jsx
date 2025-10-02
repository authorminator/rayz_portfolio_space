import portfolioContent from "../contents";
import BoxWithShadow from "./BoxWithShadow";
import "./About.css";

function About() {
  const { about, contact, footer } = portfolioContent;

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <BoxWithShadow>
          <div className="about-description circle background-warm img-container">
            <img
              src={portfolioContent.personal.profileIcon}
              alt={portfolioContent.personal.name}
              className="profile-img"
            />
          </div>
        </BoxWithShadow>
        <BoxWithShadow>
          <div className="about-description circle background-warm width-400">
            <p>{about.intro}</p>
          </div>
        </BoxWithShadow>
        <BoxWithShadow>
          <div className="about-description circle background-warm width-400">
            <p>{about.description}</p>
          </div>
        </BoxWithShadow>

        <BoxWithShadow style={{ width: "100%" }}>
          <div className="about-description circle background-cool width-350 contact-info">
            <h3>Contact & Links</h3>
            <p>
              Email:{" "}
              <a href={`mailto:${contact.info[0].value}`}>
                {contact.info[0].value}
              </a>
            </p>
            <p>Location: {contact.info[1].value}</p>
            <div className="social-links-about">
              <a
                href={footer.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={footer.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </BoxWithShadow>
      </div>
    </section>
  );
}

export default About;
