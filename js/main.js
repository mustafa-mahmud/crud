'use strict';

import Data from './Data.js';
import Helper from './Helper.js';
import Storage from './Storage.js';
import UI from './UI.js';
import Speak from './Speak.js';

const addInfoInput = document.querySelector('input');
const todContainer = document.querySelector('.todo-container');

function infoFunc(e) {
  if (e.key === 'Enter') {
    const id = addInfoInput.getAttribute('data-id');
    if (id) return Data.editData(id, addInfoInput.value);

    if (addInfoInput.value.trim()) {
      Data.processData(addInfoInput.value);
      Storage.saveData(Data.datas);
      Speak.speakMsg(`added ${addInfoInput.value}`);
      UI.display(Storage.getData());
      Helper.clearInput();
    } else Helper.showMsg('Please type some todo...', 'text-danger');

    Helper.timeoutFunc(Helper.removeMsg, 2);
  }
}

function editDel(e) {
  const target = e.target;
  const todo = target.closest('.todo');
  const id = +todo.getAttribute('data-id');

  if (target.classList.contains('edit')) {
    const info = todo.querySelector('.info');
    UI.displayEditInput(id, info.textContent);
  }
  if (target.classList.contains('delete')) {
    Speak.speakMsg('do you want to delete?');
    const user = confirm('do you want to delete?');
    if (user) Data.deleteData(id);
  }
}

if (Storage.getData()) UI.display(Storage.getData());

///////////////
addInfoInput.addEventListener('keypress', infoFunc);
todContainer.addEventListener('click', editDel);
