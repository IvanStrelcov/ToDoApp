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

  constructor(MainService, $uibModal, CardService) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
    this.CardService = CardService;
  }

  $onInit() {
    this.editTitle = '';
    this.show = false;
    this.titleError = false;
    this.caseError = false;
    this.CardService.getTodos(this.card._id)
      .success(result => {
        for (let variable of result) {
          this.card.todos.push(variable);
        }
        this.changeClass();
      })
      .error(data => {
        console.log('Error in GET cards');
    });
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
      this.CardListController.removeCard(this.card._id);
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
    const data = {
      text: this.todoText,
      done: false,
      card_id: this.card._id
    };
    this.CardService.addTodo(data)
      .success(result => {
        this.card.todos.push(result);
        this.changeClass();
      })
      .error(result => {
        console.log('error in POST todo');
      });
    this.todoText = '';
    this.caseError = false;
  }

// delete todo case
// !!! call in todo controller

  removeTodo(id) {
    this.CardService.removeTodo(id)
      .success(result => {
        _.pullAllBy(this.card.todos, [{ '_id': result }], '_id');
        this.changeClass();
      })
      .error(result => {
        console.log('error in DELETE todo');
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
    for (let variable of this.MainService.cardlists) {
      for (let key of variable.cardlist) {
        if (_.includes(key, this.editTitle) && this.editTitle != this.card.title && this.editTitle != 'Default title') {
          this.titleError = true;
          return;
        }
      }
    }
    const data = {
      title: this.editTitle
    };
    this.CardService.changeTitle(this.card._id, data)
      .success( result => {
        this.card.title = this.editTitle;
        this.editTitle = '';
        this.MainService.check = false;
        this.show = false;
        this.titleError = false;
      })
      .error( result => {
        console.log('error in PUT card');
      });
  }

// validate edit input

  validateEdit() {
    for (let variable of this.MainService.cardlists) {
      for (let key of variable.cardlist) {
        if (_.includes(key, this.editTitle) && this.editTitle != this.card.title && this.editTitle != 'Default title') {
          this.titleError = true;
          return;
        }
        this.titleError = false;
      }
    }
  }

  // validate edit input

  validateAdd() {
    for (let i = 0; i < this.card.todos.length; i++) {
      if(this.card.todos[i].text == this.todoText) {
        this.caseError = true;
        return;
      }
      this.caseError = false;
    }
  }

// delete card

  removeCard() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    this.confirm();
  }

// change color (class) of card
// !!! call in todo controller

  changeClass() {
    if (this.card.todos.length === 0) {
      this.card.class = 'default';
      return;
    }
    for (let i = 0; i < this.card.todos.length; i++) {
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
