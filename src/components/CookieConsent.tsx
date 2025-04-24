import { useEffect } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Cookie } from "lucide-react";
import { initConsentFeatures } from "@/lib/analytics";

const COOKIE_KEY = "nf_cookie_consent_v1";

export default function CookieConsent() {
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);

    if (consent === "true") {
      initConsentFeatures();
    } else {
      toast(
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-2">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              {t("cookieConsent.message")}
            </p>
          </div>
        </div>,
        {
          duration: Infinity,
          action: {
            label: t("cookieConsent.accept"),
            onClick: () => {
              localStorage.setItem(COOKIE_KEY, "true");
              initConsentFeatures();
              toast.dismiss();
            },
          },
          className:
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        }
      );
    }
  }, [t]);

  return null;
}
