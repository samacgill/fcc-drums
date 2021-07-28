import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fontsource/roboto";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { brand } from "./utilities/brand";
import { green, blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[200],
      main: green[600],
      dark: green[800],
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[600],
      dark: blueGrey[800],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
