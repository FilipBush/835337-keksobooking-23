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
  const cardTitle = offerCard.querySelector('.popup__title');
  const cardAddress = offerCard.querySelector('.popup__text--address');
  const cardPrice = offerCard.querySelector('.popup__text--price');
  const cardAvatar = offerCard.querySelector('.popup__avatar');
  const cardType = offerCard.querySelector('.popup__type');
  const cardCapacity = offerCard.querySelector('.popup__text--capacity');
  const cardTextTime = offerCard.querySelector('.popup__text--time');
  const cardDescription = offerCard.querySelector('.popup__description');
  const cardFeatures = offerCard.querySelector('.popup__features');
  const cardPhotos = offerCard.querySelector('.popup__photos');
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

  cardTitle.textContent = title? title : cardTitle.remove();
  cardAddress.textContent = address? address: cardAddress.remove();
  cardPrice.textContent = price? `${price} ₽/ночь.`: cardPrice.remove();
  cardAvatar.src = offersItem.author.avatar? offersItem.author.avatar: cardAvatar.remove();
  cardType.textContent = type? typesMap[type]: cardType.remove();
  cardDescription.textContent = description? description: cardDescription.remove();

  cardCapacity.textContent = `${rooms} ${numWord(rooms, ['комната', 'комнаты', 'комнат'])} для ${guests} ${numWord(guests, ['гостя', 'гостей', 'гостей'])}`;
  cardTextTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;


  if (features) {
    cardFeatures.innerHTML = '';
    fillFeatures(features, cardFeatures);
  } else {
    cardFeatures.remove();
  }

  if (photos) {
    cardPhotos.innerHTML = '';
    fillPhotos(photos, cardPhotos);
  } else {
    cardPhotos.remove();
  }

  return offerCard;
};

export {renderCard};
