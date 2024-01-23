// Styles
import "../styles/globals.css";
import "../styles/reset.css";

// Components
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
