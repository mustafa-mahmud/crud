class Helper {
  constructor() {}

  static showMsg(msg, className) {
    const msgEl = document.querySelector('p');

    msgEl.textContent = msg;
    msgEl.className = className;
  }

  static removeMsg() {
    const msgEl = document.querySelector('p');

    msgEl.textContent = '';
  }

  static clearInput() {
    document.querySelector('input').value = '';
  }

  static timeoutFunc(fun, sec) {
    setTimeout(() => fun(), sec * 1000);
  }
}

export default Helper;
