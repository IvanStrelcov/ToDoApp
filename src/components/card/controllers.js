export default class CardController {

  addTodo() {
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

  deleteTodo(index) {
    this.card.todos.splice(index, 1);
    this.card.total -= 1;
  }

  delete() {
    if(confirm('You really want to delete this card?')) {
      this.CardListController.delete(this.index);
    }
  }

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

  addBlur() {
    if(confirm('You do not save your changes .Leave without saving?')) {
      this.todoText = '';
    }
  }
}
