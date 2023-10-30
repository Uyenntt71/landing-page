// next-i18next.config.js
import { resolve } from "path";

export const i18n = {
    locales: ["en", "fr"],
    defaultLocale: "en",
};
export const localePath = resolve("./public/locales");
