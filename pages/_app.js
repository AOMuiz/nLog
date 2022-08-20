import Nav from "../src/components/Nav";
import { Layout } from "../styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <nav>
          <Nav />
        </nav>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
