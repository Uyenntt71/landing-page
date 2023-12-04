import "../styles/tailwind.css";
import "../styles/slick.css";
import "../styles/global.css";
import {I18nextProvider} from "react-i18next";
import i18n from '../i18n'; // Import your initialized i18n object
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute="class">
            <I18nextProvider i18n={i18n}>
                <Component {...pageProps} />
            </I18nextProvider>
        </ThemeProvider>
    );
}

export default MyApp;
