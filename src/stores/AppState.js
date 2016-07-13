import {observable, computed} from 'mobx';

class AppState {
  @observable timer = 10;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @computed get getTimer() {
    return this.timer;
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
