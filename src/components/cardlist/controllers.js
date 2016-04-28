export default class CardListController {

  addCard() {
    this.cardlist.cards.push({title: 'Default title', todos: [], class: 'default', total: 0});
  }

  delete(index) {
    this.cardlist.cards.splice(index, 1);
    if (this.cardlist.cards.length < 1) {
      this.MainController.deleteRow(this.index);
    }
  }
}
