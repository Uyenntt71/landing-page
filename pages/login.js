// pages/index.js
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <div>{t("about")}</div>
      <div>{t("contact")}</div>
    </div>
  );
}

export default HomePage;
