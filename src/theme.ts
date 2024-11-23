import { createTheme, ThemeOptions } from "@mui/material/styles";

const generateSafariSpacingOverrides = (): Record<
  string,
  { width: string }
> => {
  const spacings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newGridSpacing: Record<string, { width: string }> = {};
  spacings.forEach((spacing) => {
    newGridSpacing[`spacing-xs-${spacing}`] = {
      width: `calc(100% + ${8 * spacing + 1}px)`,
    };
  });
  return newGridSpacing;
};

const themeOptions: ThemeOptions = {
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#071413",
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        ...generateSafariSpacingOverrides(),
      },
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      ["@media (max-width:600px)"]: {
        fontSize: "50px",
      },
      fontSize: "100px",
      fontWeight: "500",
    },
    h2: {
      ["@media (max-width:600px)"]: {
        fontSize: "18px",
      },
      fontSize: "28px",
      fontWeight: "700",
    },
    h3: {
      ["@media (max-width:600px)"]: {
        fontSize: "16px",
      },
      fontSize: "24px",
      fontWeight: "500",
    },
    h4: {
      ["@media (max-width:600px)"]: {
        fontSize: "14px",
      },
      fontSize: "20px",
      fontWeight: "700",
    },
    h5: {
      ["@media (max-width:600px)"]: {
        fontSize: "14px",
      },
      fontSize: "20px",
      fontWeight: "500",
    },
    h6: {
      ["@media (max-width:600px)"]: {
        fontSize: "13px",
      },
      fontSize: "18px",
      fontWeight: "500",
      textTransform: "none",
    },
    subtitle1: {
      ["@media (max-width:600px)"]: {
        fontSize: "12px",
      },
      fontSize: "16px",
      fontWeight: "500",
      textTransform: "none",
    },
    body1: {
      ["@media (max-width:600px)"]: {
        fontSize: "13px",
      },
      fontSize: "18px",
      fontWeight: "400",
    },
    button: {
      fontWeight: "bold",
      textTransform: "none",
      ["@media (max-width:600px)"]: {
        fontSize: "10px",
      },
      fontSize: "18px",
    },
  },
  palette: {
    primary: {
      main: "#EEEEEE",
    },
    secondary: {
      main: "#222831",
    },
    success: {
      main: "#00ADB5",
    },
    info: {
      main: "#393E46",
    },
    background: {
      default: "#EEEEEE",
    },
  },
};

export default createTheme(themeOptions);
