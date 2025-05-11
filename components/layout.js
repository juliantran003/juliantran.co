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
          content="My work explores the relationship between songwriting, soundscapes and mixed media scores. Most of it is written using a mixture of physical and digital instruments."
          key="desc"
        />
        <meta property="og:title" content={"Julian Tran"} />
        <meta
          property="og:description"
          content="My work explores the relationship between songwriting, soundscapes and mixed media scores. Most of it is written using a mixture of physical and digital instruments."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="keywords"
          content="julian, tran, artist, composer, songwriting, music, score, film, julian tran, website, julian tran website, julian tran composer, julian tran music, sound, sound artist, songwriter, singer-songwriter, julian tran singer-songwriter, julian tran artist, portfolio, julian tran portfolio"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>

      <main>{children}</main>
    </>
  );
}
