import React from "react";

import { Skeleton } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

import styles from "./styles";

const useStyles = makeStyles<Theme>(styles);

interface JobCardProps {
  number?: string;
  label?: string;
  isLoading?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ number, label, isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isLoading ? (
        <>
          <Skeleton
            variant="rounded"
            width={100}
            height={40}
            className={classes.skeleton}
          />
          <Skeleton variant="rounded" width={200} height={20} />
        </>
      ) : (
        <>
          <h1 className={classes.number}>{number}</h1>
          <p className={classes.label}>{label}</p>
        </>
      )}
    </div>
  );
};

export default JobCard;
