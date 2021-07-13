const MIN_AD_NAME_LENGTH = 30;
const MAX_AD_NAME_LENGTH = 100;
const MAX_AD_PRICE= 1000000;
const adTitleInput = document.querySelector('#title');
const adPriceInput = document.querySelector('#price');
const adTypeInput = document.querySelector('#type');
const adTimeIn = document.querySelector('#timein');
const adTimeOut = document.querySelector('#timeout');
const capacity = document.querySelector('#capacity');
const capacityNumbers = capacity.querySelectorAll('option');
const roomsNumbers = document.querySelector('#room_number');
const typesMap = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000,
};
const matchRoomsCapacity = () => {
  capacityNumbers.forEach((capacityOption) => {
    if (capacityOption.value > roomsNumbers.value || capacityOption.value === 100 && roomsNumbers.value !== 0) {
      capacityOption.disabled = true;
    } else {
      capacityOption.disabled = false;
    }
  });
};
const onPriceChange = () => {
  const priceValue = adPriceInput.value;
  if (priceValue > MAX_AD_PRICE) {
    adPriceInput.setCustomValidity('Максимальная цена - 1 000 000');
  } else {
    adPriceInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
};
const onAdTitleChange = () => {
  const valueLength = adTitleInput.value.length;
  if (valueLength < MIN_AD_NAME_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${  MIN_AD_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_AD_NAME_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${  valueLength - MAX_AD_NAME_LENGTH } симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
};
const onTypeChange = () => {
  adPriceInput.min = typesMap[adTypeInput.value];
  adPriceInput.placeholder = `${typesMap[adTypeInput.value]}`;
};
const onTimeInChange = () => {
  adTimeOut.forEach ((time) => {
    time.selected = false;
  });
  adTimeOut.querySelector(`option[value=${adTimeIn.value}]`).selected = true;
};
const onTimeOutChange = () => {
  adTimeIn.forEach ((time) => {
    time.selected = false;
  });
  adTimeIn.querySelector(`option[value=${adTimeOut.value}]`).selected = true;
};
const validatePage = () => {
  matchRoomsCapacity();
  roomsNumbers.addEventListener('change', () => {
    matchRoomsCapacity;
  });
  adTitleInput.addEventListener('change', onAdTitleChange);
  adPriceInput.addEventListener('input', onPriceChange);
};
const conformPrice = () => {
  adTypeInput.addEventListener('change', onTypeChange);
};
const conformTime = () => {
  adTimeIn.addEventListener('change', onTimeInChange);
  adTimeOut.addEventListener('change', onTimeOutChange);
};
export {validatePage, conformPrice, conformTime};
