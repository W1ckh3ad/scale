import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'progress-bar': {
    width: '100%',
    maxWidth: '30rem', // TODO ?
  },
  'progress-bar--has-error': {
    '& $progress-bar__outer': {
      border: ({ color }) => `1px solid ${color.error}`,
    },
    '& $progress-bar__status-description': {
      color: ({ color }) => `${color.error}`,
    },
    '& scale-icon': {
      '--icon-color': ({ color }) => `${color.error}`,
    },
  },
  'progress-bar--disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
    '& .progress-bar__label': {
      color: ({ color }) => color.disabled,
    },
  },
  'progress-bar__label': {
    display: 'block',
    padding: '0.5rem 0',
  },
  'progress-bar-wrapper': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    '& scale-icon': {
      // marginTop: 12,
    },
  },
  'progress-bar__outer': {
    margin: '8px 8px 8px 0',
    position: 'relative',
    height: '8px',
    borderRadius: '100px',
    border: () => `1px solid #6c6c6c`,
    // background: '#ebeef5',
    overflow: 'hidden',
    width: '100%',
  },
  'progress-bar__inner': {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    // borderRadius: '100px',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    animationFillMode: 'both',
    background: ({ colors }) => `${colors.primary.default}`,
  },
  'progress-bar__inner-status': {
    color: '#fff',
    fontSize: ({ type }) => type.size_2,
    padding: '0 12px',
  },
  'progress-bar__status': {
    // color: '#606266',
    fontSize: ({ type }) => type.size_2,
    fontWeight: ({ type }) => type.weight_extrabold,
    display: 'inline-block',
  },
  'progress-bar__status-description': {
    color: '#6c6c6c',
    fontSize: ({ type }) => type.size_2,
    fontWeight: ({ type }) => type.weight_bold,
  },
  'progress-bar__aria-live': {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
  },
};
