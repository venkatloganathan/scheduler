import {VisualDivElement} from 'desktop';
import SettingsTaskComponent from "./SettingsTaskComponent";

class TaskBarContainer extends VisualDivElement {
  constructor(className) {
    super(className);
  }

  createChildren() {
    this.settingsComponent = new SettingsTaskComponent('settings-task-component__icon');
  }

  attachChildren() {
    this.addChild(this.settingsComponent);
  }

}

export default TaskBarContainer;