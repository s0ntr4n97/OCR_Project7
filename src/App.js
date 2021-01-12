import Grid from '@material-ui/core/Grid';
import './App.css'
import Map from './components/map';
import Restaurants from './components/restaurants';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';
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
  const [location, setLocation] = useState({ lat: 10.8231, long: 106.6297 });
  const [restaurants, setRestaurants] = useState([
    {
      "id": 1,
      "restaurantName": "Bronco",
      "address": "39 Rue des Petites Écuries, 75010 Paris",
      "lat": 10.8240,
      "long": 106.6297,
      "price": "10-20$",
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
      "restaurantName": "Babalou",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8540,
      "long": 106.6197,
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
      "averageStar": 4
    },
    {
      "restaurantName": "Babalou",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8350,
      "long": 106.6307,
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
      "averageStar": 4
    },
    {
      "restaurantName": "Babalou",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8005,
      "long": 106.6397,
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
      ]
    },
    {
      "restaurantName": "Babalou",
      "address": "4 Rue Lamarck, 75018 Paris",
      "lat": 10.8240,
      "long": 106.6297,
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
      ]
    }
  ])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // setLocation({lat: position.coords.latitude, long: position.coords.longitude})
      })
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={classes.grid}>
        <Grid item md={7}>
          <Map className={classes.map} location={location} restaurants={restaurants} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Restaurants restaurants={restaurants} />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
