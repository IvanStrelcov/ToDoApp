export default class EmptyWellController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
  }

  $onInit() {

  }

  addToDoCart($event) {
    $event.preventDefault();
  }
}
