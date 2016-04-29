export default class MainController {

  $onInit() {
    this.cardlists = [];
  }

  addRow() {
    let cardname = prompt('Enter the name of the card','Default title');
    this.cardlists.push({cards: [{title: cardname || 'Default title', todos: [], class: 'default', total: 0}]});
  }

  deleteRow(index) {
    this.cardlists.splice(index, 1);
  }
}
