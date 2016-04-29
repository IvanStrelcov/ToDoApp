export default class MainController {

  $onInit() {
    this.cardlists = [];
  }

  addRow() {
    let cardname = prompt('Enter the name of the card','Default title');
    for (let variable of this.cardlists) {
      for (let key of variable.cards) {
        if (cardname.length > 20) {
          alert('The name is too large, use less symbol');
          return;
        }
        if (_.includes(key, cardname) && cardname != 'Default title') {
          alert('Card with that name already exist');
          return;
        }
      }
    }
    this.cardlists.push({cards: [{title: cardname || 'Default title', todos: [], class: 'default', total: 0}]});
  }

  deleteRow(index) {
    this.cardlists.splice(index, 1);
  }
}
