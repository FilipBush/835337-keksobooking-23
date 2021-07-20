const ALERT_SHOW_TIME = 6000;

const showAlertMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
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

const showAlertError = () => {};
const showAlertSuccess = () => {
  const pageBody = document.querySelector('body');
  const alertTemplate = document.querySelector('#success').content.querySelector('.popup');
  const alertCard = alertTemplate.cloneNode(true);
  pageBody.insertAdjacentElement('beforeend', alertCard);
  document.addEventListener('click', pageBody.alertCard.remove);
};

export {showAlertMessage, showAlertError, showAlertSuccess};
