import {getRandomInt} from './get-random-int.js';

const getRandomArraySlice = (elements) => {
  const maxLengthOfSlice = elements.length;
  const lengthOfSlice = getRandomInt(1, maxLengthOfSlice);
  const startOfSlice = getRandomInt(1, lengthOfSlice);
  return elements.slice(startOfSlice - 1, lengthOfSlice - 1);
};

export {getRandomArraySlice};
