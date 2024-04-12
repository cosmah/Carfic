import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {
        name: '',
        location: {
          lat: 0,
          lng: 0,
        },
      },
    };
 }

 onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: {
        name: props.name,
        location: marker.position,
      },
    });
 };

 onInfoWindowClose = () => {
    this.setState({
      selectedPlace: {
        name: '',
        location: {
          lat: 0,
          lng: 0,
        },
      },
    });
 };

 render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{ lat: 47.444, lng: -122.176 }}>
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
          position={{ lat: 47.444, lng: -122.176 }}
        />

        {this.state.selectedPlace.name && (
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={this.state.selectedPlace.location}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        )}
      </Map>
    );
 }
}

export default GoogleApiWrapper({
 apiKey: 'AIzaSyB2zVgM_dD8x_Jt15NzU1fLN31DGD_8Rzg',
})(MapContainer);
