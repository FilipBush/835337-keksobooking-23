import {createOffers} from './create-offer.js';
import {renderCard} from './render-card.js';

const OFFER_AMOUNT = 10;

const map = document.querySelector('#map-canvas');

const data = createOffers(OFFER_AMOUNT);
const card = renderCard(data[0]);
map.appendChild(card);
