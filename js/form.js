import {sendData} from './api.js';
import {showAlert} from './utils/show-alert.js';

const adForm = document.querySelector('.ad-form');

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    sendData (
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new formData (evt.target),
    );
  });
};

export {setUserFormSubmit};
