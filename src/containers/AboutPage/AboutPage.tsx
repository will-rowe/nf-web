import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="glass" size="large">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("aboutPage.title")}
        </CardTitle>
        <CardDescription>{t("aboutPage.description")}</CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <img
            src="/img/profile.png"
            alt={t("musicPage.albumArtAlt")}
            className="w-full md:w-42 md:float-left md:mr-8 mb-6 rounded-xl shadow-lg"
          />
          <p className="text-justify">{t("aboutPage.content")}</p>
        </div>
      </CardContent>
      <Separator />
      <CardFooter>
        <Button variant="ghost" size="lg" asChild>
          <Link to="/">
            <ArrowLeft />
            {t("navigation.back")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AboutPage;
