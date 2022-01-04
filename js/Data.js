import Storage from './Storage.js';
import UI from './UI.js';
import Helper from './Helper.js';
import Speak from './Speak.js';

class Data {
  datas;
  constructor() {
    this.datas = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];
  }

  processData(data) {
    const id = Date.now();
    this.datas.push({ id, todo: data });
  }

  deleteData(id) {
    const index = this.datas.findIndex((data) => data.id === id);
    this.datas.splice(index, 1);
    Storage.saveData(this.datas);
    Speak.speakMsg('deleted successfully');
    UI.display(this.datas);
  }

  editData(id, edit) {
    this.datas = this.datas.map((data) => {
      if (data.id === +id) {
        return { id: +id, todo: edit };
      }

      return data;
    });

    Storage.saveData(this.datas);
    UI.display(this.datas);
    UI.removeAttr('data-id');
    Helper.clearInput();
    Speak.speakMsg(`edited ${edit}`);
  }
}

export default new Data();
