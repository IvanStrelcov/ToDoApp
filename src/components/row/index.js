import ng from 'angular';

import RowComponent from './components';

export default ng.module('app.components.row', [])
  .directive('appRow', [RowComponent])
  .name;
