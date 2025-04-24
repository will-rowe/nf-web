import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="glass" size="large">
      <div className="flex flex-col items-center justify-center">
        <Logo
          className="w-48 h-48"
          strokeFill="var(--primary)"
          highlight1="var(--highlight1)"
          highlight2="var(--highlight2)"
          highlight3="var(--highlight3)"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("landingPage.title")}
        </CardTitle>
        <CardDescription>{t("landingPage.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
      <CardFooter className="flex justify-center gap-4 sm:flex-row gap-4 sm:gap-8">
        <Button variant="ghost" size="lg" asChild>
          <Link to="/about">{t("navigation.about")}</Link>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <Link to="/music">{t("navigation.music")}</Link>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <Link to="/contact">{t("navigation.contact")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LandingPage;
