import { action, observable } from "mobx";

type Messages = {
  [url: string]: {}[];
};

export class AppStore {
  @observable
  messages: Messages = {};

  @action
  newTab(url: string) {
    this.messages[url] = [];
  }

  @action
  closeTab(url: string) {
    delete this.messages[url];
  }
}

const appStore = new AppStore();

export { appStore };
