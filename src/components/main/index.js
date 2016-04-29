import ng from 'angular';

import MainComponent from './components';
import MainService from './service.js';

export default ng.module('app.components.main', [])
  .directive('appMain', [MainComponent])
  .service('MainService', MainService)
  .name;
