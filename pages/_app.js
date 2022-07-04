import { Fragment } from "react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import { getFetcher } from "@/utils/fetchers";
import { ThemeContextProvider } from "@/context/ThemeContext";

import "@/styles/global.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;

  return (
    <SessionProvider>
      <SWRConfig
        value={{
          // refreshInterval: 0,
          revalidateOnFocus: false,
          fetcher: getFetcher,
        }}
      >
        <RecoilRoot>
          <ThemeContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeContextProvider>
        </RecoilRoot>
      </SWRConfig>
    </SessionProvider>
  );
};

export default App;
