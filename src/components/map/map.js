import React, { Fragment, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents, Popup } from 'react-leaflet';
import { Input, makeStyles, TextField, Typography } from '@material-ui/core';
import L from 'leaflet';
import customIcon from './marker.svg'
import restIcon from './restaurant.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden"
  }
}));

function LocationMarker(props) {

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
      props.setPosition({ lat: e.latlng.lat, lng: e.latlng.lng })
    },

  });

  return (
    <Marker position={props.position}>
      <Popup>You are here</Popup>
    </Marker>
  )

}

function AddRestaurant() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    }
  });

  return position === null ? null : (
    <Marker position={position}>
    </Marker>
  )
}


// const personIcon = new L.Icon({
//   iconUrl: customIcon,
//   iconRetinaUrl: customIcon,
//   iconAnchor: [32, 64],
//   iconSize: new L.Point(40, 55),
//   className: 'leaflet-div-icon'
// });


// const RestaurantIcon = new L.icon({
//   iconUrl: restIcon,
//   iconRetinaUrl: restIcon,
//   iconAnchor: [32, 64],
//   iconSize: new L.Point(40, 55),
//   className: 'leaflet-div-icon'
// })


export default function Map(props) {
  const classes = useStyles();

  return (
    <MapContainer className={classes.root} center={[props.position.lat, props.position.lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker setPosition={props.setPosition} position={props.position} />
      <AddRestaurant />
      { props.restaurants.map((rest, idx) =>
        <Marker key={idx} position={[rest.lat, rest.lng]}>
          <Popup>
            <Typography variant="h6">{rest.restaurantName}</Typography>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}