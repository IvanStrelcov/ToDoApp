import ng from 'angular';

import ToDoListComponent from './components';

export default ng.module('app.components.todolist', [])
  .directive('appTodolist', [ToDoListComponent])
  .name;
