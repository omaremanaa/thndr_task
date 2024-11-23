import { AppBar, Input, Toolbar, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

import styles from "./styles";
import NasdaqImage from "../../assets/nasdaq.png";

const useStyles = makeStyles<Theme>(styles);

function NasdaqAppBar({
  setSearchStock,
  searchStock,
}: {
  setSearchStock: (value: string) => void;
  searchStock: string;
}) {
  const classes = useStyles();

  return (
    <>
      <div>
        <AppBar position="static" color="info">
          <Toolbar className={classes.toolbar}>
            <div className={classes.container}>
              <img src={NasdaqImage} alt="Logo" className={classes.logo} />
              <Typography
                variant="h6"
                component="div"
                className={classes.title}
              >
                Nasdaq
              </Typography>
            </div>
            <Input
              placeholder={"Search"}
              className={classes.search}
              disableUnderline
              value={searchStock}
              onChange={(e) => setSearchStock(e.target.value)}
            />
            <div />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default NasdaqAppBar;
