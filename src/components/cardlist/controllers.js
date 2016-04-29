export default class CardListController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  addCard() {
    let cardname = prompt('Enter the name of the card', '');
    if (cardname === null) return;
    for (let variable of this.MainController.cardlists) {
      for (let key of variable.cards) {
        if (cardname.length > 20) {
          alert('The name is too large, use less symbol');
          return;
        }
        if (_.includes(key, cardname)) {
          alert('Card with that name already exist');
          return;
        }
      }
    }
    if (cardname === '' || cardname === defCardname) {
      this.MainService.count++;
    }
    this.cardlist.cards.push({title: cardname || 'Default title ' + this.MainService.count, todos: [], class: 'default', total: 0});
  }

  delete(index) {
    this.cardlist.cards.splice(index, 1);
    if (this.cardlist.cards.length < 1) {
      this.MainController.deleteRow(this.index);
    }
  }
}
