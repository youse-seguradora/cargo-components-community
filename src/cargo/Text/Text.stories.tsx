/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

/**
 * Main Stories
 */

type FontSize = 'big' | 'default' | 'small' | 'xsmall';
type FontWeight = 'bold' | 'regular';

const fontSizes: FontSize[] = ['big', 'default', 'small', 'xsmall'];
const fontWeights: FontWeight[] = ['bold', 'regular'];

storiesOf('Cargo/Text', module).add('default', () => (
  <>
    {fontSizes.map((size, i) => (
      <div style={{ padding: 20 }} key={i}>
        {fontWeights.map((weight, j) => (
          <Text key={j} size={size} weight={weight} color={j ? 'grey' : 'black'}>
            The quick brown fox jumps over the lazy dog
          </Text>
        ))}
      </div>
    ))}
  </>
));
