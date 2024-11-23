import { createStyles, Theme } from "@mui/material/styles";

export default (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      gap: "6px",
      padding: "10px",
      justifyContent: "start",
      alignItems: "start",
      alignContent: "start",
      justifyItems: "start",
      flexWrap: "wrap",
      width: "100%",
    },
    row: {
      flex: "0 0 calc(25% - 6px)",
      [theme.breakpoints.down("lg")]: {
        flex: "0 0 calc(33.33% - 6px)",
      },
      [theme.breakpoints.down("md")]: {
        flex: "0 0 calc(50% - 6px)",
      },
      [theme.breakpoints.down("sm")]: {
        flex: "0 0 calc(100% - 6px)",
      },
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
  });
