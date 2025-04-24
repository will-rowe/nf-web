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

import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

const MusicPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="glass" size="large">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("musicPage.title")}
        </CardTitle>
        <CardDescription>{t("musicPage.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{t("musicPage.content")}</p>
      </CardContent>
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

export default MusicPage;
