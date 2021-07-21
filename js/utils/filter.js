import {clearMarkers} from '../map.js';
import {renderMarkers} from '../map.js';
import {debounce} from './debounce.js';

const RERENDER_DELAY = 500;

const mapFilter = document.querySelector('.map__filters');
const typeInput = mapFilter.querySelector('#housing-type');
const priceInput = mapFilter.querySelector('#housing-price');
const roomsInput = mapFilter.querySelector('#housing-rooms');
const guestsInput = mapFilter.querySelector('#housing-guests');


const filterByType = (offer) => {
  if (typeInput.value === 'any')
  {return true;}

  if (typeInput.value === offer.offer.type)
  {return true;}

  return false;
};

const filterByPrice = (offer) => {
  if (priceInput.value === 'any')
  {return true;}

  if (priceInput.value === 'low'
      && offer.offer.price < 10000)
  {return true;}

  if (priceInput.value === 'middle'
    && offer.offer.price >= 10000
    && offer.offer.price <= 50000)
  {return true;}

  if (priceInput.value === 'high'
    && offer.offer.price > 50000)
  {return true;}

  return false;
};

const filterByRooms = (offer) => {
  if (roomsInput.value === 'any')
  {return true;}

  if (roomsInput.value === offer.offer.rooms)
  {return true;}

  return false;
};

const filterByGuests = (offer) => {
  if (guestsInput.value === 'any') {return true;}

  if (guestsInput.options[guestsInput.selectedIndex].value === offer.offer.guests) {return true;}

  return false;
};


const filterOffers = (offers) => {
  offers
    .filter(filterByType)
    .filter(filterByPrice)
    .filter(filterByRooms)
    .filter(filterByGuests);
};


const updateOffers = (data) => {
  clearMarkers();
  const filteredOffers = filterOffers(data);
  renderMarkers(filteredOffers);
};

const setFilterListener = (offers) => {
  // mapFilter.addEventListener('change', () => updateOffers(offers));
  mapFilter.addEventListener('change', () => debounce(updateOffers(offers), RERENDER_DELAY));
};

export {setFilterListener};
