import ng from 'angular';

import CardComponent from './components';
import CardService from './service.js';

export default ng.module('app.components.card', [])
  .directive('card', [CardComponent])
  .service('CardService', CardService)
  .name;
