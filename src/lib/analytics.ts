// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Google Analytics initialization
export const initGoogleAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID not found in environment variables');
    return;
  }

  // Create the script element for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  
  // Initialize the dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  
  // Set up the gtag function
  window.gtag = gtag;
  
  // Configure gtag
  gtag('js', new Date());
  gtag('config', measurementId);
  
  // Append the script to the document
  document.head.appendChild(script);
};

// Spotify embed initialization
export const initSpotifyEmbed = () => {
  
  console.log("Spotify embed initialized");
};

// Combined initialization function
export const initConsentFeatures = () => {
  initGoogleAnalytics();
  initSpotifyEmbed();
}; 