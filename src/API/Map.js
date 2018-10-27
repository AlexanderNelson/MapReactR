/*global google*/
//above google comment required for marker animations
import React, {Component} from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import ErrorBoundary from "../component/errorHandling/error-boundary";

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
  <GoogleMap
    id="map"
    defaultZoom={8}
    zoom={props.zoom}
    defaultCenter={parseFloat({ lat: -34.397, lng: 150.644 })}
    center={props.center}
    >
    {props.markers &&
      props.markers
        .filter(marker => marker.isVisible)
        .map((marker, idx, arr) => {
        //match venue with marker
        const venueInfo = props.venues.find(venue => venue.id === marker.id);
      return (
      <Marker
        key={idx}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => props.handleMarkerClick(marker)}
        //markers drop when loaded and bounce if only one location left
        animation={arr.length === 1 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
        >
        {marker.isOpen &&
        venueInfo.bestPhoto && (
        <InfoWindow onCloseClick={() => props.closeAllMarkers()}>
          <React.Fragment>
            <img src={`${venueInfo.bestPhoto.prefix}170x170${venueInfo.bestPhoto.suffix}`}alt={"Venue"}/>
            <h3>{venueInfo.name}</h3>
            <a href={venueInfo.shortUrl}>More Info</a>
            <p>{venueInfo.price.currency}</p>
            <p>{venueInfo.contact.formattedPhone}</p>
            <p>{venueInfo.location.formattedAddress[0]}</p>
            <p>{venueInfo.location.formattedAddress[1]}</p>
          </React.Fragment>
        </InfoWindow>
        )}
      </Marker>
      );
    })}
  </GoogleMap>
  ))
);

export default class Map extends Component {
    render() {
        return (
        <ErrorBoundary>
          {/* // uncomment below to test full app error message(for maps only test, break api key or url in map.js) */}
              {/* {null.map(errorTestSwitch => errorTestSwitch)}  */}
              {/* // Error from above flashes for only 2 seconds in developer mode, build and deploy for sustained testing */}
            <MyMapComponent className="map"
              {...this.props}
              // error from broken url will hold frame size and display info
              // wrong api key shows default google error message + alert box. happens in errorboundary.js
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAJlJZKFDJ7twOL6eu4CgPYK2awQ-P9WkU"
              loadingElement={<div style={{ height: `100%` }} />}
              //sizes map to allow room for sidebar
              containerElement={<div style={{ height: `100%`, width: `50%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              
              />
        </ErrorBoundary>
    )}
}