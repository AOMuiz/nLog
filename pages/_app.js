import Nav from "../src/components/Nav";
import { Layout } from "../styles";
import "../styles/globals.css";
import "../public/styles/global.css";
import ReadingBar from "../src/components/ReadingBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
