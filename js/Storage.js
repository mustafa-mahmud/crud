export default class Storage {
  constructor() {}

  static saveData(data) {
    localStorage.setItem('todo', JSON.stringify(data));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('todo'));
  }
}
