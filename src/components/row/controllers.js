export default class TodolistClass {
  constructor($scope, $http, $log) {
    'ngInject';
    this.$scope = $scope;
  }

  $onInit() {
    this.todoList = [];
  }

  addTodo() {
    
  }
}
