import { createStyles } from "@mui/material/styles";

export default () =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      flex: 1,
      height: "100px",
      margin: "auto",
    },
    skeleton: {
      marginBottom: "10px",
    },
    number: {
      fontSize: "36px",
      fontWeight: "bold",
      margin: "0",
      color: "#0996c7",
    },
    label: {
      fontSize: "14px",
      color: "#666",
      margin: "0",
    },
  });
