import {getRandomInt} from './get-random-int.js';

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export {getRandomArrayElement};
