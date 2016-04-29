export default class CardController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  $onInit() {
    this.changeText = '';
    this.reservText = '';
    this.show = false;
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

// redact title

  edit() {
    if(this.MainService.check == true) {
      alert('Detection of incomplete action');
      return;
    }
    let text = this.card.title;
    this.changeText = text;
    this.reservText = text;
    text = '';
    this.MainService.check = true;
    this.show = true;
  }

  change() {
    for (let variable of this.MainController.cardlists) {
      for (let key of variable.cards) {
        if (this.changeText.length > 20) {
          alert('The name is too large, use less symbol');
          return;
        }
        if (_.includes(key, this.changeText) && this.changeText != 'Default title') {
          alert('Card with that name already exist');
          return;
        }
      }
    }
    this.card.title = this.changeText;
    this.changeText = '';
    this.MainService.check = false;
    this.show = false;
  }

// delete card

  delete() {
    if(this.MainService.check == true) {
      alert('Detection of incomplete action');
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
        return
      }
      else {
        this.card.class = 'success';
      }
    }
  }
}
