const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapForms = document.querySelector('.map__filters');
const mapFilters = mapForms.querySelectorAll('fieldset', 'select');

const formDisable = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.setAttribute('disabled', 'true');
  });
  mapForms.classList.add('ad-form--disabled');
  mapFilters.forEach((form) => {
    form.setAttribute('disabled', 'true');
  });
};

const formActivate = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  });
  mapForms.classList.remove('ad-form--disabled');
  mapFilters.forEach((filter) => {
    filter.removeAttribute('disabled', 'true');
  });
};

export {formActivate, formDisable};
