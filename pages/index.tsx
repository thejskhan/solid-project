import type { Page } from "@/types/page";
import Head from "next/head";

import DefaultLayout from "@/layouts/Default";

const RootPage: Page = () => {
  return (
    <main className="absolute w-full pt-16 h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-100 to-slate-50 dark:from-teal-900 dark:to-slate-900">
      <Head>
        {/* TITLE */}
        <title>Solid Project 2.5</title>
        <meta property="og:title" content="Solid Project 2.5" key="title" />
      </Head>

      <h1 className="font-semibold text-4xl dark:text-teal-500 text-slate-700 mb-4 sm:text-6xl">
        Solid Project 2.5
      </h1>
      <p className="font-mono max-w-lg text-xl dark:text-slate-300 text-slate-700 mb-4">
        Further developments on the way
      </p>
      <span className="font-mono text-slate-500">developed by jskhan</span>
    </main>
  );
};

// LAYOUT DECLARATION
RootPage.Layout = DefaultLayout;

export default RootPage;
