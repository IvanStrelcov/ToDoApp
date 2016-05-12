export default class CardService {

  constructor($http) {
    this.$http = $http;
  }

  getTodos(cardId) {
    return this.$http.get('http://localhost:3001/cards/' + cardId);
  }

  addTodo(data) {
    return this.$http.post('http://localhost:3001/todo', data);
  }

  removeTodo(id) {
    return this.$http.delete('http://localhost:3001/todos/' + id);
  }

  changeTitle(cardId, data) {
    return this.$http.put('http://localhost:3001/cards/' + cardId, data);
  }
}
