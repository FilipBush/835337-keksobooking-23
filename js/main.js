import {createOffers} from './create-offer.js';
import {initiateMap, renderMarkers} from './map.js';
import {validatePage} from './validation.js';


const OFFER_AMOUNT = 10;
const data = createOffers(OFFER_AMOUNT);

validatePage();
initiateMap();
renderMarkers(data);
