export default class MainService {

  constructor($http) {
    this.cardlists = [];
    this.$http = $http;
    this.check = false;
  }

  getCardlists() {
    return this.$http.get('http://localhost:3001/rows')
      .success(result => {
        this.cardlists = result;
      })
      .error(result => {
        console.log('error in GET cardlists on service');
      });
  }

  addRow() {
    return this.$http.post('http://localhost:3001/rows', {data: []})
      .success(result => {
        this.cardlists.push(result);
      })
      .error(result => {
        console.log('error in POST row');
      });
  }

  removeRow(id) {
    return this.$http.delete('http://localhost:3001/rows/' + id)
      .success(result => {
        _.pullAllBy(this.cardlists, [{ 'id': result }], 'id');
      })
      .error(result => {
        console.log('Error in DELETE row');
      });
  }
}
