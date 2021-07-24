import {sendData} from './api.js';
import {resetMainPinMarker} from './map.js';
import {showErrorCard, showSuccessCard} from './utils/show-alert.js';

const adForm = document.querySelector('.ad-form');
const adFormReset = adForm.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');

const resetForm = () => {
  adForm.reset();
  mapFilters.reset();
  resetMainPinMarker();
};

const onSendSuccess = () => {
  resetForm();
  showSuccessCard();
};

const onSendFail = () => {
  showErrorCard();
};

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    sendData (
      onSendSuccess,
      onSendFail,
      formData,
    );
  });

  adFormReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
  });
};

export {setUserFormSubmit};
