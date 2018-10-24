import React, { Component } from 'react';
import './App.css';
import SquareAPI from "./api";
import Map from "./component/Map";
import SideBar from './component/side-bar';
import InfoPane from './component/info-pane';
import SkipLinks from './component/skip-links';

class App extends Component {
    constructor() {
      super();
      this.state = {
        venues: [],
        markers: [],
        center: [],
        zoom: 12,
        updateSuperState: obj => {
          this.setState(obj);
        }
      };
    }

closeAllMarkers = () => {
  const markers = this.state.markers.map(marker => {
    marker.isOpen = false;
    return marker;
  });
  this.setState({ markers: Object.assign(this.state.markers, markers) });
};

handleMarkerClick = marker => {
  this.closeAllMarkers();
  console.log(marker);
  marker.isOpen = true;
  this.setState({markers: Object.assign(this.state.markers, marker) });
  const venue = this.state.venues.find(venue => venue.id === marker.id);

  SquareAPI.getVenueDetails(marker.id).then(res => {
    const newVenue = Object.assign(venue, res.response.venue);
    this.setState({venues: Object.assign(this.state.venues, newVenue)});
    console.log(newVenue);
    console.log(res)
  });
};

handleListItemClick = venue => {
  const marker = this.state.markers.find(marker => marker.id === venue.id);
  this.handleMarkerClick(marker);
}
    componentDidMount() {
      SquareAPI.search({
        near: "Austin,TX",
        query: "tacos",
        limit: 10
      }).then(results => {
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        const markers = venues.map(venue => {
          return {
            lat:venue.location.lat,
            lng:venue.location.lng,
            isOpen: false,
            isVisible: true,
            id:venue.id
          };
        });
        this.setState ({ venues, center, markers });
        console.log(results)
      });
    }
  render() {
    return (
      <main role="main">
      
      <header role="banner" id="title">
        <h1>MapReactR</h1>
        <h2>Information and Locations of Taco Providers</h2>
        </header>

        {/* skip links to get focus across to info cards */}
        <SkipLinks/>

      <div className="App">
        <SideBar id="side-bar" role="main" aria-label="venue filter results list" {...this.state} 
        handleListItemClick={this.handleListItemClick} />

        {/* skip links to get across to info cards or back to search field */}
        <SkipLinks/>

        <Map role="complementary" aria-label="map"{...this.state}
        handleMarkerClick={this.handleMarkerClick} />
        <InfoPane role="main" aria-label="info cards"{...this.state} 
        handleListItemClick={this.handleListItemClick}/>

        {/* skip links to get across to top of info cards or back to search field */}
        <SkipLinks/>
      </div>
      </main>
    );
  }
}

export default App;
