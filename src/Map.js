import React from "react";
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";
import { StaticMap } from "react-map-gl";
import trips from "./trips.json";

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

const initialViewState = {
  longitude: -73.625,
  latitude: 45.525,
  zoom: 9.5,
  pitch: 0,
  bearing: 0,
};

export default function Map({ time }) {
  const layers = [
    new TripsLayer({
      id: "trips",
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
        mapStyle={"mapbox://styles/mappingmtl/ck87roalx0h3n1jp72b1hgun4"}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}
