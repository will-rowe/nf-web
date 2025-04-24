import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          author: {
            name: "Will Rowe",
            link: "https://willrowe.net",
          },
          cookieConsent: {
            message: "We use cookies for site functionality and analytics. By clicking 'Accept', you consent to our use of cookies.",
            accept: "Accept",
          },
          navigation: {
            back: "Go back",
            about: "About",
            music: "Music",
            contact: "Contact",
          },
          landingPage: {
            title: "Neural Fretwork",
            description: "Signals in sound. Stories in strings.",
          },
          aboutPage: {
            title: "About",
            description: "About Neural Fretwork",
            content: "Placeholder content.",
          },
          musicPage: {
            title: "Music",
            description: "Music by Neural Fretwork",
            content: "Placeholder content.",
          },
          contactPage: {
            title: "Contact",
            description: "Have a question or want to work together? Fill out the form below and I will get back to you soon.",
          },
          components: {
            contactForm: {
              name: "Name",
              email: "Email",
              message: "Message",
              sending: "Sending...",
              sendMessage: "Send message",
            },
            toast: {
              success: "Message sent!",
              successDescription: "I will get back to you soon.",
              error: "Something went wrong",
              errorDescription: "Please try again.",
              networkError: "Network error",
              networkErrorDescription: "Please try again.",
            },
          },
        },
      },
    },
  });

export default i18n;
