import { generateInteger, generateRandomFloat, getRandomArrayElement, getRandomArray } from './util.js';

const MIN_LAT = 35.65;
const MAX_LAT = 35.7;
const MIN_LNG = 139.7;
const MAX_LNG = 139.8;
const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 9;

const TITLES = [
  'Мини-отель Аквамарин',
  'Солдайя Гранд Отель',
  'Гостиница Polli',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECHOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Oтель находится в Судаке, всего в 10 минутах ходьбы от моря',
  'С панорамным видом на город',
  'К услугам гостей крытый бассейн и современный спа-центр',
  'рРасположен в тихом месте в центре города',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const RoomTypeToTitle = {
  PLACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALOW: 'Бунгало',
  HOTEL: 'Отель',
};

const RoomTypeToMinPrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

const SIMILAR_AD_COUNT = 10;

function createAd() {
  const randomLat = generateRandomFloat(MIN_LAT, MAX_LAT, 5);
  const randomLng = generateRandomFloat(MIN_LNG, MAX_LNG, 5);
  const avatarIndex = generateInteger(MIN_AVATAR_INDEX, MAX_AVATAR_INDEX);
  const avatar = `img/avatars/user0${avatarIndex}.png`;

  return {
    author: {
      avatar: avatar,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: {
        randomLat,
        randomLng,
      },
      price: generateInteger(0, 1000000),
      type: getRandomArrayElement(TYPES),
      rooms: generateInteger(0, 100),
      guests: generateInteger(0, 100),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECHOUTS),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      randomLat,
      randomLng,
    },
  };
}

export { createAd, SIMILAR_AD_COUNT, RoomTypeToTitle, RoomTypeToMinPrice };
