import React from 'react';
import MapGL from 'react-map-gl';

export default function Map({ width, height }) {
  return (
    <React.Fragment>
      <MapGL width={width} height={height} />
    </React.Fragment>
  );
}
