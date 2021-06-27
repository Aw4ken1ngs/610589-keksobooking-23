import { getRandomInteger, getRandomFloat } from './utils.js';

const TITLE = ['Мини-отель Аквамарин', 'Солдайя Гранд Отель', 'Гостиница Polli'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Oтель находится в Судаке, всего в 10 минутах ходьбы от моря', 'с панорамным видом на город', 'К услугам гостей крытый бассейн и современный спа-центр', 'расположен в тихом месте в центре города'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const priceRange = {
  min: 1000,
  max: 10000,
};

const idPhotoRange = {
  min: 1,
  max: 8,
}

const roomsRange = {
  min: 1,
  max: 7,
};

const guestsRange = {
  min: 1,
  max: 3,
};

const lat = {
  min: 35.65000,
  max: 35.70000,
};

const lng = {
  min: 139.7,
  max: 139.8,
};

const arrayLength = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomFeatures = () => {
  return FEATURES.filter(() => {
    return getRandomInteger(0, 1);
  })
};

const twoDigitNumber = () => {
  if (getRandomInteger < 10)
    return "0" + getRandomInteger;
  return getRandomInteger;
};

const offer = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + twoDigitNumber(idPhotoRange.min, idPhotoRange.max) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: getRandomFloat(idPhotoRange.min, idPhotoRange.max) + ', ' + getRandomFloat(lat.min, lng.max),
      price: getRandomInteger(priceRange.min, priceRange.max),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(roomsRange.min, roomsRange.max),
      guests: getRandomInteger(guestsRange.min, guestsRange.max),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomFeatures(),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
    },

    location: {
      X: getRandomNumber(lat.min, lat.max),
      Y: getRandomNumber(lng.min, lng.max),
    },
  },
};
