import React, { useState, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { TripsLayer } from '@deck.gl/geo-layers';
import { StaticMap } from 'react-map-gl';
import trips from './trips.json';

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

const initialViewState = {
  longitude: -73.675,
  latitude: 45.551,
  zoom: 10.6,
  pitch: 0,
  bearing: 0,
};

export default function Map() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const loopLength = 86400;
      const animationSpeed = 480;
      const timestamp = Date.now() / 1000;
      const loopTime = loopLength / animationSpeed;
      setTime(((timestamp % loopTime) / loopTime) * loopLength);
    });
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [time]);

  const layers = [
    new TripsLayer({
      id: 'trips',
      data: trips,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      getColor: [255, 99, 71],
      opacity: 0.3,
      widthMinPixels: 2,
      rounded: true,
      trailLength: 5000,
      currentTime: time,
      shadowEnabled: false,
    }),
  ];
  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <StaticMap
        mapStyle={'mapbox://styles/mappingmtl/ck87roalx0h3n1jp72b1hgun4'}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}
