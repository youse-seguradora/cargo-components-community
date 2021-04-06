import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    global: {
      backgroundColor: React.CSSProperties['color'];
      textAreaSelection: {
        backgroundColor: React.CSSProperties['color'];
      };
    };
    typography: {
      color: {
        primaryInverse: React.CSSProperties['color'];
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
        secondaryInverse: React.CSSProperties['color'];
        highlight: React.CSSProperties['color'];
        highlightInverse: React.CSSProperties['color'];
        success: React.CSSProperties['color'];
        warning: React.CSSProperties['color'];
        error: React.CSSProperties['color'];
        disable: React.CSSProperties['color'];
        interactive: React.CSSProperties['color'];
      };
    };
    color: {
      background: {
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
        inverse: React.CSSProperties['color'];
        gradient: React.CSSProperties['color'];
        highlightDark: React.CSSProperties['color'];
        highlight: React.CSSProperties['color'];
        highlightLight: React.CSSProperties['color'];
        success: React.CSSProperties['color'];
        warning: React.CSSProperties['color'];
        error: React.CSSProperties['color'];
        successLight: React.CSSProperties['color'];
        warningLight: React.CSSProperties['color'];
        errorLight: React.CSSProperties['color'];
        disable: React.CSSProperties['color'];
        header: React.CSSProperties['color'];
        focus: React.CSSProperties['color'];
      };
      divisor: {
        standard: React.CSSProperties['color'];
        inverse: React.CSSProperties['color'];
      };
      icon: {
        standard: React.CSSProperties['color'];
        secondaryInverse: React.CSSProperties['color'];
        primary: React.CSSProperties['color'];
      };
    };
    button: {
      primary: {
        default: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
        active: React.CSSProperties['color'];
        focusAfter: React.CSSProperties['color'];
        disabledBackground: React.CSSProperties['color'];
        disabledColor: React.CSSProperties['color'];
      };
      secondary: {
        default: React.CSSProperties['color'];
        light: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
        hoverLight: React.CSSProperties['color'];
        focusAfter: React.CSSProperties['color'];
        disabledBorder: React.CSSProperties['color'];
        disabledColor: React.CSSProperties['color'];
        disabledColorLight: React.CSSProperties['color'];
      };
      invisible: {
        default: React.CSSProperties['color'];
        light: React.CSSProperties['color'];
        dark: React.CSSProperties['color'];
        hoverDefault: React.CSSProperties['color'];
        hoverLight: React.CSSProperties['color'];
        hoverDark: React.CSSProperties['color'];
        activeDefault: React.CSSProperties['color'];
        activeLight: React.CSSProperties['color'];
        activeDark: React.CSSProperties['color'];
        focusAfter: React.CSSProperties['color'];
        disabled: React.CSSProperties['color'];
      };
      link: {
        standard: React.CSSProperties['color'];
        altColorInverse: React.CSSProperties['color'];
        altColor: React.CSSProperties['color'];
        primary: React.CSSProperties['color'];
        secondary: React.CSSProperties['color'];
      };
      labelHighlight: React.CSSProperties['color'];
    };
    cardShadow: {
      standard: {
        idle: React.CSSProperties['color'];
        active: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
        borderRadius: React.CSSProperties['color'];
      };
      inverse: {
        idle: React.CSSProperties['color'];
        active: React.CSSProperties['color'];
        hover: React.CSSProperties['color'];
        borderRadius: React.CSSProperties['color'];
      };
    };
    textField: {
      textFieldOutline: React.CSSProperties['color'];
    };
    border: {
      primary: React.CSSProperties['color'];
      disable: React.CSSProperties['color'];
      primaryInverse: React.CSSProperties['color'];
      secondaryInverse: React.CSSProperties['color'];
      highlight: React.CSSProperties['color'];
    };
  }
}
