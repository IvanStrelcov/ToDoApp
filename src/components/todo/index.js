import ng from 'angular';

import ToDoComponent from './components';

export default ng.module('app.components.todo', [])
  .directive('todo', [ToDoComponent])
  .name;
