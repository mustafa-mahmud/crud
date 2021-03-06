class UI {
  todContainer = document.querySelector('.todo-container');
  input = document.querySelector('input');

  constructor() {}

  display(datas) {
    this.todContainer.innerHTML = '';

    datas.reverse().forEach((data, ind) => {
      this.todContainer.innerHTML += `
				<div data-id="${
          data.id
        }" class="todo d-flex align-items-center justify-content-between bg-info">
					<span class="serial bg-black">${ind < 9 ? '0' + (ind + 1) : ind + 1}</span>
					<span class="info">${data.todo}</span>
					<img class="img-done" src="img/done.svg" />
					<img src="img/pencil.svg" class="edit" title="Edit" alt="edit" />
					<img src="img/trash.svg" class="delete" title="Delete" alt="delete" />
				</div>
			`;
    });
  }

  displayEditInput(id, data) {
    this.input.setAttribute('data-id', id);
    this.input.value = data;
    this.input.focus();
  }

  removeAttr(attr) {
    this.input.removeAttribute(attr);
  }
}

export default new UI();
