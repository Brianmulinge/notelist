import { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";
import React from "react";

const getInitialProps = createGetInitialProps();

export default class _Document extends React.Component {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
