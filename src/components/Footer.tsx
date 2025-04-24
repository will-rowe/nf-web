import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="absolute bottom-4 left-4 z-50 text-sm text-muted-foreground">
      <Link to={t("author.link")} target="_blank">
        © {currentYear} {t("author.name")}.
      </Link>
    </footer>
  );
};

export default Footer;
