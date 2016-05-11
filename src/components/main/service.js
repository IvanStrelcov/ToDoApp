export default class MainService {
  constructor($http) {
    this.cardlists = [];
    this.$http = $http;
    this.check = false;
  }

  getCardlists() {
    return this.$http.get('http://localhost:3001/');
  }

  addRow() {
    return this.$http.post('http://localhost:3001/rows', {data: []});
  }
  
  deleteRow(id) {
    return this.$http.delete('http://localhost:3001/rows/' + id);
  }
}
