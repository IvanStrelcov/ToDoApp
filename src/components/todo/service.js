export default class TodoService {

  constructor($http) {
    this.$http = $http;
  }

  changeTitle(todoId, data) {
    return this.$http.put('http://localhost:3001/todos/' + todoId, data);
  }

  changeStatus(todoId, data) {
    return this.$http.put('http://localhost:3001/todos/status/' + todoId, data);
  }
}
