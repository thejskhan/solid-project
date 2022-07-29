import type { AppProps } from "next/app";
import type { Page } from "@/types/page";

import { Fragment } from "react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import { getFetcher } from "@/utils/fetchers";
import { ThemeContextProvider } from "@/context/ThemeContext";

import "@/styles/global.css";

interface Props extends AppProps {
  Component: Page;
}

const App = ({ Component, pageProps }: Props) => {
  const Layout = Component.Layout ?? Fragment;

  return (
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
  );
};

export default App;
