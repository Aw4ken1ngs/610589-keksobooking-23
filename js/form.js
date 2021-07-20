const FORM = document.querySelector('.ad-form');
const FORM_FIELDSETS = FORM.querySelectorAll('fieldset');
const FILTER = document.querySelector('.map__filters');

const setDisable = function () {
  FORM.classList.add('ad-form--disabled');

  // eslint-disable-next-line id-length
  for (let i = 0; i <= FORM_FIELDSETS.length - 1; i++) {
    FORM_FIELDSETS[i].setAttribute('disabled', true);
  }

  FILTER.classList.add('map__filters--disabled');

  // eslint-disable-next-line id-length
  for (let i = 0; i <= FILTER.length - 1; i++) {
    FILTER[i].setAttribute('disabled', true);
  }
};

const setEnable = function () {
  FORM.classList.remove('ad-form--disabled');

  // eslint-disable-next-line id-length
  for (let i = 0; i <= FORM_FIELDSETS.length - 1; i++) {
    FORM_FIELDSETS[i].setAttribute('disabled', false);
  }

  FILTER.classList.remove('map__filters--disabled');

  // eslint-disable-next-line id-length
  for (let i = 0; i <= FILTER.length - 1; i++) {
    FILTER[i].setAttribute('disabled', false);
  }
};

export { setDisable, setEnable };
