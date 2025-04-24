import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type ContactFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

const ContactForm = ({ onSubmit, loading }: ContactFormProps) => {
  const { t } = useTranslation();

  return (
    <Card className="max-w-xl mx-auto p-4 mt-8">
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">{t("components.contactForm.name")}</Label>
            <Input id="name" name="name" type="text" required />
          </div>

          <div>
            <Label htmlFor="email">{t("components.contactForm.email")}</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div>
            <Label htmlFor="message">
              {t("components.contactForm.message")}
            </Label>
            <Textarea id="message" name="message" rows={5} required />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? t("components.contactForm.sending")
              : t("components.contactForm.sendMessage")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
