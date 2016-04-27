import ng from 'angular';

import CardListComponent from './components';

export default ng.module('app.components.cardlist', [])
  .directive('cardList', [CardListComponent])
  .name;
