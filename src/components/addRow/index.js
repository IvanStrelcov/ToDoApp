import ng from 'angular';

import AddRowComponent from './components';

export default ng.module('app.components.addRow', [])
  .directive('addRow', AddRowComponent)
  .name;
