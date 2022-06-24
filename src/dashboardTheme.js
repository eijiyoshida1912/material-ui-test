import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          backgroundColor: "#009be5",
          "&:hover": {
            backgroundColor: "#006db3",
          },
        },
      },
    },
  },
  palette: {},
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "0.5px",
      textTransform: "capitalize",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: [4, 8, 12, 16, 20],
  // theme.spacing(4)
});
