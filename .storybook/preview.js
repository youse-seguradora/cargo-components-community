import React from 'react';
import GlobalStyles from '../src/cargo/GlobalStyles/GlobalStyles';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import standardTheme from '../src/themes/standardTheme';

const StorybookGlobalStyleOverrides = createGlobalStyle`
  body {
    background: white;
  }
`;

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={standardTheme}>
        <GlobalStyles />
        <StorybookGlobalStyleOverrides />
        <Story />
      </ThemeProvider>
    </>
  ),
];
