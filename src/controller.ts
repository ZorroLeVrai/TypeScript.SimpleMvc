import Model from './model.js';
import View from './view.js';

export default class Controller {
  model: Model;
  view: View;

  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;

    this.lampActionHandler = this.lampActionHandler.bind(this);
    this.onStatusChanged = this.onStatusChanged.bind(this);

    //Explicit binding
    this.model.bindStatusChanged(this.onStatusChanged);
    this.view.bindHandleLampCommand(this.lampActionHandler);
  }

  //model changed => update the view
  onStatusChanged(){
    this.view.update(this.model.isOn);
  }

  //DOM action => update the model
  lampActionHandler() {
    this.model.toggle();
  }
}