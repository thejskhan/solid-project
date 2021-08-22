import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* IMPORTING TYPOGRAPHY */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Fira+Sans:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
