export default class CardListController {

  $onInit() {
    this.cards = [];
  }

  addTodo() {
    this.cards.push({title: 'Default title', todos: []});
  }

  delete(index) {
    this.cards.splice(index, 1);
  }
}
