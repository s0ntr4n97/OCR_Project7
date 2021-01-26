import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
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

  return (
    <Grid>
      <Grid className={classes.starSelector}>
        <Typography variant="body1" display="inline" className={classes.labelSelector}>From</Typography>
        <TextField type="number" name="starTo" className={classes.starInput} InputProps={{ inputProps: { min: 0, max: 5 } }} />
        <Typography variant="body1" display="inline" className={classes.labelSelector}>To</Typography>
        <TextField type="number" name="starFrom" className={classes.starInput} InputProps={{ inputProps: { min: 0, max: 5 } }} />
        <Button variant="contained" size="small">Find</Button>
      </Grid>
      <Grid container className={classes.root}>
        {props.restaurants.map((rest, idx) => <RestaurantBox key={idx} rest={rest} />)}
      </Grid>
    </Grid>
  )
}


export default ListRestaurants;