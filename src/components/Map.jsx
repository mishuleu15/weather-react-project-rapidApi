import React from 'react';

import DraggableMarker from '../utils/DraggableMarker';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import { useSelector } from 'react-redux';

const Map = () => {
  const count = useSelector((state) => state.setCoords);

  function ChangeMapView({ count }) {
    const map = useMap();
    map.setView(count, map.getZoom());

    return null;
  }

  return (
    <MapContainer
      center={count}
      zoom={13}
      scrollWheelZoom={true}
      key={Math.random()}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <ChangeMapView count={count} />
      <DraggableMarker count={count} />
    </MapContainer>
  );
};

export default Map;
