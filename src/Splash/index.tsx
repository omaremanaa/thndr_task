import NasdaqImage from "../../common/assets/nasdaq_logo.png";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

import styles from "./styles";

const useStyles = makeStyles<Theme>(styles);

const SplashScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.splashScreen}>
      <img src={NasdaqImage} alt="Centered" className={classes.splashLogo} />
      <div className={classes.bottomRightText}>
        Omar Essam Mohamed Abdelmagied Manaa
      </div>
    </div>
  );
};

export default SplashScreen;
