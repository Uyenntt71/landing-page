import "../styles/tailwind.css";
import "../styles/slick.css";
import { I18nextProvider } from "react-i18next";
import i18n from '../i18n'; // Import your initialized i18n object

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
