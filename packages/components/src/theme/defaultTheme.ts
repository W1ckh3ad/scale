import { Theme } from './interfaces';

export const defaultTheme: Theme = {
  colors: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      lighter: '#768fff',
      default: '#e20074',
      darker: '#0039cb',
      contrastText: '#fff',
    },
    secondary: {
      lighter: '#ff5bff',
      default: '#d500f9',
      darker: '#9e00c5',
      contrastText: '#fff',
    },
    error: {
      lighter: '#ff5983',
      default: '#f50057',
      darker: '#bb002f',
      contrastText: '#fff',
    },
    warning: {
      lighter: '#fff64f',
      default: '#ffc400',
      darker: '#c79400',
      contrastText: '#fff',
    },
    info: {
      lighter: '#69e2ff',
      default: '#00b0ff',
      darker: '#0081cb',
      contrastText: '#fff',
    },
    success: {
      lighter: '#66ffa6',
      default: '#00e676',
      darker: '#00b248',
      contrastText: '#fff',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    text: {
      default: '#000',
      primary: 'rgba(0, 0, 0, .9)',
      secondary: 'rgba(0, 0, 0, .6)',
      disabled: 'rgba(0, 0, 0, .4)',
      hint: 'rgba(0, 0, 0, .4)',
    },
    divider: {
      default: 'rgba(0, 0, 0, .1)',
    },
    background: {
      default: '#fff',
    },
    action: {
      active: 'rgba(0, 0, 0, .6)',
      activeOpacity: 0.6,
      hover: 'rgba(0, 0, 0, .4)',
      hoverOpacity: 0.4,
      selected: 'rgba(0, 0, 0, .8)',
      selectedOpacity: 0.8,
      disabled: 'rgba(0, 0, 0, .3)',
      disabledOpacity: 0.3,
      focus: 'rgba(0, 0, 0, .1)',
      focusOpacity: 0.1,
    },
  },
  shadows: {
    0: 'none',
    1: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    2: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    3: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
  typography: {
    variants: {
      h1: {
        fontSize: 40,
        lineHeight: '48px',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      h2: {
        fontSize: 32,
        lineHeight: '40px',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      h3: {
        fontSize: 24,
        lineHeight: '32px',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      h4: {
        fontSize: 20,
        lineHeight: '24px',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      h5: {
        fontSize: 16,
        lineHeight: '24px',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      h6: {
        fontSize: 16,
        lineHeight: '22px',
        fontFamily: 'TeleNeoWeb-Bold',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      body: {
        fontSize: 16,
        lineHeight: '24px',
        fontFamily: 'TeleNeoWeb-Medium',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      'body-short': {
        fontSize: 16,
        lineHeight: '20px',
        fontFamily: 'TeleNeoWeb-Medium',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      'body-long': {
        fontSize: 16,
        lineHeight: '24px',
        fontFamily: 'TeleNeoWeb-Medium',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      'body-large': {
        fontSize: 20,
        lineHeight: '32px',
        fontFamily: 'TeleNeoWeb-Medium',
        fontWeight: 'unset',
        letterSpacing: 0,
      },
      button: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'none',
      },
      collapsible: {
        fontSize: '1.25rem',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        marginBottom: 0,
        textTransform: 'none',
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {},
  icons: {
    close:
      'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    separator:
      'M8.306 22.679a1.137 1.137 0 01-.061-1.481l.06-.07 7.741-8.126-7.74-8.13a1.137 1.137 0 01-.061-1.481l.06-.07c.387-.406 1-.427 1.411-.064l.066.064L19 13.001 9.782 22.68a1.01 1.01 0 01-1.476 0z',
  },
  components: {
    Modal: {
      transitions: {
        modalContent: {
          IN: {
            duration: 200,
            transition: 'fade-in-top',
          },
          OUT: {
            transition: 'fadeOutUp',
            duration: 200,
          },
        },
        backDrop: {
          IN: {
            duration: 200,
            transition: 'fadeIn',
          },
          OUT: {
            transition: 'fadeOut',
            duration: 200,
          },
        },
      },
    },
  },
};
