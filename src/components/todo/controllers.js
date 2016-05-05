import alertTemplate from './alert-template.html';

class ModalController {
  close() {
    this.$dismiss();
  }
}

export default class TodoController {

  constructor(MainService, $uibModal) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.changeText = '';
    this.reservText = '';
    this.show = false;
    this.caseError = false;
  }

// alert modal

  open() {
    const alertModal = this.$uibModal.open({
      animation: true,
      template: alertTemplate,
      controller: ModalController,
      controllerAs: '$modalCtrl',
      bindToController: true,
    });
  }

// redact todo case

  edit() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    let text = this.todo.text;
    this.changeText = text;
    this.reservText = text;
    text = '';
    this.MainService.check = true;
    this.show = true;
  }

  change() {
    for (let i = 0; i < this.CardController.card.todos.length; i++) {
      if(this.CardController.card.todos[i].text == this.changeText && this.changeText != this.reservText) {
        this.caseError = true;
        return false;
      }
    }
    this.todo.text = this.changeText;
    this.changeText = '';
    this.MainService.check = false;
    this.show = false;
    this.CardController.changeClass();
    this.caseError = false;
  }

// delete todo case

  delete() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    if (confirm('You really want to delete this case?')) {
      this.CardController.deleteTodo(this.index);
      this.CardController.changeClass();
    }
  }

// checks whether all marked INPUT

  checkDone(event) {
    event.stopPropagation();
    this.CardController.changeClass();
  }
}
