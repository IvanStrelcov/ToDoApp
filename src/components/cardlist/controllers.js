export default class CardListController {

  $onInit() {
    this.cards = [];
  }

  addTodo() {
    this.cards.push({title: 'Default title', todos: [], class: 'default', total: 0});
  }

  delete(index) {
    this.cards.splice(index, 1);
  }
}
