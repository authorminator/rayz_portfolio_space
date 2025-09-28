import portfolioContent from "../contents";
import "./Footer.css";

function Footer() {
  const { personal, footer } = portfolioContent;

  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="footer-name">
          {personal.profileEmoji} {personal.name}
        </span>
        <span className="footer-copyright">{footer.copyright}</span>
      </div>
      <div className="footer-right">
        {footer.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
