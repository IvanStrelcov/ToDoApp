export default class MainController {

  constructor(MainService) {
    this.MainService = MainService;
    this.cardlists = [];
  }

  $onInit() {
    this.MainService.renderRow().success(result => (this.cardlists = result));
  }

  addRow() {
    this.MainService.addRow()
                    .success(data => {
                      this.cardlists.push(data);
                    })
                    error(data => {
                      console.log('Error in POST row', data);
                    });
  }

  deleteRow(index) {
    this.MainService.deleteRow(index)
                    .success(data => {
                      this.cardlists.splice(index, 1);
                    })
                    .error(data => {
                      console.log('Error in DELETE row', data);
                    });
  }
}
