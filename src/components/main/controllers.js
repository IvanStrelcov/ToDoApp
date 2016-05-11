export default class MainController {

  constructor(MainService) {
    this.MainService = MainService;
  }

  $onInit() {
    this.MainService.getCardlists()
                    .success(data => {
                      this.MainService.cardlists = data;
                      this.cardlists = this.MainService.cardlists;
                    })
                    .error(data => {
                      console.log('Error in GET cardlists');
                    });
  }

  addRow() {
    this.MainService.addRow()
                    .success(data => {
                      this.MainService.cardlists.push(data);
                    })
                    .error(data => {
                      console.log('Error in POST row');
                    });
  }

  deleteRow(id) {
    this.MainService.deleteRow(id)
                    .success(data => {
                      _.pullAllBy(this.MainService.cardlists, [{ 'id': data }], 'id');
                    })
                    .error(data => {
                      console.log('Error in DELETE row');
                    });
  }
}
