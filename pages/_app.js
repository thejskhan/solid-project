import { Fragment } from "react";

import ThemeLayout from "@/layouts/Theme";

import { ThemeContextProvider } from "@/store/ThemeContext";

import "@/sass/app.scss";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    <ThemeContextProvider>
      <ThemeLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeLayout>
    </ThemeContextProvider>
  );
};

export default App;
