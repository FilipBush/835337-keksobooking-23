import {clearMarkers} from '../map.js';
import {renderMarkers} from '../map.js';
import {debounce} from './debounce.js';

const RERENDER_DELAY = 500;

const mapFilter = document.querySelector('.map__filters');
const typeInput = mapFilter.querySelector('#housing-type');
const priceInput = mapFilter.querySelector('#housing-price');
const roomsInput = mapFilter.querySelector('#housing-rooms');
const guestsInput = mapFilter.querySelector('#housing-guests');

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


const filterOffers = (offers) => offers.filter((item) => (
  filterByType(item)
  && filterByPrice(item)
  && filterByRooms(item)
  && filterByGuests(item)
));


const updateOffers = (data) => {
  clearMarkers();
  const filteredOffers = filterOffers(data);
  renderMarkers(filteredOffers);
};

const setFilterListener = (offers) => {
  mapFilter.addEventListener('change', debounce(() => updateOffers(offers), RERENDER_DELAY));
};

export {setFilterListener};
