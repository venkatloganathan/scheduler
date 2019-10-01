import {WindowRequestInteractionSource} from 'desktop';
import TaskComponent from "./DockComponent";
import DefinitionTypes from "./defintion/DefinitionTypes";

class SchedulerDockComponent extends TaskComponent {
  constructor(className) {
    super(className);
  }

  updateWindowRequest() {
    this.windowRequest.source = WindowRequestInteractionSource.USER_INTERACTION;
    this.windowRequest.type = DefinitionTypes.SCHEDULER;
    this.windowRequest.data = 'hello world';
  }


}

export default SchedulerDockComponent;