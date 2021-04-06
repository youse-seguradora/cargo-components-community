import { css } from 'styled-components';
import designTokens from '../../config/designTokens';

const textStyles = css`
  .big {
    font-size: ${designTokens.typography.text.sizes.big.size}px;
    line-height: ${designTokens.typography.text.sizes.big.lineHeight}px;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: '${(props) => props.theme.typography.color.primary}';
    font-family: ${designTokens.typography.title.family};
  }

  h2:not(:last-child),
  h3:not(:last-child),
  h4:not(:last-child),
  h5:not(:last-child),
  h6:not(:last-child),
  p:not(:last-child),
  ul:not(:last-child),
  ol:not(:last-child),
  table:not(:last-child),
  iframe:not(:last-child),
  img:not(:last-child) {
    padding-bottom: 24px;
  }

  table,
  img,
  iframe {
    width: 100% !important;
  }

  iframe {
    background-color: ${(props) => props.theme.color.background.primary};
  }

  ul li {
    list-style: disc inside none;
  }

  a {
    color: inherit;
    &:hover {
      background-color: ${(props) => props.theme.color.background.highlightDark};
      color: white;
    }
  }

  sub,
  sup {
    font-weight: normal;
    font-size: ${designTokens.typography.text.sizes.xsmall.size}px;
    line-height: ${designTokens.typography.text.sizes.xsmall.lineHeight}px;
    color: ${(props) => props.theme.typography.color.secondary};
  }

  sub {
    position: relative;
    top: 0px;
  }
`;

export default textStyles;
