import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden"
  }
}));


export default function Map(props) {
  const classes = useStyles()
  return (
    <MapContainer className={classes.root} center={[props.location.lat, props.location.long]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { props.restaurants.map((rest, idx) => <Marker key={idx} position={[rest.lat, rest.long]} />)}
    </MapContainer>
  )
}