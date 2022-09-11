import Nav from "../src/components/Nav";
import { Layout } from "../styles";
import "../styles/globals.css";
import "../public/styles/global.css";
import Head from "next/head";
import ReadingBar from "../src/components/ReadingBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Layout>
        {/* <ReadingBar /> */}
        <nav>
          <Nav />
        </nav>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
