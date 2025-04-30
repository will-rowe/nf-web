import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundGraphic from "@/components/Background";
import { ThemeToggle } from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LandingPage, AboutPage, MusicPage } from "@/containers";
import CookieConsent from "@/components/CookieConsent";
import ContactPage from "./containers/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Background */}
        <BackgroundGraphic className="absolute inset-0 z-0 stroke-stone-200 dark:stroke-stone-50 fill-stone-200 dark:fill-stone-50" />

        {/* Header (absolute) */}
        <Header showOnRoot={false} />
        <header className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </header>

        {/* Main content */}
        <main className="relative z-20 flex-1 flex flex-col items-center justify-center pt-24 pb-24">
          <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast notifications */}
        <Toaster />

        {/* Cookie consent */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
