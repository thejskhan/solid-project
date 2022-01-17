import { Fragment } from "react";

// import { Provider } from "next-auth/client";

import ThemeLayout from "@/layouts/Theme";

import { ThemeContextProvider } from "@/store/ThemeContext";

import "@/sass/app.scss";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    // <Provider session={session}>
    <ThemeContextProvider>
      <ThemeLayout>
        {
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
      </ThemeLayout>
    </ThemeContextProvider>
    // </Provider>
  );
};

export default App;
