import ng from 'angular';

import CardComponent from './components';

export default ng.module('app.components.card', [])
  .directive('card', [CardComponent])
  .name;
