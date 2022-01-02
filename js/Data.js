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
    console.log(id, 'delete');
  }

  editData(id) {
    console.log(id, 'edit');
  }
}

export default new Data();
