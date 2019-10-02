import {VisualDivElement} from 'desktop';
import SettingsDockComponent from "./SettingsDockComponent";
import SchedulerDockComponent from "./SchedulerDockComponent";
import TimeLineDockComponent from "./TimeLineDockComponent";

class DockContainer extends VisualDivElement {
  constructor(className) {
    super(className);
  }

  createChildren() {
    this.schedulerComponent = new SchedulerDockComponent('scheduler-task-component__icon');
    this.settingsComponent = new SettingsDockComponent('settings-dock-component__icon');
    this.timeLineDockComponent = new TimeLineDockComponent('timeline-dock-component__icon');
  }

  attachChildren() {
    this.addChild(this.schedulerComponent);
    this.addChild(this.settingsComponent);
    this.addChild(this.timeLineDockComponent);
  }

}

export default DockContainer;