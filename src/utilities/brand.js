import { Switch } from "@material-ui/core";
import { green, blueGrey } from "@material-ui/core/colors";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";

export const ColorSwitch = withStyles({
  switchBase: {
    color: blueGrey[800],
    "&$checked": {
      color: green[600],
    },
    "&$checked + $track": {
      backgroundColor: green[600],
    },
  },
  checked: {},
  track: {
    backgroundColor: blueGrey[800],
  },
})(Switch);
