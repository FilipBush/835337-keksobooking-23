const OFFER_COUNT = 10;

import {createOffer} from './create-offer.js';

const Offers = new Array(OFFER_COUNT).fill(null).map((item, index) => createOffer(index));

