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
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <BackgroundGraphic className="absolute inset-0 z-0 stroke-stone-200 dark:stroke-stone-50 fill-stone-200 dark:fill-stone-50" />

        {/* Header */}
        <Header showOnRoot={false} />

        {/* Theme toggle */}
        <header className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </header>

        {/* Footer */}
        <Footer />

        {/* Main content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Toast provider */}
        <Toaster />

        {/* Cookie consent */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
