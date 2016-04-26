export default class RowClass {
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
    this.todoList.push({title: 'Default title', todos: []});
  }
}
