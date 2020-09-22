import { JssStyle } from 'jss';
import { getTransition } from '../../theme/helpers';

export const styles: JssStyle = {
  button: {
    color: ({ colors }) => colors.common.black,
    '--icon-color': ({ colors }) => colors.common.black,
    background: ({ colors }) => colors.grey[300],
    border: 'none',
    borderRadius: 8,
    outline: 'none',
    fontSize: ({ typography }) => typography.variants.button.fontSize,
    fontWeight: ({ typography }) =>
      typography.variants.button.fontWeightRegular,
    textTransform: ({ typography }) => typography.variants.button.textTransform,
    letterSpacing: ({ typography }) => typography.variants.button.letterSpacing,
    transition: theme => getTransition(theme, 'all', 'shorter', 'easeInOut'),
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    verticalAlign: 'middle',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    // padding: '1px 16px',
    boxShadow: 'none',
    textDecoration: 'none',
    fontFamily: 'TeleNeoWeb-Bold',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
    height: 'unset',
    minHeight: 40,
    lineHeight: '24px',
    whiteSpace: 'nowrap',
    '&:before': {
      width: 0,
      content: '""',
      display: 'block',
      height: '100%',
    },
    '&:hover': {
      transition: theme => getTransition(theme, 'all', 'standard', 'easeInOut'),
      boxShadow: 'none',
      textDecoration: 'none',
      borderColor: ({ palette }) => palette.magentaHover,
      background: ({ palette }) => palette.magentaHover,
      color: ({ palette }) => palette.white,
      '--icon-color': ({ palette }) => palette.white,
    },
    '&, &:focus': {
      borderColor: ({ palette }) => palette.magenta,
      background: ({ palette }) => palette.magenta,
      color: ({ palette }) => palette.white,
      '--icon-color': ({ palette }) => palette.white,
    },
    '&:focus': {
      boxShadow: ({ size, color }) =>
        `0 0 0 ${size.border_focus} ${color.focus}`,
    },
    '&:active, &.selected': {
      borderColor: ({ palette }) => palette.magentaActive,
      background: ({ palette }) => palette.magentaActive,
      color: ({ palette }) => palette.white,
      '--icon-color': ({ palette }) => palette.white,
    },
  },
  'button--disabled': {
    '&, &:hover': {
      cursor: 'not-allowed',
      background: ({ background }) => background.disabled,
      // border: ({ palette }) => `1px solid ${palette.grayDisabledBackground}`,
      color: ({ color }) => color.disabled,
      '--icon-color': ({ color }) => color.disabled,
      opacity: 1,
    },
    '&$button--variant-secondary, &$button--variant-secondary:hover': {
      background: 'none',
      border: ({ background }) => `1px solid ${background.disabled}`,
      color: ({ color }) => color.disabled,
      '--icon-color': ({ color }) => color.disabled,
    },
  },
  button__before: {
    marginRight: '.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  button__after: {
    marginLeft: '.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  'button--icon-only': {
    padding: 8,
  },
  'button--variant-secondary': {
    '&, &:focus, &.focus': {
      border: ({ palette }) => `1px solid ${palette.gray}`,
      background: 'none',
      color: ({ palette }) => palette.gray,
      '--icon-color': ({ palette }) => palette.gray,
    },
    '&:hover, &.hover': {
      borderColor: ({ palette }) => palette.magentaHover,
      background: 'none',
      color: ({ palette }) => palette.magentaHover,
      '--icon-color': ({ palette }) => palette.magentaHover,
    },
    '&:active, &.active, &.selected': {
      borderColor: ({ palette }) => palette.magentaActive,
      background: 'none',
      color: ({ palette }) => palette.magentaActive,
      '--icon-color': ({ palette }) => palette.magentaActive,
    },
  },
  'button--size-small': {
    fontSize: 12,
    lineHeight: '16px',
    '&$button--icon-only': {
      minWidth: 32,
      minHeight: 32,
    },
  },
};
