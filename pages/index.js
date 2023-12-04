import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Feature from "../components/Feature";
import HowToWork from "../components/HowToWork";
import Demo from "../components/Demo";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const LANGUAGE_KEY = "language";

export default function Home() {
  const { i18n, t } = useTranslation();
  if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
      if (event.key === LANGUAGE_KEY) {
        const newLanguage = event.newValue;
        i18n.changeLanguage(newLanguage);
      }
    });
  }

  useEffect(() => {
    const language = localStorage.getItem(LANGUAGE_KEY);
    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <>
      <SeoHead title="Home Page" />
      <Layout>
        <Hero />
        <Feature />
        <HowToWork />
        <Demo />
      </Layout>
    </>
  );
}
