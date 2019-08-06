import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/base';

import { MDXProvider } from '@mdx-js/react';

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

export default class TelestoApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>telesto</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="Personal website for developer and product designer, Ben McCormick." />
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </Container>
    )
  }
}