// Taken from https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        {/* Podríamos agregar acá un favicon, custom font, FB pixel, estilos externos,
        otros scripts de JS */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
