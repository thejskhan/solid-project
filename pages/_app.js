import Head from "next/head";

import ThemeLayout from "../layouts/Theme";

import { ThemeContextProvider } from "../store/ThemeContext";

import "../sass/app.scss";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Head>
        {/* IMPORTING TYPOGRAPHY */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Fira+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeLayout>
        <Component {...pageProps} />
      </ThemeLayout>
    </ThemeContextProvider>
  );
};

export default App;
