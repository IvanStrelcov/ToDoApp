export default class MainController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  $onInit() {
    this.MainService.getCardlists()
                    .success(data => {
                      this.cardlists = this.MainService.cardlists;
                    })
                    .error(data => {
                      console.log('Error in GET cardlists');
                    });
  }

  addRow() {
    this.MainService.addRow();
  }

  removeRow(id) {
    this.MainService.removeRow(id);
  }
}
