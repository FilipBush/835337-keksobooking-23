import {clearMarkers} from '../map.js';
import {renderMarkers} from '../map.js';
import {debounce} from './debounce.js';

const RERENDER_DELAY = 500;

const mapFilter = document.querySelector('.map__filters');
const typeInput = mapFilter.querySelector('#housing-type');
const priceInput = mapFilter.querySelector('#housing-price');
const roomsInput = mapFilter.querySelector('#housing-rooms');
const guestsInput = mapFilter.querySelector('#housing-guests');
const featuresList = mapFilter.querySelector('#housing-features');

const prices = {
  low: {
    min: 0,
    max: 10000,
  },

  middle: {
    min: 10000,
    max: 50000,
  },

  high: {
    min: 50000,
  },
};

const filterByType = (offer) => {
  if (typeInput.value === 'any' || typeInput.value === offer.offer.type) {
    return true;
  }

  return false;
};

const filterByPrice = (offer) => {
  if (priceInput.value === 'any') {
    return true;
  }

  if (priceInput.value === 'low' && offer.offer.price < prices[priceInput.value].max) {
    return true;
  }

  if (priceInput.value === 'middle'
  && offer.offer.price >= prices[priceInput.value].min
  && offer.offer.price <= prices[priceInput.value].max) {
    return true;
  }

  if (priceInput.value === 'high' && offer.offer.price > prices[priceInput.value].min) {
    return true;
  }

  return false;
};

const filterByRooms = (offer) => {
  if (roomsInput.value === 'any' || +roomsInput.value === offer.offer.rooms) {
    return true;
  }

  return false;
};

const filterByGuests = (offer) => {
  if (guestsInput.value === 'any' || +guestsInput.value === offer.offer.guests) {
    return true;
  }

  return false;
};

const filterByFeatures = (offer) => {
  const checkedFeatures = Array.from(featuresList.querySelectorAll('input:checked'));
  if (offer.offer.features) {
    return checkedFeatures.every((feature) => offer.offer.features.includes(feature.value));
  }

  return false;
};


const filterOffers = (offers) => offers.filter((item) => (
  filterByType(item)
  && filterByPrice(item)
  && filterByRooms(item)
  && filterByGuests(item)
  && filterByFeatures(item)
));


const updateOffers = (data) => {
  clearMarkers();
  const filteredOffers = filterOffers(data);
  renderMarkers(filteredOffers.slice(0, 10));
};

const setFilterListener = (offers) => {
  mapFilter.addEventListener('change', debounce(() => updateOffers(offers), RERENDER_DELAY));
};

export {setFilterListener};
