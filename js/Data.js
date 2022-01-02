import Storage from './Storage.js';

class Data {
  datas = Storage.getData() ? Storage.getData() : [];

  constructor() {}

  processData(data) {
    const id = Date.now();
    this.datas.push({ id, todo: data });
  }
}

export default new Data();
