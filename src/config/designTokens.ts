import getCargoSpacing from '../cargo/utils/functions/getCargoSpacing';

/**
 * Responsiveness
 */

export type BreakPoint = 'mobile' | 'tablet' | 'desktop';

/**
 * Typography
 */

export type TypographyWeight = 'light' | 'regular' | 'bold';
export type TypographySize = 'big' | 'default' | 'small' | 'xsmall';

type TypographySizeSettings = {
  size: number;
  lineHeight: number;
};

type TypographyResponsiveSizeSettings = {
  size: { desktop: number; default: number };
  lineHeight: { desktop: number; default: number };
};

type TypographyResponsiveCollection = {
  family: Record<TypographyWeight, string>;
  sizes: Record<TypographySize, TypographyResponsiveSizeSettings>;
};

type TypographyCollection = {
  family: Record<TypographyWeight, string>;
  sizes: Record<TypographySize, TypographySizeSettings>;
};

/**
 * Shadows
 */

type ShadowsType = {
  idle: string;
  active: string;
  hover: string;
};

/**
 * Root Schema
 */

type DesignTokens = {
  grid: {
    gutter: number;
    columns: Record<BreakPoint, number>;
  };
  breakpoints: Record<BreakPoint, number>;
  typography: {
    title: TypographyResponsiveCollection;
    text: TypographyCollection;
  };
  colors: Record<string, string>;
  shadows: {
    default: ShadowsType;
    dark: ShadowsType;
  };
  borderRadius: {
    cardShadow: string;
  };
};

/**
 * Data
 */

const designTokens: DesignTokens = {
  grid: {
    gutter: getCargoSpacing(4),
    columns: {
      mobile: 4,
      tablet: 8,
      desktop: 12,
    },
  },
  breakpoints: {
    mobile: 0,
    tablet: 640,
    desktop: 960,
  },
  typography: {
    title: {
      family: {
        light: 'Roboto, sans-serif',
        regular: 'Roboto, sans-serif',
        bold: 'Roboto, sans-serif',
      },
      sizes: {
        big: {
          size: { desktop: 56, default: 32 },
          lineHeight: { desktop: 64, default: 40 },
        },
        default: {
          size: { desktop: 40, default: 24 },
          lineHeight: { desktop: 48, default: 32 },
        },
        small: {
          size: { desktop: 32, default: 20 },
          lineHeight: { desktop: 40, default: 28 },
        },
        xsmall: {
          size: { desktop: 24, default: 16 },
          lineHeight: { desktop: 32, default: 20 },
        },
      },
    },
    text: {
      family: {
        light: 'Roboto, sans-serif',
        regular: 'Roboto, sans-serif',
        bold: 'Roboto, sans-serif',
      },
      sizes: {
        big: {
          size: 20,
          lineHeight: 32,
        },
        default: {
          size: 16,
          lineHeight: 24,
        },
        small: {
          size: 14,
          lineHeight: 24,
        },
        xsmall: {
          size: 12,
          lineHeight: 20,
        },
      },
    },
  },
  colors: {
    orange050: '#fff7e1',
    orange100: '#fedd84',
    orange300: '#fed153',
    orange400: '#fdc630',
    orange500: '#fcbd1b',
    orange600: '#fcaf17',
    orange700: '#ff971b',
    orange800: '#fb8c15',
    orange900: '#f96d14',

    yellow300: '#feedc0',
    yellow400: '#fde197',
    yellow500: '#fdd56d',
    yellow600: '#fcc944',
    yellow700: '#fcbd1b',
    yellow800: '#e6ac19',
    yellow900: '#b88a14',

    grey000: '#ffffff',
    grey025: '#fafafa',
    grey050: '#ebedee',
    grey100: '#ced1d4',
    grey200: '#adb3b8',
    grey300: '#8c959b',
    grey400: '#747e85',
    grey500: '#5b6770',
    grey600: '#535f68',
    grey700: '#49545d',
    grey800: '#404a53',
    grey900: '#2f3941',

    purple050: '#F3EDF7',
    purple100: '#DBC9E9',
    purple200: '#C3A6DA',
    purple300: '#AC82CC',
    purple400: '#945FBD',
    purple500: '#884DB6',
    purple600: '#7D3CAF',
    purple700: '#7129A8',
    purple800: '#5F259F',
    purple900: '#4B0E8D',

    gradient: 'linear-gradient(226.17deg, #4B0E8D 0%, #884DB6 102.13%)',

    green300: '#c2e4da',
    green500: '#c2e4da',
    green600: '#449d79',
    green700: '#209c79',
    green800: '#1c8b6b',
    green900: '#19795e',

    red300: '#FBD0D9',
    red400: '#d23134',
    red700: '#d10A33',

    transparentLight008: 'rgba(255, 255, 255, 0.08)',
    transparent008: 'rgba(0,0,0,0.08)',
  },
  shadows: {
    default: {
      idle: '0 2px 16px 0 rgba(47, 57, 65, 0.16)',
      active: '0 2px 8px -2px rgba(47, 57, 65, 0.16)',
      hover: '0 2px 16px 0 rgba(47, 57, 65, 0.16), 0 2px 8px -2px rgba(47, 57, 65, 0.16)',
    },
    dark: {
      idle: '0 2px 16px 0 rgba(47, 57, 65, 0.16)',
      active: '0 2px 8px -2px rgba(47, 57, 65, 0.32)',
      hover:
        '0 2px 16px 0 rgba(47, 57, 65, 0.16), 0 2px 8px -2px rgba(47, 57, 65, 0.32), 0 2px 16px 0 rgba(47, 57, 65, 0.32)',
    },
  },
  borderRadius: {
    cardShadow: '8px',
  },
};

export default designTokens;
