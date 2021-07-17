import {numWord} from './utils/get-num-word.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const typesMap = {
  flat: 'Квартира',
  bungalow:'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const fillFeatures = (featuresItems, block) => {
  featuresItems.forEach((feature) => {
    const featureItem = `<li class="popup__feature popup__feature--${feature}"></li>`;
    block.insertAdjacentHTML('beforeend', featureItem);
  });
};

const fillPhotos = (photosItems, block) => {
  photosItems.forEach((photo) => {
    const photoItem = `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    block.insertAdjacentHTML('afterbegin', photoItem);
  });
};

const renderCard = (offersItem) => {
  const offerCard = cardTemplate.cloneNode(true);
  const featuresBlock = offerCard.querySelector('.popup__features');
  const photosBlock = offerCard.querySelector('.popup__photos');
  const {
    title,
    address,
    price,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
    type,
  } = offersItem.offer;

  offerCard.querySelector('.popup__title').textContent = title;
  offerCard.querySelector('.popup__text--address').textContent = address;
  offerCard.querySelector('.popup__text--price').textContent = `${price} ₽/ночь.`;
  offerCard.querySelector('.popup__avatar').src = offersItem.author.avatar;
  offerCard.querySelector('.popup__type').textContent = typesMap[type];
  offerCard.querySelector('.popup__text--capacity').textContent = `${rooms} ${numWord(rooms, ['комната', 'комнаты', 'комнат'])} для ${guests} ${numWord(guests, ['гостя', 'гостей', 'гостей'])}`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  offerCard.querySelector('.popup__description').textContent = description;
  offerCard.querySelector('.popup__features').innerHTML = '';
  fillFeatures(features, featuresBlock);
  offerCard.querySelector('.popup__photos').innerHTML = '';
  fillPhotos(photos, photosBlock);

  return offerCard;
};

export {renderCard};
