// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

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

  // Prevent duplicate script tag
  const existingScript = document.querySelector(
    `script[src^="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"]`
  );
  if (existingScript) {
    console.warn("GA script already present in DOM, not adding again");
    return;
  }

  // Create GA script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;

  script.onload = () => {
    // Setup dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

    // Init gtag
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, {
      debug_mode: false,
      anonymize_ip: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: false,
    });

    console.log("Google Analytics successfully initialized");
  };

  script.onerror = () => {
    console.error("Failed to load Google Analytics script");
  };
  document.head.appendChild(script);
};


export const initConsentFeatures = () => {
  initGoogleAnalytics();
};
