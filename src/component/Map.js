/*global google*/
//above google comment required for marker animations
import React, {Component} from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import ErrorBoundary from "./error-boundary";
// import ErrorPage from './error-page';


const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
  <GoogleMap
    id="map"
    defaultZoom={8}
    zoom={props.zoom}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
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
        <InfoWindow>
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


export defalt class Map extends Component {
    render() {
        return (
        <ErrorBoundary>
            <MyMapComponent className="map"
              {...this.props}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAJlJZKFDJ7twOL6eu4CgPYK2awQ-P9WkU"
              loadingElement={<div style={{ height: `100%` }} />}
              //sizes map to allow room for sidebar
              containerElement={<div style={{ height: `100%`, width: `50%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              />
        </ErrorBoundary>
        

    )}
}