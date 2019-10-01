import {VisualDivElement} from 'desktop';
import SettingsTaskComponent from "./SettingsTaskComponent";
import SchedulerDockComponent from "./SchedulerDockComponent";

class DockContainer extends VisualDivElement {
  constructor(className) {
    super(className);
  }

  createChildren() {
    this.schedulerComponent = new SchedulerDockComponent('scheduler-task-component__icon');
    this.settingsComponent = new SettingsTaskComponent('settings-dock-component__icon');
  }

  attachChildren() {
    this.addChild(this.schedulerComponent);
    this.addChild(this.settingsComponent);
  }

}

export default DockContainer;