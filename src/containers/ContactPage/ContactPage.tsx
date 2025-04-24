import ContactForm from "@/components/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const formId = import.meta.env.VITE_FORM_ID;

const ContactPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success(t("components.toast.success"), {
          description: t("components.toast.successDescription"),
        });

        form.reset();

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error(t("components.toast.error"), {
          description: t("components.toast.errorDescription"),
        });
      }
    } catch (err) {
      toast.error(t("components.toast.networkError"), {
        description: t("components.toast.networkErrorDescription"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="glass" size="large">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("contactPage.title")}
        </CardTitle>
        <CardDescription>{t("contactPage.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm onSubmit={handleSubmit} loading={loading} />
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="lg" asChild>
          <Link to="/">{t("navigation.back")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactPage;
