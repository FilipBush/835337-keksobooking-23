import {createOffers} from './create-offer.js';
const OFFER_AMOUNT = 10;
const offers = createOffers(OFFER_AMOUNT);
const cardTemplate = document.querySelector('#card').content;
const card = cardTemplate.querySelector('.popup');
const offersList = document.createDocumentFragment();

offers.forEach((offersItem) => {
  const offerCard = card.cloneNode(true);
  offerCard.querySelector('.popup__title').textContent = offersItem.offer.title;
  offerCard.querySelector('.popup__text--address').textContent = offersItem.offer.address;
  offerCard.querySelector('.popup__text--price').textContent = `${offersItem.offer.price} ₽/ночь.`;

  switch(offersItem.offer.type) {
    case 'flat':
      offerCard.querySelector('.popup__type').textContent ='Квартира';
      break;
    case 'bungalow':
      offerCard.querySelector('.popup__type').textContent ='Бунгало';
      break;
    case 'house':
      offerCard.querySelector('.popup__type').textContent ='Дом';
      break;
    case 'palace':
      offerCard.querySelector('.popup__type').textContent ='Дворец';
      break;
    default:
      offerCard.querySelector('.popup__type').textContent ='Отель';
      break;
  }

  offerCard.querySelector('.popup__text--capacity').textContent = `${offersItem.offer.rooms} комнаты для ${offersItem.offer.guests} гостей`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${offersItem.offer.checkin}, выезд до ${offersItem.offer.checkout}`;

  // const featureListElement = card.querySelector('.popup__features');
  // const modifiers = offersItem.offer.features.map((feature) => `popup__feature--${feature}`);
  // featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
  //   const modifier = item.classList[1];
  //   if (!modifiers.includes(modifier)) {
  //     item.remove();
  //   }
  // });

  offerCard.querySelector('.popup__features').innerHTML = '';
  offersItem.offer.features.forEach((feature) => {
    const featureItem = `<li class="popup__feature popup__feature--${feature}"></li>`;
    offerCard.querySelector('.popup__features').insertAdjacentHTML('beforeend', featureItem);
  });


  offerCard.querySelector('.popup__description').textContent = offersItem.offer.description;

  offerCard.querySelector('.popup__photo').remove();
  offersItem.offer.photos.forEach((photo) => {
    const photoItem = `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    offerCard.querySelector('.popup__photos').insertAdjacentHTML('beforeend', photoItem);
  });

  offerCard.querySelector('.popup__avatar').setAttribute('src', `${offersItem.author.avatar}`);
  offersList.appendChild(offerCard);
});

export {offersList};
