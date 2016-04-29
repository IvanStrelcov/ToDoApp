import template from './modal-template.html';
class ModalController {

}

export default class ModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }
  $onInit() {
    this.open();
  }
  open() {
    this.$uibModal.open({
      animation: $scope.animationsEnabled,
      template,
      controller: ModalController,
      size: 'sm'
    });
  }
}
