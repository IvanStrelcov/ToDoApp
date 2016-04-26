import ng from 'angular';

import EmptyWellComponent from './components';

export default ng.module('app.components.emptywell', [])
  .directive('appEmptywell', EmptyWellComponent)
  .name;
