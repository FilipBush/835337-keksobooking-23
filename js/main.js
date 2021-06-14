//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandom = (min, max, exp) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min);
  const expon = Math.pow(10, exp);

  return (Math.round(random * expon) / expon);
};
// getRandom (1, 7, 10);

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomRound = (min, max) => {
  if (min < 0 || max <= min) {
    return 'Значение "от" не должно быть отрицательным. Значение "до" должно быть больше значения "от".';
  }

  const random = min + Math.random() * (max - min + 1);

  return Math.floor(random);
};

const TITLE = [
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

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
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

const DESCRIPTION = [
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

const OFFER_COUNT = 10;

const LAT =  getRandom(35.65000, 35.70000, 5);
const LNG  =  getRandom(139.70000, 139.80000, 5);

const createOffer = () => {
  let avatarIndex = getRandomRound (0, 10);
  if (avatarIndex < 10) {
    avatarIndex = '0' + avatarIndex;
  }
  else {
    avatarIndex = toString(avatarIndex);
  }
  const RandomAvatarIndex = avatarIndex;

  const getRandomArrayElement = (elements) => {
    return elements[getRandomRound(0, elements.length - 1)];
  };

  const getRandomArraySlice = (elements) => {
    const maxLengthOfSlice = elements.length;
    const lengthOfSlice = getRandomRound(1, maxLengthOfSlice);
    const startOfSlice = getRandomRound(1, lengthOfSlice);
    return elements.slice(startOfSlice - 1, lengthOfSlice - 1);
  };

  return {
    author: {avatar: `img/avatars/user${RandomAvatarIndex}.png`},
    offer: {
      title: getRandomArrayElement(TITLE),
      addres: `${LAT}, ${LNG}`,
      price: getRandomRound(1500, 1000000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomRound(1, 25),
      guests: getRandomRound(1,20),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArraySlice(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArraySlice(PHOTOS),
      location: {
        lat: LAT,
        lng: LNG,
      },
    },
  };
};

const similarOffer = new Array(OFFER_COUNT).fill(null).map(() => createOffer());
