import { Fragment } from "react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import { getFetcher } from "@/utils/fetchers";

import "@/sass/app.scss";

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </SWRConfig>
    </SessionProvider>
  );
};

export default App;
