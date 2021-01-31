import { Grid, makeStyles } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F3F3F3",
    marginBottom: "30px",
    borderRadius: "10px"
  },
}));


export default function ReviewBox(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} zeroMinWidth className={classes.root}>
      <h4 style={{ margin: 0, textAlign: "left" }}>{props.review.stars}
        <StarRateIcon color="error" style={{ "verticalAlign": "middle" }} />
      </h4>
      <p style={{ textAlign: "left" }}>
        {props.review.comment}
      </p>
    </Grid>
  )
}