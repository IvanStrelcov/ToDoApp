export default class TodolistClass {
  constructor($scope, $http, $log) {
    'ngInject';
    this.$scope = $scope;
  }

  $onInit() {
    this.todoList = [];
  }

  render() {
    return this.todoList;
  }

  addTodo() {
    this.todoList.push('<app-todolist></app-todolist>');
    console.log(this.todoList);
  }
}
