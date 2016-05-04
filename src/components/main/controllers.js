export default class MainController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  $onInit() {
    this.cardlists = this.MainService.cardlists;
  }

  addRow() {
    this.cardlists.push([]);
  }

  deleteRow(index) {
    this.cardlists.splice(index, 1);
  }
}
