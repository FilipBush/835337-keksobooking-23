
import { isEscEvent } from './isEscEvent.js';

const ALERT_SHOW_TIME = 6000;

const pageBody = document.querySelector('body');
const errorTemplate = pageBody.querySelector('#error').content.querySelector('.error');
const errorCard = errorTemplate.cloneNode(true);
const errorButton = errorCard.querySelector('.error__button');
const successTemplate = pageBody.querySelector('#success').content.querySelector('.success');
const successCard = successTemplate.cloneNode(true);

const showAlertMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const closeErrorCard = () => {
  errorCard.remove();
  errorButton.removeEventListener('click', () => { closeErrorCard(); });
  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent) {
      evt.preventDeafault();
      closeErrorCard();
    }
  });
};

const closeSuccessCard = () => {
  successCard.remove();
  document.removeEventListener('click', () => { closeSuccessCard(); });
  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent) {
      evt.preventDeafault();
      closeSuccessCard();
    }
  });
};

const showErrorCard = () => {
  pageBody.insertAdjacentElement('beforeend', errorCard);
  errorButton.addEventListener('click', () => { closeErrorCard();});
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent) {
      evt.preventDefault();
      closeErrorCard();
    }
  });
};

const showSuccessCard = () => {
  pageBody.insertAdjacentElement('beforeend', successCard);
  document.addEventListener('click', () => { closeSuccessCard();});
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent) {
      evt.preventDefault();
      closeSuccessCard();
    }
  });
};

export {showAlertMessage, showErrorCard, showSuccessCard};
