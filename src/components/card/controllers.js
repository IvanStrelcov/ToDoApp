import alertTemplate from './alert-template.html';
import confirmTemplate from './confirm-template.html';


// modal  controller

class ModalController {
  close() {
    this.$dismiss();
  }
  cancel() {
    this.$dismiss();
  }
  ok() {
    this.$close();
  }
}

// card controller

export default class CardController {

  constructor(MainService, $uibModal) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.editTitle = '';
    this.show = false;
    this.titleError = false;
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

  // confirm modal

  confirm() {
    const confirmModal = this.$uibModal.open({
      animation: true,
      template: confirmTemplate,
      controller: ModalController,
      controllerAs: '$modalCtrl',
      bindToController: true,
    });

    confirmModal.result.then( () => {
      this.CardListController.delete(this.index);
    }, () => {
      return;
    });
  }

// add todo case

  addTodo() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    for (let i = 0; i < this.card.todos.length; i++) {
      if(this.card.todos[i].text == this.todoText) {
        this.caseError = true;
        return;
      }
    }
    this.card.todos.push({text:this.todoText, done:false});
    this.todoText = '';
    this.changeClass();
    this.card.total += 1;
    this.caseError = false;
  }

// delete todo case

  deleteTodo(index) {
    this.card.todos.splice(index, 1);
    this.card.total -= 1;
  }

// redact title

  edit() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    this.editTitle = this.card.title;
    this.card.title = '';
    this.MainService.check = true;
    this.show = true;
  }

  change() {
    for (let variable of this.MainController.cardlists) {
      for (let key of variable) {
        if (_.includes(key, this.editTitle) && this.editTitle != this.card.title && this.editTitle != 'Default title') {
          this.titleError = true;
          return;
        }
      }
    }
    this.card.title = this.editTitle;
    this.editTitle = '';
    this.MainService.check = false;
    this.show = false;
    this.titleError = false;
  }

// delete card

  delete() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    this.confirm();
  }

// change color of card

  changeClass() {
    if (this.card.todos.length === 0) {
      this.card.class = 'default';
      return;
    }
    for (var i = 0; i < this.card.todos.length; i++) {
      if(this.card.todos[i].done === false) {
        this.card.class = 'default';
        return;
      }
      else {
        this.card.class = 'success';
      }
    }
  }
}
