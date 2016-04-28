export default class MainController {

  $onInit() {
    this.cardlists = [];
  }

  addRow() {
    this.cardlists.push({cards: [{title: 'Default title', todos: [], class: 'default', total: 0}]});
  }

  deleteRow(index) {
    this.cardlists.splice(index, 1);
  }
}
