import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, MapContainerProps } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface LeafletMapProps extends MapContainerProps {
  center: L.LatLngExpression;
  zoom: number;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ center, zoom }) => {

  return (
    <MapContainer
      worldCopyJump={true}
      center={center}
      zoom={zoom}
      style={{ minHeight: '100%', width: '100%', boxSizing: 'border-box', zIndex: 1 }}
      maxZoom={18}
      minZoom={4}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default LeafletMap;
