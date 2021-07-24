import { isEscEvent } from './isEscEvent.js';

const ALERT_SHOW_TIME = 6000;

const pageBody = document.querySelector('body');
const errorTemplate = pageBody.querySelector('#error').content.querySelector('.error');
const errorCard = errorTemplate.cloneNode(true);
const successTemplate = pageBody.querySelector('#success').content.querySelector('.success');
const successCard = successTemplate.cloneNode(true);
let onDocumentKeyDown;

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

const renderPopup = (modal) => {
  const onClose = () => {
    modal.remove();
    document.removeEventListener('keydown', onDocumentKeyDown);
  };

  const onModalClick = () => onClose();

  onDocumentKeyDown = (evt) => {
    if (isEscEvent(evt)) {
      onClose;
    }
  };

  pageBody.insertAdjacentElement('beforeend', modal);
  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const showErrorCard = () => renderPopup(errorCard);
const showSuccessCard = () => renderPopup(successCard);

export {showAlertMessage, showErrorCard, showSuccessCard};
