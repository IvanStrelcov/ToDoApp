import template from './alert-template.html';

// modal  controller

class ModalController {
  close() {
    this.$dismiss();
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
    this.error = false;
  }

// add todo case

  addTodo() {
    if(this.MainService.check == true) {
      alert('Detection of incomplete action');
      return;
    }
    for (let i = 0; i < this.card.todos.length; i++) {
      if(this.card.todos[i].text == this.todoText) {
        alert('This case is already planned');
        return false;
      }
    }
    this.card.todos.push({text:this.todoText, done:false});
    this.todoText = '';
    this.changeClass();
    this.card.total += 1;
  }

// delete todo case

  deleteTodo(index) {
    this.card.todos.splice(index, 1);
    this.card.total -= 1;
  }

// alert

open() {
  const modal = this.$uibModal.open({
    animation: true,
    template: template,
    controller: ModalController,
    controllerAs: '$modalCtrl',
    bindToController: true,
  });
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
          this.error = true;
          return;
        }
      }
    }
    this.card.title = this.editTitle;
    this.editTitle = '';
    this.MainService.check = false;
    this.show = false;
    this.error = false;
  }

// delete card

  delete() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    if(confirm('You really want to delete this card?')) {
      this.CardListController.delete(this.index);
    }
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
