import { Color, createTheme, PaletteColor } from '@mui/material';
import { CSSProperties } from 'react';
import colors from './colors';
import sizes from './sizes';

// allow configuration using `createTheme`

type ColorPartial = Partial<Color>;
type ColorPalettePartial = Partial<PaletteColor>;

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dialogTitle: true;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    dialogTitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    dialogTitle?: CSSProperties;
  }

  interface PaletteColor extends ColorPartial {}
  interface PaletteOptions extends ColorPalettePartial {
    special: {
      50: string;
      300: string;
    };
  }
  interface Palette {
    special: {
      50: string;
      300: string;
    };
  }
}

// end of allow configuration using `createTheme`

const theme = createTheme({
  spacing: sizes.spacingBase,

  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 300,
      fontSize: '6.125rem',
      letterSpacing: '-0.09375em',
      textTransform: 'capitalize',
    },
    h2: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 300,
      fontSize: '3.813rem',
      letterSpacing: '-0.03125em',
      textTransform: 'capitalize',
    },
    h3: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 400,
      fontSize: '3.063rem',
      letterSpacing: '0',
      textTransform: 'none',
    },
    h4: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 400,
      fontSize: '2.188rem',
      letterSpacing: '0.009375em',
      textTransform: 'none',
    },
    h5: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 400,
      fontSize: '1.5rem',
      letterSpacing: '0',
      textTransform: 'none',
    },
    h6: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0.009375em',
      textTransform: 'none',
    },
    subtitle1: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.009375em',
      textTransform: 'none',
    },
    subtitle2: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.00625em',
      textTransform: 'none',
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.03125em',
      textTransform: 'none',
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: '0.015625em',
      textTransform: 'none',
    },
    button: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.078125em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '0.75rem',
      letterSpacing: '0.025em',
      textTransform: 'none',
    },
    overline: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '0.75rem',
      letterSpacing: '0.025em',
      textTransform: 'none',
    },
    dialogTitle: {
      fontFamily: "'Overpass', sans-serif",
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: '0.015625em',
      textTransform: 'none',
    },
  },

  palette: {
    ...colors,
  },

  components: {
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: colors.primary[300],
          '&.Mui-checked': {
            color: colors.primary[300],
          },
          '&.MuiCheckbox-indeterminate': {
            color: colors.primary[300],
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        colorPrimary: {
          color: colors.primary[300],
          '&.Mui-checked': {
            color: colors.primary[300],
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          //  minWidth: 36 * sizes.spacingBase,
        },
      },
    },
  },
});

export default theme;

export const SubmissionWorkspaceHeaderHeight = 16;
export const AppHeaderHeight = 7;

export const ExcessHeaderHeight = 10;
export const MarketsHeaderHeight = 19;

export const DialogHeaderHeight = 7;
export const ActionsFooterHeight = 9;
export const DialogFooterElevation = 8;

export const DialogMaxHeight = 80;
export const AlertDialogMaxHeight = 47;
export const DialogMaxWidth = 91;

export const StyledTooltipMinWidth = 33;
export const StyledTooltipMaxWidth = 38;

export const dialogTransitionDuration = '400ms';

export const FormControlPaddingBottom = 3;
export const FormFieldsSpacingVertical = 3;
export const FormFieldsSpacingHorizontal = 1;
