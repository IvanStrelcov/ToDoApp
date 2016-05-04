import ng from 'angular';

import AddCardComponent from './components';

export default ng.module('app.components.addCard', [])
  .directive('addCard', AddCardComponent)
  .name;
