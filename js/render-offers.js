import {activatePage} from './set-elements-status.js';
import {renderCard} from './render-card.js';

const LAT_DEAFAULT = 35.6895;
const LNG_DEFAULT = 139.692;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const SIMILAR_ICON_SIZE = [40, 52];
const SIMILAR_ICON_ANCHOR = [20, 40];
const adAddressInput = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
});

const similarPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: SIMILAR_ICON_SIZE,
  iconAnchor: SIMILAR_ICON_ANCHOR,
});

const mainPinMarker = L.marker(
  {
    lat: LAT_DEAFAULT,
    lng: LNG_DEFAULT,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage;
  })
  .setView({
    lat: LAT_DEAFAULT,
    lng: LNG_DEFAULT,
  }, 10);

const initiateMap = () => {
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const pinLat = (evt.target.getLatLng().lat);
    const pinLng = (evt.target.getLatLng().lng);
    adAddressInput.value = `${pinLat}, ${pinLng}`;
  });
};

const renderSimilarMarkers = (offers) => {
  offers.forEach((offer) => {
    const similarPinMarker = L.marker (
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        draggable: false,
        icon: similarPinIcon,
      },
    );
    similarPinMarker
      .addTo(map)
      .bindPopup(
        renderCard(offer),
      );
  });
};

export {initiateMap, renderSimilarMarkers};
