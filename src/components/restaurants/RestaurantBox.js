import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarRateIcon from '@material-ui/icons/StarRate';
import Review from '../review';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "200px",
    borderTop: "1px solid #e0e1e1"
  },
  restBox: {
    padding: "20px 10px 20px 10px",
  },
  reviewBtn: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#3797A4",
    },
    bottom: 0,
    position: "absolute",
    right: 0,
    transition: "0.1s ease-in-out"
  }
}));


function RestaurantBox(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const openReview = () => {
    setOpen(true);
  }

  const closeReview = () => {
    setOpen(false);
  }


  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.restBox}>
        <Grid item xs={10} style={{ "position": "relative" }}>
          <Grid>
            <Typography variant="h5" gutterBottom style={{ "marginBottom": "15px" }} color="primary">{props.rest.restaurantName}</Typography>
            <Typography variant="body1" gutterBottom color="secondary">{props.rest.address}</Typography>
            <Typography variant="body1" gutterBottom color="secondary">{props.rest.price}</Typography>
          </Grid>
          <Grid style={{ "bottom": 0, "position": "absolute" }}>
            <Typography variant="body1" gutterBottom color="primary">
              <StarRateIcon color="error" style={{ "verticalAlign": "middle" }} />{props.rest.averageStar}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ "position": "relative", "textAlign": "right" }}>
          <FavoriteBorderOutlinedIcon />
          <Button className={classes.reviewBtn} variant="contained" size="small" onClick={openReview}>Review</Button>
        </Grid>
      </Grid>
      <Review open={open} closeReview={closeReview} rest={props.rest} />
    </Grid>
  )

}

export default RestaurantBox;