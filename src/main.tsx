import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./lib/i18n.ts";
import "./index.css";
import App from "./App.tsx";

// Non-blocking font load: dynamically import heavy font after initial render
function LoadFonts() {
  useEffect(() => {
    // Importing the font dynamically prevents render-blocking CSS.
    import("@fontsource/audiowide/400.css").catch(() => {
      /* ignore font load errors */
    });
  }, []);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadFonts />
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </StrictMode>
);
