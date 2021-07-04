// Переносим в муодуль для генерации разметки похожих элементов (create-offer-list.js) ?
// import {createOffers} from './create-offer.js';
// const OFFER_AMOUNT = 10;
// const offers = createOffers(OFFER_AMOUNT);

import {offersList} from './create-offer-list.js';

// Почему не срабатывает offersList[0] для отрисовки одного элемента?
document.querySelector('#map-canvas').appendChild(offersList);

