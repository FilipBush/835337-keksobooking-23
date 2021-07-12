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

export {activatePage, disablePage};
