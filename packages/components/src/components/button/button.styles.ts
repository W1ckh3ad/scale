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
    fontFamily: ({ type }) => type.family,
    fontWeight: ({ type }) => type.weight_bold,
    fontSize: ({ type }) => type.size_3,
    lineHeight: ({ type }) => type.leading_5,
    textTransform: 'none',
    letterSpacing: '0.02857em', // TODO probably remove
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
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
    height: 'unset',
    minHeight: 40,
    whiteSpace: 'nowrap',
    // TODO figure out why is this needed?
    '&:before': {
      width: 0,
      content: '""',
      display: 'block',
      height: '100%',
    },
    // Accessibility: Windows High Contrast Mode border
    '&:after': {
      content: '""',
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '1px solid transparent',
      borderRadius: 8,
      pointerEvents: 'none',
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
        `0 0 0 ${size.border_focus}px ${color.focus}`,
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
    paddingTop: 7,
    paddingBottom: 7,
    // Accessibility: Windows High Contrast Mode border
    '&:after': {
      display: 'none',
    },
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
    fontSize: ({ type_variants }) => type_variants.smaller.size,
    lineHeight: ({ type_variants }) => type_variants.smaller.leading,
    minHeight: 32,
    '&$button--icon-only': {
      minWidth: 32,
      minHeight: 32,
    },
  },
};
