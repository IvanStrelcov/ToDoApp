export default class CardListController {

  addCard() {
    let cardname = prompt('Enter the name of the card','Default title');
    this.cardlist.cards.push({title: cardname || 'Default title', todos: [], class: 'default', total: 0});
  }

  delete(index) {
    this.cardlist.cards.splice(index, 1);
    if (this.cardlist.cards.length < 1) {
      this.MainController.deleteRow(this.index);
    }
  }
}
