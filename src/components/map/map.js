import React, { Fragment, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { makeStyles } from '@material-ui/core';
import { Popup } from 'leaflet';



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden"
  }
}));

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    // click() {
    //   map.locate();
    // },
    locationfound(e) {
      // setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },

  });

  useEffect(() => {
    map.locate();
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )



}


export default function Map(props) {
  const classes = useStyles()

  return (
    <MapContainer className={classes.root} center={[props.location.lat, props.location.long]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />

      {/* { props.restaurants.map((rest, idx) => <Marker key={idx} position={[rest.lat, rest.long]} />)} */}
    </MapContainer>
  )
}