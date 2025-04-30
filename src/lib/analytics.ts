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

  // Initialize the dataLayer first
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  
  // Set up the gtag function
  window.gtag = gtag;
  
  // Configure gtag before loading the script
  gtag('js', new Date());
  gtag('config', measurementId, {
    debug_mode: true,
    send_page_view: true
  });

  // Create the script element for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  
  // Add error handling for script loading
  script.onerror = () => {
    console.error('Failed to load Google Analytics script');
  };
  
  // Append the script to the document
  document.head.appendChild(script);

  // Debug logging
  console.log('Google Analytics initialized with ID:', measurementId);
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