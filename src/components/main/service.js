export default class MainService {
  constructor($http) {
    this.cardlists = [];
    this.$http = $http;
    this.check = false;
  }
  renderRow() {
    return this.$http.get('http://localhost:3001/');
  }
  addRow() {
    return this.$http.post('http://localhost:3001/rows', {data: []});
  }
  deleteRow(index) {
    return this.$http.delete('http://localhost:3001/rows/' + index);
  }
}
