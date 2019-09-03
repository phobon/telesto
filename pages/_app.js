import React from 'react';
import App from 'next/app';
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
      <>
        <Head>
          <title>telesto</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="telesto" />
          <meta name="description" content="An mdx-powered app template" />
          <link rel="icon" href="/static/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://github.com/phobon/telesto" />
          <meta property="og:title" content="telesto" />
          <meta property="og:description" content="An mdx-powered app template" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://github.com/phobon/telesto" />
          <meta property="twitter:title" content="telesto" />
          <meta property="twitter:description" content="An mdx-powered app template" />
          <meta property="twitter:image" content="" />

        </Head>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </>
    )
  }
}