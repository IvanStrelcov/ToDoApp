export default class CardController {

  addTodo() {
    for (let i = 0; i < this.card.todos.length; i++) {
      if(this.card.todos[i].text == this.todoText) return false;
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
    this.CardListController.delete(this.index);
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
}
