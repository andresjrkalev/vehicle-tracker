import L from 'leaflet';

export const createIcon = icon =>
  new L.Icon({
    iconUrl: icon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(24, 24)
  });
