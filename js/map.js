import {activatePage, disablePage} from './set-elements-status.js';
import {renderCard} from './render-card.js';
import {roundNumber} from './utils/get-round-number.js';
import {getData} from './api.js';
import {showAlertMessage} from './utils/show-alert.js';
import {setFilterListener} from './utils/filter.js';


const LAT_DEFAULT = 35.68951;
const LNG_DEFAULT = 139.69211;
const LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const adAddressInput = document.querySelector('#address');
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
const markerAmount = 10;
const mapZoom = 10;
const coordinateDegree = 5;
let initialOffers;

const mainPinSize = {
  X: 52,
  Y: 52,
};
const similarPinSize = {
  X: 40,
  Y: 52,
};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [mainPinSize.X, mainPinSize.Y],
  iconAnchor: [mainPinSize.X / 2, mainPinSize.Y],
});

const similarPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [similarPinSize.X, similarPinSize.Y],
  iconAnchor: [similarPinSize.X / 2, similarPinSize.Y],
});

const mainPinMarker = L.marker(
  {
    lat: LAT_DEFAULT,
    lng: LNG_DEFAULT,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const renderMarkers = (offers) => {
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
      .addTo(markerGroup)
      .bindPopup(renderCard(offer));
  });
};

const clearMarkers = () => markerGroup.clearLayers();

const renderInitialMarkers = (data) => renderMarkers(data.slice(0, markerAmount));

const onDataLoad = (data) => {
  renderInitialMarkers(data);
  setFilterListener(data);
  initialOffers = data;
};

const onDataFail = () => {
  showAlertMessage('Ошибка загрузки данных с сервера');
};

const initiateMap = () => {
  disablePage();
  map.on('load', () => {
    activatePage();
    getData(onDataLoad, onDataFail);
  })
    .setView({
      lat: LAT_DEFAULT,
      lng: LNG_DEFAULT,
    }, mapZoom);
  L.tileLayer(LAYER, {attribution: LAYER_ATTRIBUTE}).addTo(map);
  adAddressInput.setAttribute('readonly', true);
  adAddressInput.value = `${LAT_DEFAULT}, ${LNG_DEFAULT}`;
  mainPinMarker.addTo(map);
  mainPinMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    adAddressInput.value = `${roundNumber(lat, coordinateDegree)}, ${roundNumber(lng, coordinateDegree)}`;
  });
};

const resetMap = () => {
  map
    .setView({
      lat: LAT_DEFAULT,
      lng: LNG_DEFAULT,
    }, mapZoom);
  mainPinMarker.setLatLng(L.latLng(LAT_DEFAULT, LNG_DEFAULT));
  adAddressInput.value = `${LAT_DEFAULT}, ${LNG_DEFAULT}`;
  clearMarkers();
  renderInitialMarkers(initialOffers);
};

export {initiateMap, renderMarkers, resetMap, clearMarkers};
