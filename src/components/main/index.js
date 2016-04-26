import ng from 'angular';

import MainComponent from './components';

export default ng.module('app.components.main', [])
  .directive('appMain', [MainComponent])
  .name;
