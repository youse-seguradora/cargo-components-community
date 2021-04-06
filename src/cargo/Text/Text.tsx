/* eslint-disable react/require-default-props */
import * as React from 'react';
import ReactMarkdownMain, * as ReactMarkdownAlt from 'react-markdown/with-html';
import styled from 'styled-components';
import designTokens from '../../config/designTokens';
import getDefinedStyle from '../../cargo/utils/functions/getDefinedStyle';
import textStyles from './Text.styles';

const ReactMarkdown = ReactMarkdownMain || ReactMarkdownAlt;

/**
 * Utils
 */

export type FontWeight = 'regular' | 'bold';
export type FontSize = 'big' | 'default' | 'small' | 'xsmall';
type FontAlign = 'inherit' | 'left' | 'right' | 'center';

type GetFontFamilyType = (weight: FontWeight) => string;
const getFontFamily: GetFontFamilyType = (weight) => designTokens.typography.text.family[weight];

type GetFontWeightType = (weight: FontWeight) => number;
const getFontWeight: GetFontWeightType = (weight) => {
  switch (weight) {
    case 'bold':
      return 700;
    case 'regular':
      return 400;
    default:
      return 400;
  }
};

type GetFontSizeType = (size: FontSize) => number;
const getFontSize: GetFontSizeType = (size) => designTokens.typography.text.sizes[size].size;

type GetLineHeightType = (size: FontSize) => number;
const getLineHeight: GetLineHeightType = (size) =>
  designTokens.typography.text.sizes[size].lineHeight;

/**
 * Main Component
 * */

type Props = {
  color?: string;
  size: FontSize;
  weight: FontWeight;
  align: FontAlign;
  tabletAlign?: FontAlign;
  desktopAlign?: FontAlign;
  children?: React.ReactNode;
  htmlFor?: string;
};

const StyledText = styled.p<Props>`
  font-family: ${(props) => getFontFamily(props.weight)};
  font-weight: ${(props) => getFontWeight(props.weight)};
  font-size: ${(props) => getFontSize(props.size)}px;
  line-height: ${(props) => getLineHeight(props.size)}px;
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};

  @media screen and (min-width: ${designTokens.breakpoints.tablet}px) {
    text-align: ${(props) => getDefinedStyle([props.tabletAlign, props.align])};
  }
  @media screen and (min-width: ${designTokens.breakpoints.desktop}px) {
    text-align: ${(props) => getDefinedStyle([props.desktopAlign, props.tabletAlign, props.align])};
  }
  ${textStyles}
`;

type TextProps = {
  as?: 'p' | 'label' | 'div' | 'span' | 'sup' | 'sub' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  size?: FontSize;
  weight?: FontWeight;
  align?: FontAlign;
  tabletAlign?: FontAlign;
  desktopAlign?: FontAlign;
  children?: React.ReactNode;
  className?: string;
  markdown?: string;
  htmlFor?: string;
};

const Text = React.memo(
  ({
    as = 'p',
    color = 'inherit',
    size = 'default',
    weight = 'regular',
    align = 'inherit',
    htmlFor,
    tabletAlign,
    desktopAlign,
    children,
    className,
    markdown,
  }: TextProps) => (
    <StyledText
      as={markdown ? 'div' : as}
      className={className}
      color={color}
      size={size}
      weight={weight}
      align={align}
      htmlFor={htmlFor}
      tabletAlign={tabletAlign}
      desktopAlign={desktopAlign}
      // eslint-disable-next-line react/no-children-prop
      children={markdown ? <ReactMarkdown source={markdown} escapeHtml={false} /> : children}
    />
  ),
);

export default Text;
