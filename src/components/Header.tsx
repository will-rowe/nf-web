import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  showOnRoot?: boolean;
}

const Header = ({ showOnRoot = false }: HeaderProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  // Don't show header on root path if showOnRoot is false
  if (!showOnRoot && location.pathname === "/") {
    return null;
  }

  return (
    <header className="absolute top-4 left-4 z-50 flex items-center gap-4">
      <Link
        to="/"
        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
      >
        <Logo
          className="w-12 h-12"
          strokeFill="var(--primary)"
          highlight1="var(--highlight1)"
          highlight2="var(--highlight2)"
          highlight3="var(--highlight3)"
        />
        <h1 className="text-xl font-bold tracking-tight">
          {t("landingPage.title")}
        </h1>
      </Link>
    </header>
  );
};

export default Header;
