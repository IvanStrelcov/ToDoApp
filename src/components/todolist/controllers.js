export default class TodolistClass {
  constructor($scope, $http, $log) {
    'ngInject';
    this.$scope = $scope;
  }

  $onInit() {
    this.todos = [];
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

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  changeTodoText(index) {
    let text = this.todos[index].text;
    console.log(text);
  }
}
