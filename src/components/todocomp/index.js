import ng from 'angular';

import ToDoComponent from './components';

export default ng.module('app.components.todocomp', [])
  .directive('appTodo', [ToDoComponent])
  .name;
