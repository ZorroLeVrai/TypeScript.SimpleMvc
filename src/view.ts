import { LampActionHandler } from './common.js';

export default class View {
  private lampElement: HTMLDivElement;

  constructor() {
    this.lampElement = document.getElementById("lamp") as HTMLDivElement;
  }

  bindHandleLampCommand(lampActionHandler: LampActionHandler) {
    this.lampElement.addEventListener("click", lampActionHandler);
  }

  update(status: boolean) {
    if (status)
    {
      this.lampElement.classList.add("bgcolor-on");
      this.lampElement.classList.remove("bgcolor-off");
    }
    else
    {
      this.lampElement.classList.add("bgcolor-off");
      this.lampElement.classList.remove("bgcolor-on");
    }
  }
}