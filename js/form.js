import { roomTypeToMinPrice } from './ad.js';


const FORM = document.querySelector('.ad-form');
const FORM_FIELDSETS = FORM.querySelectorAll('fieldset');
const FILTER = document.querySelector('.map__filters');
const FORM_SELECTS = FILTER.querySelectorAll('select');
const FORM_FIELDS = FILTER.querySelectorAll('fieldset');
const PRICE_INPUT = document.getElementById('price');
const STAY_TYPE_INPUT = document.getElementById('type');
const ROOMS_INPUT = document.getElementById('room_number');
const GUESTS_INPUT = document.getElementById('capacity');
const CHECK_IN_TIME = document.getElementById('timein');
const CHECK_OUT_TIME = document.getElementById('timeout');
const SUBMIT_BUTTON = document.querySelector('.ad-form__submit');

const setDisableForm = () => {
  FORM.classList.add('ad-form--disabled');
  FORM_FIELDSETS.forEach((formField) => {
    formField.disabled = true;
  });

  FILTER.classList.add('map__filters--disabled');
  FORM_SELECTS.forEach((item) => {
    item.disabled = true;
  });

  FORM_FIELDS.forEach((item) => {
    item.disabled = true;
  });
};


const setEnableForm = () => {
  FORM.classList.remove('ad-form--disabled');
  FORM_FIELDSETS.forEach((formField) => {
    formField.disabled = false;
  });

  FILTER.classList.remove('map__filters--disabled');
  FORM_SELECTS.forEach((item) => {
    item.disabled = false;
  });


  FORM_FIELDS.forEach((item) => {
    item.disabled = false;
  });
};
const compareGuestsAndRooms = () => {
  const rooms = Number.parseInt(ROOMS_INPUT.value, 10);
  const guests = Number.parseInt(GUESTS_INPUT.value, 10);

  if (rooms >= guests) {
    if (rooms === 100 && guests !== 0) {
      ROOMS_INPUT.setCustomValidity('Количество комнат не соответвует количеству гостей');
    } else {
      ROOMS_INPUT.setCustomValidity('');
    }
  } else {
    ROOMS_INPUT.setCustomValidity('Количество комнат не соответвует количеству гостей');
  }
  ROOMS_INPUT.reportValidity();
};


const setFormValidation = () => {
  STAY_TYPE_INPUT.addEventListener('change', () => {
    PRICE_INPUT.placeholder = roomTypeToMinPrice[STAY_TYPE_INPUT.value];
    PRICE_INPUT.min = roomTypeToMinPrice[STAY_TYPE_INPUT.value];
  });

  ROOMS_INPUT.addEventListener('change', () => {
    compareGuestsAndRooms();
  });

  GUESTS_INPUT.addEventListener('change', () => {
    compareGuestsAndRooms();
  });

  CHECK_IN_TIME.addEventListener('change', () => {
    CHECK_OUT_TIME.value = CHECK_IN_TIME.value;
  });

  CHECK_OUT_TIME.addEventListener('change', () => {
    CHECK_IN_TIME.value = CHECK_OUT_TIME.value;
  });
  SUBMIT_BUTTON.addEventListener('click', () => {
    compareGuestsAndRooms();
    setFormValidation();
  });
};


export { setDisableForm, setEnableForm, setFormValidation };
