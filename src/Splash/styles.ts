import { createStyles, Theme } from "@mui/material/styles";

export default (theme: Theme) =>
  createStyles({
    splashScreen: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.background.default,
      position: "relative",
      overflow: "hidden",
    },
    splashLogo: {
      maxWidth: "40%",
      maxHeight: "40%",
    },
    bottomRightText: {
      position: "absolute",
      bottom: "20px",
      right: "20px",
      fontSize: "1.2rem",
      color: "#222831",
    },
  });
