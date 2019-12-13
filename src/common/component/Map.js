import React from 'react';
import { STRING_EMPTY } from '../constants';
import { FeatureGroup, Map, Marker, Polyline, TileLayer, Tooltip } from 'react-leaflet';
import { createIcon } from '../../util/iconUtil';
import pin from '../../icon/pin.svg';

const CustomMap = ({ position, setPosition, locations, viewport, setViewport, points }) => {
  if (!position && navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setPosition({ latitude, longitude }),
      () => setPosition({ latitude: 57, longitude: 24 })
    );
    return STRING_EMPTY;
  }
  return (
    <Map
      center={[position.latitude, position.longitude]}
      zoom={viewport.zoom}
      style={{ width: '500px', height: '500px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {locations.map(({ objectName, latitude, longitude }, index) => (
        <Marker key={index} position={[latitude, longitude]} icon={createIcon(pin)}>
          <Tooltip opacity={1} permanent>
            <span>{objectName}</span>
          </Tooltip>
        </Marker>
      ))}
      {points.length && (
        <FeatureGroup>
          <Polyline positions={points} />
        </FeatureGroup>
      )}
    </Map>
  );
};

export default CustomMap;
