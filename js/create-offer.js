import {getRandomArrayElement} from './utils/get-random-array-element.js';
import {getRandomInt} from './utils/get-random-int.js';
import {getRandomFloat} from './utils/get-random-float.js';
import {getRandomArraySlice} from './utils/get-random-array-slice.js';

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const MIN_PRICE = 1500;
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 25;
const MIN_GUESTS = 1;
const MAX_GUESTS = 20;
const EXP = 5;

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

const createOffer = (index) => {
  const currentLat = getRandomFloat(LAT_MIN, LAT_MAX, EXP);
  const currentLng  = getRandomFloat(LNG_MIN, LNG_MAX, EXP);

  const avatarIndex =  `${  index}`.padStart(2, '0');


  return {
    author: {
      avatar: `img/avatars/user${avatarIndex}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${currentLat}, ${currentLng}`,
      price: getRandomInt(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInt(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(CHECK_IN_OUT_TIMES),
      checkout: getRandomArrayElement(CHECK_IN_OUT_TIMES),
      features: getRandomArraySlice(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArraySlice(PHOTOS),
    },
    location: {
      lat: currentLat,
      lng: currentLng,
    },
  };
};

const createOffers = (count) => new Array(count).fill(null).map((item, index) => createOffer(index + 1));

export {createOffers};
