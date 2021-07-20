import {activatePage} from './set-elements-status.js';
import {renderCard} from './render-card.js';
import {roundNumber} from './utils/get-round-number.js';
import {getData} from './api.js';
import {showAlertMessage} from './utils/show-alert.js';

const LAT_DEFAULT = 35.68951;
const LNG_DEFAULT = 139.69211;
const LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const adAddressInput = document.querySelector('#address');
const map = L.map('map-canvas');
const mapZoom = 10;
const coordinateDegree = 5;
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
      .addTo(map)
      .bindPopup(renderCard(offer));
  });
};

const onDataLoad = (data) => {
  renderMarkers(data.slice(0, 10));
};

const onDataFail = () => {
  showAlertMessage('Ошибка загрузки данных с сервера');
};

const initiateMap = () => {
  map.on('load', () => {
    activatePage();
    getData(onDataLoad, onDataFail);
  })
    .setView({
      lat: LAT_DEFAULT,
      lng: LNG_DEFAULT,
    }, mapZoom);

  L.tileLayer(LAYER, {attribution: LAYER_ATTRIBUTE}).addTo(map);
  adAddressInput.value = `${LAT_DEFAULT}, ${LNG_DEFAULT}`;
  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    adAddressInput.value = `${roundNumber(lat, coordinateDegree)}, ${roundNumber(lng, coordinateDegree)}`;
  });
};

const resetMainPinMarker = () => {
  map
    .setView({
      lat: LAT_DEFAULT,
      lng: LNG_DEFAULT,
    }, mapZoom);
  mainPinMarker.remove();
  mainPinMarker.addTo(map);
  adAddressInput.value = `${LAT_DEFAULT}, ${LNG_DEFAULT}`;
};

export {initiateMap, renderMarkers, resetMainPinMarker};
