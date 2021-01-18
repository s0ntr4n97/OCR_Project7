import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, FormControl, Grid, Input, InputLabel, Modal, OutlinedInput, Typography } from '@material-ui/core';
import ReviewBox from './ReviewBox'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 30px 10px 30px"
  },
  paper: {
    position: 'absolute',
    width: "40%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  marginBottomBig: {
    marginBottom: theme.spacing(6)
  },
  marginBottomSmall: {
    marginBottom: theme.spacing(3)
  },
  reviewInput: {
    height: "100%"
  },
  reviewBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    backgroundColor: "#000"
  }
}));


function getModalStyle() {
  const top = 10;
  const left = 30;

  return {
    top: `${top}%`,
    margin: "auto",
    left: `${left}%`
  };
}


function Review(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);


  return (
    <Modal
      open={props.open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={props.closeReview}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Grid style={modalStyle} className={classes.paper}>
        <Grid container className={classes.root}>
          <Typography variant="h6" className={classes.marginBottomBig}>{props.rest.restaurantName} </Typography>
          <Grid container className={classes.marginBottomBig}>
            <Grid item xs={12} className={classes.marginBottomSmall}>
              <FormControl fullWidth className={classes.reviewInput} variant="outlined">
                <OutlinedInput placeholder="Write your comment" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">Submit</Button>
            </Grid>
            <Divider variant="fullWidth" className={classes.divider} />
          </Grid>
          <Grid container spacing={4}>
            {props.rest.ratings.map((review, idx) => <ReviewBox review={review} key={idx} />)}
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  )

}

export default Review;