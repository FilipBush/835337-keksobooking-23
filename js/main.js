const OFFER_COUNT = 10;

const minPrice = 1500;
const maxPrice = 1000000;
const minRooms = 1;
const maxRooms = 25;
const minGuests = 1;
const maxGuests = 20;
const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;

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

const getRandomFloat = (min, max, exp) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min);
  const expon = Math.pow(10, exp);

  return (Math.round(random * expon) / expon);
};

const getRandomInt = (min, max) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min + 1);

  return Math.floor(random);
};

const LAT = (min, max, exp) => getRandomFloat(min, max, exp);

const LNG  = (min, max, exp) => getRandomFloat(min, max, exp);

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getRandomArraySlice = (elements) => {
  const maxLengthOfSlice = elements.length;
  const lengthOfSlice = getRandomInt(1, maxLengthOfSlice);
  const startOfSlice = getRandomInt(1, lengthOfSlice);
  return elements.slice(startOfSlice - 1, lengthOfSlice - 1);
};

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
        lat: LAT,
        lng: LNG,
      },
    },
  };
};

const Offers = new Array(OFFER_COUNT).fill(null).map((item, index) => createOffer(index));

