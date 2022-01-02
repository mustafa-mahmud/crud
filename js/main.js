'use strict';

import Data from './Data.js';
import Helper from './Helper.js';
import Storage from './Storage.js';
import UI from './UI.js';

const addInfoInput = document.querySelector('input');

function infoFunc(e) {
  if (e.key === 'Enter') {
    if (addInfoInput.value.trim()) {
      Data.processData(addInfoInput.value);

      Storage.saveData(Data.datas);

      UI.display(Storage.getData());
      Helper.clearInput();
    } else Helper.showMsg('Please type some todo...', 'text-danger');

    Helper.timeoutFunc(Helper.removeMsg, 2);
  }
}

if (Storage.getData()) UI.display(Storage.getData());

///////////////
addInfoInput.addEventListener('keypress', infoFunc);
