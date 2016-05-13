import alertTemplate from './alert-template.html';
import confirmTemplate from './confirm-template.html';

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

export default class TodoController {

  constructor(MainService, $uibModal, TodoService) {
    this.MainService = MainService;
    this.$uibModal = $uibModal;
    this.TodoService = TodoService;
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
      this.CardController.removeTodo(this.todo.id);
      this.CardController.changeClass();
    }, () => {
      return;
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
    const data = {
      title: this.changeText,
    };
    this.TodoService.changeTitle(this.todo.id, data)
      .success( result => {
        this.todo.text = result;
        this.changeText = '';
        this.MainService.check = false;
        this.show = false;
        this.CardController.changeClass();
        this.caseError = false;
      })
      .error( result => {
        console.log('error in PUT title of todo');
      });
  }

// delete todo case

  delete() {
    if(this.MainService.check == true) {
      this.open();
      return;
    }
    this.confirm();
  }

// checks whether all marked INPUT

  checkDone(event) {
    event.stopPropagation();
    const data = {
      status: this.todo.done,
    };
    this.TodoService.changeStatus(this.todo.id, data)
      .success( result => {
        result = JSON.parse(result);
        this.todo.done = result;
        this.CardController.changeClass();
      })
      .error( result => {
        console.log('error in PUT todo status');
      });
  }
}
