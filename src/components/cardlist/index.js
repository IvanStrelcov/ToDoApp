import ng from 'angular';

import CardListComponent from './components';
import CardListService from './service.js';

export default ng.module('app.components.cardlist', [])
  .directive('cardList', [CardListComponent])
  .service('CardListService', CardListService)
  .name;
