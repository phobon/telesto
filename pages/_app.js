import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/base';
import { MDXProvider } from '@mdx-js/react';
import { AnimatePresence } from 'framer-motion';

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

export default class TelestoApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </MDXProvider>
      </ThemeProvider>
    );
  };
}