const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapForms = document.querySelector('.map__filters');
const mapFilters = mapForms.querySelectorAll('fieldset', 'select');

const toggleFormElements = (elements, status) => {
  elements.forEach((element) => {
    element.disable = status;
  });
};

const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  toggleFormElements(adFormFieldsets,true);
  mapForms.classList.add('ad-form--disabled');
  toggleFormElements(mapFilters, true);
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  toggleFormElements(adFormFieldsets, false);
  mapForms.classList.remove('ad-form--disabled');
  toggleFormElements(mapFilters, false);
};

// Валидация формы

const MIN_AD_NAME_LENGTH = 30;
const MAX_AD_NAME_LENGTH = 100;
const MAX_AD_PRICE= 1000000;
const adTitleInput = document.querySelector('#title');
const adPriceInput = document.querySelector('#price');
const capacity = document.querySelector('#capacity');
const capacityNumbers = capacity.querySelectorAll('option');
const roomsNumbers = document.querySelector('#rooms');
const matchRoomsCapacity = ()=> {
  capacityNumbers.forEach((capacityNumber) => {
    if (capacityNumber.value > roomsNumbers.value || capacityNumber.value === 100 && roomsNumbers.value !== 0) {
      toggleFormElements(capacityNumber, true);
    } else {
      toggleFormElements(capacityNumber, false);
    }
  });
};

const pageValidate = () => {
  matchRoomsCapacity();
  roomsNumbers.addEventListener('change', () => {
    matchRoomsCapacity;
  });
  adTitleInput.addEventListener('input', () => {
    const valueLength = adTitleInput.value.length;
    if (valueLength < MIN_AD_NAME_LENGTH) {
      adTitleInput.setCustomValidity(`Ещё ${  MIN_AD_NAME_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_AD_NAME_LENGTH) {
      adTitleInput.setCustomValidity(`Ещё ${  valueLength - MAX_AD_NAME_LENGTH } симв.`);
    } else {
      adTitleInput.setCustomValidity('');
    }
    adTitleInput.reportValidity();
  });

  adPriceInput.addEventListener('input', () => {
    const priceValue = adPriceInput.value;
    if (priceValue > MAX_AD_PRICE) {
      adPriceInput.setCustomValidity('Максимальная цена - 1 000 000');
    } else {
      adPriceInput.setCustomValidity('');
    }
    adTitleInput.reportValidity();
  });
};

export {activatePage, disablePage, pageValidate};
