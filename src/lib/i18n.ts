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
            description: "Made with frets and neurons (probably)",
            content: "Neural Fretwork is a place for some music I’ve made. That’s pretty much it. Have a listen if you’re into that kind of thing.",
          },
          musicPage: {
            title: "Music",
            description: "Terraforming part I",
            content: {
              paragraph1: "Terraforming is a concept album that unfolds in a distant, controlled future. Aboard a vast, autonomous transport vessel, an individual known only as EARTHER-1.36e9 — or Earl — awakens unexpectedly from hypersleep, their memories fragmented, their destination unknown.",
              paragraph2: "Disembodied announcements from the ship’s tannoy system inform the passengers that they are en route to assist in the construction of a “new world,” under the guidance of an entity known as the Terraforming Collective. No personnel are visible. No context is given. Only a directive: comply.",
              paragraph3: "As Earl regains consciousness, others begin to stir. Confusion turns to unease. Where are they? Who sent them? And why? What begins as mystery slowly unravels into quiet rebellion aboard a vessel that no one is meant to control.",
              paragraph4: "The album follows the arc of this awakening — from eerie isolation and fragmented memory to confrontation, defiance, and the looming threat of suppression as the Terraforming Collective dispatches an envoy to correct the disturbance.",
              paragraph5: "Terraforming is a story of memory, control, and resistance — a sonic exploration of what it means to wake up in a world built by others, and choose whether or not to help shape it.",
            },
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
