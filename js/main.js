import {createOffers} from './create-offer.js';
import {initiateMap, renderSimilarMarkers} from './render-offers.js';
import {validatePage, conformPrice, conformTime} from './validation.js';


const OFFER_AMOUNT = 10;
const data = createOffers(OFFER_AMOUNT);

validatePage();
conformPrice();
conformTime();
initiateMap();
renderSimilarMarkers(data);
