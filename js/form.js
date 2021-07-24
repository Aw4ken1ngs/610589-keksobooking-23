import { RoomTypeToMinPrice } from './ad.js';


const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formFilter = document.querySelector('.map__filters');
const formSelects = formFilter.querySelectorAll('select');
const formFields = formFilter.querySelectorAll('fieldset');
const priceInput = document.getElementById('price');
const stayTypeInput = document.getElementById('type');
const roomsInput = document.getElementById('room_number');
const guestsInput = document.getElementById('capacity');
const checkInTime = document.getElementById('timein');
const checkOutTime = document.getElementById('timeout');
const submitButton = document.querySelector('.ad-form__submit');

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach((formField) => {
    formField.disabled = true;
  });

  formFilter.classList.add('map__filters--disabled');
  formSelects.forEach((item) => {
    item.disabled = true;
  });

  formFields.forEach((item) => {
    item.disabled = true;
  });
};


const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((formField) => {
    formField.disabled = false;
  });

  formFilter.classList.remove('map__filters--disabled');
  formSelects.forEach((item) => {
    item.disabled = false;
  });


  formFields.forEach((item) => {
    item.disabled = false;
  });
};

const compareGuestsAndRooms = () => {
  const rooms = Number.parseInt(roomsInput.value, 10);
  const guests = Number.parseInt(guestsInput.value, 10);

  if (rooms >= guests) {
    if (rooms === 100 && guests !== 0) {
      roomsInput.setCustomValidity('Количество комнат не соответвует количеству гостей');
    } else {
      roomsInput.setCustomValidity('');
    }
  } else {
    roomsInput.setCustomValidity('Количество комнат не соответвует количеству гостей');
  }
  roomsInput.reportValidity();
};


const setEventListener = () => {
  stayTypeInput.addEventListener('change', () => {
    priceInput.placeholder = RoomTypeToMinPrice[stayTypeInput.value];
    priceInput.min = RoomTypeToMinPrice[stayTypeInput.value];
  });

  roomsInput.addEventListener('change', () => {
    compareGuestsAndRooms();
  });

  guestsInput.addEventListener('change', () => {
    compareGuestsAndRooms();
  });

  checkInTime.addEventListener('change', () => {
    checkOutTime.value = checkInTime.value;
  });

  checkOutTime.addEventListener('change', () => {
    checkInTime.value = checkOutTime.value;
  });
  submitButton.addEventListener('click', () => {
    compareGuestsAndRooms();
    setEventListener();
  });
};


export { disableForm, enableForm, setEventListener };
