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
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="py-2">
          {t("components.contactForm.name")}
        </Label>
        <Input id="name" name="name" type="text" required />
      </div>

      <div>
        <Label htmlFor="email" className="py-2">
          {t("components.contactForm.email")}
        </Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div>
        <Label htmlFor="message" className="py-2">
          {t("components.contactForm.message")}
        </Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <Button
        type="submit"
        variant="default"
        className="cursor-pointer"
        disabled={loading}
      >
        {loading
          ? t("components.contactForm.sending")
          : t("components.contactForm.sendMessage")}
      </Button>
    </form>
  );
};

export default ContactForm;
