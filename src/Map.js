import React from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import GeoJSON from './trip.json';

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

const initialViewState = {
  longitude: -73.675,
  latitude: 45.551,
  zoom: 10.6,
  pitch: 0,
  bearing: 0,
};

const data = GeoJSON;

export default function Map() {
  const layers = new GeoJsonLayer({
    id: 'geojson-layer',
    data,
    stroked: true,
    lineWidthScale: 1,
    lineWidthMinPixels: 1,
    getLineColor: [255, 99, 71],
    getLineWidth: 1,
  });
  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}
