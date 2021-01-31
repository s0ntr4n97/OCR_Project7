import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListRestaurants from './ListRestaurants';
import { Container, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: "40px",
    overflowY: "scroll"
  },
  title: {
    marginBottom: "60px",
    fontWeight: "600"
  }

}));


function Restaurants(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title} gutterBottom>Restaurants in Hanoi</Typography>
      <ListRestaurants restaurants={props.restaurants} addComment={props.addComment} setRestaurants={props.setRestaurants} allRestaurants={props.allRestaurants} />
    </Container>
  )
}


export default Restaurants;