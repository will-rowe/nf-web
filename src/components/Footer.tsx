import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="absolute bottom-4 left-4 z-50 text-sm text-muted-foreground flex justify-between w-full px-8 pb-4">
      <div>
        <Link to={t("author.link")} target="_blank">
          © {currentYear} {t("author.name")}
        </Link>
      </div>
      <div className="flex space-x-4 pr-4">
        <a
          href="https://www.instagram.com/neuralfretwork/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-red-500 transition-colors duration-200"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/@neuralfretwork"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-red-500 transition-colors duration-200"
          aria-label="YouTube"
        >
          <FaYoutube className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
