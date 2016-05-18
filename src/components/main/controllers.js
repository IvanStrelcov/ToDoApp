export default class MainController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  $onInit() {
    console.log('init');
    this.MainService.getCardlists()
                    .success(data => {
                      console.log('success');  
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
