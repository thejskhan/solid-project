import Head from "next/head";

import DefaultLayout from "@/layouts/Default";

import styles from "./Root.module.scss";

const RootPage = (props) => {
  return (
    <main className={styles.container}>
      <Head>
        {/* TITLE */}
        <title>Solid Project 2.0</title>
        <meta property="og:title" content="Solid Project 2.0" key="title" />
      </Head>

      <div className="py-4"></div>
    </main>
  );
};

// LAYOUT DECLARATION
RootPage.Layout = DefaultLayout;

export default RootPage;
