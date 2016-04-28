export default class TodoController {

  $onInit() {
    this.changeText = '';
    this.show = false;
  }

  delete() {
    if (confirm('You really want to delete this case?')) {
      this.CardController.deleteTodo(this.index);
      this.CardController.changeClass();
    }
  }

  edit() {
    let text = this.todo.text;
    this.changeText = this.todo.text;
    this.todo.text = '';
    this.show = true;
  }

  change() {
    for (let i = 0; i < this.CardController.card.todos.length; i++) {
      if(this.CardController.card.todos[i].text == this.changeText) {
        alert('This case is already planned');
        return false;
      }
    }
    this.todo.text = this.changeText;
    this.changeText = '';
    this.show = false;
    this.CardController.changeClass();
  }

  checkDone(event) {
    event.stopPropagation();
    this.CardController.changeClass();
  }
}
