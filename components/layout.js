// IMPORTS
import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>Julian Tran</title>
        <meta
          name="description"
          content="Songs & scores
      "
          key="desc"
        />
        <meta property="og:title" content={"Julian Tran"} />
        <meta
          property="og:description"
          content="Songs & scores
      "
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="keywords"
          content="julian, tran, artist, composer, songwriting, music, score, film"
        />
      </Head>

      <main>{children}</main>
    </>
  );
}
