class Speak {
  msg;
  constructor() {
    this.msg = new SpeechSynthesisUtterance();
  }

  speakMsg(txt) {
    this.msg.text = txt;
    window.speechSynthesis.speak(this.msg);
  }
}

export default new Speak();
