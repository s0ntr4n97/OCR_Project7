import Grid from '@material-ui/core/Grid';
import './App.css'
import Map from './components/map';
import Restaurants from './components/restaurants';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'Cabin',
      'Roboto',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#717171'
    },
  }
});

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
    padding: "0px",
    height: "100vh"
  },
  map: {
    position: "relative",
    bottom: 0
  }
}));

function App() {
  const classes = useStyles();
  const [position, setPosition] = useState({ lat: 10.8231, lng: 106.6297 });
  const [allRestaurants, setAllRestaurants] = useState([
    {
      "id": 1,
      "restaurantName": "Bronco",
      "address": "39 Rue des Petites Écuries, 75010 Paris",
      "lat": 10.8260,
      "lng": 106.6497,
      "price": "10-20$",
      "image": "/images/rest.jpg",
      "ratings": [
        {
          "stars": 4,
          "comment": "Great! But not many veggie options."
        },
        {
          "stars": 5,
          "comment": "My favorite restaurant!"
        }
      ],
      "averageStar": 4.5,
      "source": "json"
    },
    // adding new restaurant: source="user"
    {
      "id": 2,
      "restaurantName": "Baba",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.820,
      "lng": 106.6497,
      "image": "/images/rest.jpg",
      "price": "5-15$",
      "ratings": [
        {
          "stars": 5,
          "comment": "Tiny pizzeria next to Sacre Coeur!"
        },
        {
          "stars": 3,
          "comment": "Meh, it was fine."
        }
      ],
      "averageStar": 4,
      "source": "json"
    },
    {
      "id": 3,
      "restaurantName": "Babalou",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8350,
      "lng": 106.6307,
      "image": "/images/rest.jpg",
      "price": "5-15$",
      "ratings": [
        {
          "stars": 5,
          "comment": "Tiny pizzeria next to Sacre Coeur!"
        },
        {
          "stars": 3,
          "comment": "Meh, it was fine."
        }
      ],
      "averageStar": 4,
      "source": "json"
    },
    {
      "id": 4,
      "restaurantName": "Roma",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8205,
      "lng": 106.6097,
      "price": "5-15$",
      "image": "/images/rest.jpg",
      "averageStar": 4,
      "ratings": [
        {
          "stars": 5,
          "comment": "Tiny pizzeria next to Sacre Coeur!"
        },
        {
          "stars": 3,
          "comment": "Meh, it was fine."
        }
      ],
      "source": "json"
    },
    {
      "id": 5,
      "restaurantName": "Kema",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8240,
      "lng": 106.6297,
      "image": "/images/rest.jpg",
      "price": "5-15$",
      "averageStar": 4,
      "ratings": [
        {
          "stars": 5,
          "comment": "Tiny pizzeria next to Sacre Coeur!"
        },
        {
          "stars": 3,
          "comment": "Meh, it was fine."
        }
      ],
      "source": "json"
    }
  ])
  const [restaurants, setRestaurants] = useState(allRestaurants)

  const calcAvgStar = (rest) => {
    let avgStar = 0
    for (let rating of rest["ratings"]) {
      avgStar += rating["stars"]
    }
    return avgStar / rest["ratings"].length;
  }

  const addComment = (restId, rating) => {
    for (let restaurant of allRestaurants) {
      if (restaurant["id"] === restId) {
        restaurant["ratings"].unshift(rating);
        restaurant["averageStar"] = calcAvgStar(restaurant);
      }
    }
  }


  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={classes.grid}>
        <Grid item md={7}>
          <Map className={classes.map} position={position} restaurants={restaurants} setPosition={setPosition} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Restaurants restaurants={restaurants} addComment={addComment} setRestaurants={setRestaurants} allRestaurants={allRestaurants} />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
