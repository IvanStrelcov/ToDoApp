export default class CardListService {

  constructor($http) {
    this.$http = $http;
  }

  getCards(cardlistId) {
    return this.$http.get('http://localhost:3001/cards/' + cardlistId);
  }

  addCard(data) {
    return this.$http.post('http://localhost:3001/cards', data);
  }

  removeCard(id) {
    return this.$http.delete('http://localhost:3001/cards/' + id);
  }
}
