import ng from 'angular';

import AddBtnComponent from './components';

export default ng.module('app.components.addBtn', [])
  .directive('addBtn', AddBtnComponent)
  .name;
