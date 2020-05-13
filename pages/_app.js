import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/base';

import { MDXProvider } from '@mdx-js/react';

import Meta from '@/components/Meta';

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

export default class TelestoApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Meta />
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </Container>
    )
  }
}