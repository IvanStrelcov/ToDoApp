export default class TodoController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  $onInit() {
    this.changeText = '';
    this.reservText = '';
    this.show = false;
  }

// redact todo case

  edit() {
    if(this.MainService.check == true) {
      alert('Detection of incomplete action');
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
    console.log(this);
    for (let i = 0; i < this.CardController.card.todos.length; i++) {
      if(this.CardController.card.todos[i].text == this.changeText && this.changeText != this.reservText) {
        alert('This case is already planned');
        return false;
      }
    }
    this.todo.text = this.changeText;
    this.changeText = '';
    this.MainService.check = false;
    this.show = false;
    this.CardController.changeClass();
  }

// delete todo case

  delete() {
    if(this.MainService.check == true) {
      alert('Detection of incomplete action');
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
