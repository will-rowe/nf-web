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
      </CardHeader>
      <CardContent>
        <p>{t("aboutPage.content")}</p>
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
