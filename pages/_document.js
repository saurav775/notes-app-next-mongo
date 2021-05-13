import Document, { Html, Head, Main, NextScript } from "next/document";
import { createGlobalStyle, ServerStyleSheet } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
      text-decoration: none;
      cursor: pointer;
  }

  input, button {
    outline: none;
    border: none;
  }

  body {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) =>
        sheet.collectStyles(
          <>
            <GlobalStyles />
            <App {...props} />
          </>
        )
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
