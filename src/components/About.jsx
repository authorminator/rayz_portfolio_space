import portfolioContent from "../contents";
import "./About.css";

function About() {
  const { about, contact, footer } = portfolioContent;

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <p className="about-description">{about.intro}</p>
        <p className="about-description">{about.description}</p>

        <div className="contact-info">
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
      </div>
    </section>
  );
}

export default About;
