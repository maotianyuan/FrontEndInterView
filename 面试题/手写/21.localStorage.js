class BaseStorage {
  constructor(storage) {
    this.storage = storage;
  }
  get(key) {
    let value = this.storage.getItem(key);
  }
  set(key, arr) {
    this.localStorage.setItem(key, JSON.stringify(arr));
  }
  remove(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}

export const sessionStorage = new SessionStorage(window.sessionStorage);
export const localStorage = new BaseStorage(window.localStorage);


class StorageBase {
  constructor(storage) {
    this.storage = storage;
  }
  static getInstance() {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  }
  setItem = (key, value) => this.storage.setItem(key, value);
  getItem = (key) => this.storage.getItem(key);
  removeItem = (key) => this.storage.removeItem(key);
  setJSON = (key, data) => this.storage.setItem(key, JSON.stringify(data));
  getJSON = (key) => JSON.parse(this.storage.getItem(key));
}

export const localStorage = new StorageBase(window.localStorage);
