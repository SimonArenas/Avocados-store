import "styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Container from "components/Container";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar navigation={navigation} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
export default MyApp;
