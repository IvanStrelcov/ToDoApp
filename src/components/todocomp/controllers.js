export default class TodocompClass {
  constructor($scope, $http, $log) {
    'ngInject';
    this.$scope = $scope;
  }

  $onInit() {
    this.changeText = '';
    this.show = false;
  }

  removeTodo(index) {
    this.listCtrl.todos.splice(index, 1);
  }

  editTodo(index) {
    let text = this.listCtrl.todos[index].text;
    console.log(text);
    this.changeText = this.listCtrl.todos[index].text;
    this.listCtrl.todos[index].text = '';
    this.show = true;
  }

  changeTodo(index) {
    for (let i = 0; i < this.listCtrl.todos.length; i++) {
      if(this.listCtrl.todos[i].text == this.changeText) return false;
    }
    this.listCtrl.todos[index].text = this.changeText;
    this.changeText = '';
    this.show = false;
  }
}
