import template from './modal-template.html';
import confirmTemplate from './confirm-template.html';

class ModalController {

  constructor(MainService){
    this.MainService = MainService;
  }

  $onInit() {
    this.cardname = '';
    this.error = false;
  }

  checkTitle() {
    if (this.cardname.length === 0) {
      this.cardname = 'Default title';
    }
    for (let variable of this.MainService.cardlists) {
      for (let key of variable) {
        if (_.includes(key, this.cardname) && this.cardname != 'Default title') {
          this.error = true;
          return;
        }
      }
    }
    this.$close(this.cardname);
  }

  cancel() {
    this.$dismiss();
  }

  ok() {
    this.$close();
  }
}

export default class CardListController {

  constructor(MainService, $uibModal) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
  }

// modal for add new title

  open() {
    const modal = this.$uibModal.open({
      animation: true,
      template: template,
      controller: ModalController,
      controllerAs: '$modalCtrl',
      bindToController: true,
    });

    modal.result.then(title => {
      this.cardlist.push({title: title, todos: [], class: 'default', total: 0});
    });
  }

// confirm for delete row

  confirm() {
    const confirmModal = this.$uibModal.open({
      animation: true,
      template: confirmTemplate,
      controller: ModalController,
      controllerAs: '$modalCtrl',
      bindToController: true,
    });

    confirmModal.result.then( () => {
      this.MainController.deleteRow(this.index);
    }, () => {
      return;
    });
  }

  delete(index) {
    this.cardlist.splice(index, 1);
  }

  deleteRow() {
    this.confirm();
  }
}
