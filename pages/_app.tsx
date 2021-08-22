import "styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Container from "components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
export default MyApp;
