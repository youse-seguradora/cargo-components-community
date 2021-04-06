import React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import standardTheme from '../../themes/standardTheme';
import Text from './Text';

describe('Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={standardTheme}>
        <Text />
      </ThemeProvider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
