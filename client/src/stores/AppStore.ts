import { action, observable, makeObservable } from "mobx";

type Message = {};

export class AppStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  url?: string = undefined;

  @observable
  messages: Message[] = [];

  @action
  setUrl(value: string) {
    this.url = value;
  }
}

const appStore = new AppStore();

export { appStore };
