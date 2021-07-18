// import {createOffers} from './create-offer.js';
import {initiateMap, renderMarkers} from './map.js';
import {validatePage} from './validation.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form.js';
import {showAlert} from './utils/show-alert.js';

// const OFFER_AMOUNT = 10;
// const data = createOffers(OFFER_AMOUNT);

const onDataLoad = (data) => {
  renderMarkers(data);
};

const onDataFail = () => {
  showAlert();
};

validatePage();
initiateMap();
getData(onDataLoad, onDataFail);
setUserFormSubmit();
