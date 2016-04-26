import ng from 'angular';

import HeaderComponent from './components';

export default ng.module('app.components.header', [])
  .directive('appHeader', HeaderComponent)
  .name;
