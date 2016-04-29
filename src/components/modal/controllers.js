export default class ModalController {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }
  $onInit() {
    console.log('asdf');
    this.open();
  }
  
}
