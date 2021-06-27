const TITLES = [
  'testTitle01',
  'testTitle02',
  'testTitle03',
  'testTitle04',
  'testTitle05',
  'testTitle06',
  'testTitle07',
  'testTitle08',
  'testTitle09',
  'testTitle10',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_OUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'testDescription1',
  'testDescription2',
  'testDescription3',
  'testDescription4',
  'testDescription5',
  'testDescription6',
  'testDescription7',
  'testDescription8',
  'testDescription9',
  'testDescription10',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;
const minPrice = 1500;
const maxPrice = 1000000;
const minRooms = 1;
const maxRooms = 25;
const minGuests = 1;
const maxGuests = 20;

import {getRandomArrayElement} from './utils/get-random-array-element.js';
import {getRandomInt} from './utils/get-random-int.js';
import {getRandomFloat} from './utils/get-random-float.js';
import {getRandomArraySlice} from './utils/get-random-array-slice.js';

const LAT = (min, max, exp) => getRandomFloat(min, max, exp);
const LNG  = (min, max, exp) => getRandomFloat(min, max, exp);

const createOffer = (index) => {
  let avatarIndex = index + 1;
  if (avatarIndex < 10) {
    avatarIndex ='0' + (index + 1);
  } else {
    String(avatarIndex);
  }

  return {
    author: {
      avatar: `img/avatars/user${avatarIndex}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${LAT(latMin, latMax, 5)}, ${LNG(lngMin, lngMax, 5)}`,
      price: getRandomInt(minPrice, maxPrice),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(minRooms, maxRooms),
      guests: getRandomInt(minGuests, maxGuests),
      checkin: getRandomArrayElement(CHECK_IN_OUT_TIMES),
      checkout: getRandomArrayElement(CHECK_IN_OUT_TIMES),
      features: getRandomArraySlice(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArraySlice(PHOTOS),
      location: {
        lat: LAT (latMin, latMax, 5),
        lng: LNG (lngMin, lngMax, 5),
      },
    },
  };
};

export {createOffer};
