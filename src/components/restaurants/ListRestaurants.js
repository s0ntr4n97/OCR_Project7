import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import RestaurantBox from './RestaurantBox';

const useStyles = makeStyles((theme) => ({
  root: {
    '&::-webkit-scrollbar': {
      background: "transparent"
    },
    height: "100vh"
  },
  starSelector: {
    marginBottom: "10px"
  },
  starInput: {
    padding: "0 10px 0 10px",
    width: "40px"
  },
  labelSelector: {
    verticalAlign: "middle",
  }
}
));


function ListRestaurants(props) {
  const classes = useStyles();
  const [fromRating, setFromRating] = useState(0)
  const [toRating, setToRating] = useState(5)


  const filterByRating = () => {
    let newSet = []

    for (let rest of props.allRestaurants) {
      if (rest["averageStar"] >= fromRating && rest["averageStar"] <= toRating) {
        newSet.push(rest);
      }
    }
    props.setRestaurants(newSet);
  }


  return (
    <Grid>
      <Grid className={classes.starSelector}>
        <Typography variant="body1" display="inline" className={classes.labelSelector}>From</Typography>
        <TextField
          type="number"
          name="starTo"
          className={classes.starInput}
          InputProps={{ inputProps: { min: 0, max: 5 } }}
          onChange={e => setFromRating(e.target.value)} />
        <Typography
          variant="body1"
          display="inline"
          className={classes.labelSelector}>To
          </Typography>
        <TextField
          type="number"
          name="starFrom"
          className={classes.starInput}
          InputProps={{ inputProps: { min: 0, max: 5 } }}
          onChange={e => setToRating(e.target.value)}
        />
        <Button variant="contained" size="small" onClick={filterByRating}>Find</Button>
      </Grid>
      <Grid container className={classes.root}>
        {props.restaurants.map((rest, idx) => <RestaurantBox key={idx} rest={rest} addComment={props.addComment} />)}
      </Grid>
    </Grid>
  )
}


export default ListRestaurants;