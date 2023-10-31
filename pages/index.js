import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n, t } = useTranslation();
  if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
      if (event.key === "language") {
        const newLanguage = event.newValue;
        i18n.changeLanguage(newLanguage);
      }
    });
  }

  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
