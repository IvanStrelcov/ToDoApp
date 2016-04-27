export default class TodolistClass {
  constructor($scope, $http, $log) {
    'ngInject';
    this.$scope = $scope;
  }

  $onInit() {
    this.todos = [];
    // console.log(this.rowCtrl.todoList);
  }

  getTodos() {
    return this.todos;
  }

  addTodo($event) {
    for (let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].text == this.todoText) return false;
    }
    this.todos.push({text:this.todoText, done:false});
    this.todoText = '';
  }

  deleteTodo(item) {
    this.rowCtrl.todoList.splice(this.rowCtrl.todoList.indexOf(item), 1);
  }
}
