import ng from 'angular';

import ToDoComponent from './components';
import TodoService from './service.js';

export default ng.module('app.components.todo', [])
  .directive('todo', [ToDoComponent])
  .service('TodoService', TodoService)
  .name;
