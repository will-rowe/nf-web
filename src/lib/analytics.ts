// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const initGoogleAnalytics = () => {
  // SSR safeguard
  if (typeof window === "undefined" || typeof document === "undefined") {
    console.warn("GA init skipped: window or document not available");
    return;
  }

  // Prevent multiple initializations
  if (window.dataLayer) {
    console.warn("GA already initialized, skipping duplicate setup");
    return;
  }

  // Find all consent-blocked GA scripts
  const consentScripts = document.querySelectorAll<HTMLScriptElement>(
    'script[type="text/plain"][data-cookie-consent="analytics"]'
  );

  if (consentScripts.length === 0) {
    console.warn("No consent-tagged GA scripts found — nothing to activate");
    return;
  }

  console.log("Activating GA scripts after user consent...");

  consentScripts.forEach((el) => {
    const script = document.createElement("script");
    script.type = "text/javascript";

    if (el.src) {
      script.src = el.src;
      script.async = el.async;
    } else {
      script.textContent = el.textContent;
    }

    script.onerror = () => {
      console.error("Failed to load Google Analytics script from consent tag");
    };

    script.onload = () => {
      console.log("Google Analytics script loaded via consent activation");
    };

    document.head.appendChild(script);
    el.remove();
  });
};


export const initConsentFeatures = () => {
  initGoogleAnalytics();
};
