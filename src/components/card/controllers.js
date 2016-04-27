export default class CardController {

  addTodo() {
    for (let i = 0; i < this.card.todos.length; i++) {
      if(this.card.todos[i].text == this.todoText) return false;
    }
    this.card.todos.push({text:this.todoText, done:false});
    this.todoText = '';
  }

  deleteTodo(index) {
    this.card.todos.splice(index, 1);
  }

  delete() {
    this.CardListController.delete(this.index);
  }
}
