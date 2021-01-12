import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Modal, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {

  },
  paper: {
    position: 'absolute',
    width: "60%",
    height:"80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
}));


function getModalStyle() {
  const top = 10;
  const left = 20;

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
      <Grid container style={modalStyle} className={classes.paper}>
        <Typography variant="h6" align="center">Review</Typography>
      </Grid>
    </Modal>
  )

}

export default Review;