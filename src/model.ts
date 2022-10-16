import { StatusChanged } from './common.js';

export default class Model {
  isOn: boolean;
  private onStatusChanged: StatusChanged | null;
  constructor() {
    this.isOn = true;
    this.onStatusChanged = null;
  }

  toggle() {
    this.isOn = !this.isOn;
    if (this.onStatusChanged)
      this.onStatusChanged();
  }

  bindStatusChanged(callback: StatusChanged) {
    this.onStatusChanged = callback;
  }
}