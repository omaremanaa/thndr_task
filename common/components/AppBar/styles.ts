import { createStyles, Theme } from "@mui/material/styles";

export default (theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      margin: "10px",
    },
    search: {
      border: `1px solid #e7e8e8`,
      [theme.breakpoints.down("sm")]: {
        width: "150px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100px",
      },
      width: "300px",
      borderRadius: 10,
      paddingInlineStart: 5,
      height: 40,
      background: theme.palette.primary.main,
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    container: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      maxWidth: "5%",
      maxHeight: "5%",
    },
    title: {
      color: theme.palette.primary.main,
    },
  });
