// Global theme definition
export const global = {
  cssVariables: true,
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontFamily: "DelaGothicOne",
      fontSize: 48,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    subtitle1: {
      fontFamily: "Marcellus",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            transition: ".1s all",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 5,
          "& > .MuiMenuItem-root": {
            borderRadius: 4,
            transition: ".1s all",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(nunito-variable.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Marcellus';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(marcellus-regular.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'DelaGothicOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(dela-gothic-one-regular.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
};

// Light mode and dark mode definition
export const light = {
  palette: {
    mode: "light",
    divider: "rgba(0, 0, 0, 0.08)",
  },
};
export const dark = {
  palette: {
    mode: "dark",
    divider: "rgba(255, 255, 255, 0.08)",
    background: {
      paper: "#001121",
      default: "#001428",
    },
  },
};

// Accent colors definition
export const accentColors = {
  blue: {
    palette: {
      primary: {
        main: "#007FFF",
        light: "#007FFF33",
      },
    },
  },
  orange: {
    palette: {
      primary: {
        main: "#ff4400",
        light: "#ff440033",
      },
    },
  },
  pink: {
    palette: {
      primary: {
        main: "#e180ff",
        light: "#e180ff33",
      },
    },
  },
};
