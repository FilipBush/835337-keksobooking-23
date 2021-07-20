import {sendData} from './api.js';
import {resetMainPinMarker} from './map.js';

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
};

const onSendFail = () => {
  resetForm();
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

  adFormReset.addEventListener(onclick, (evt) => {
    evt.preventDefault();
    resetForm();
  });
};

export {setUserFormSubmit};
