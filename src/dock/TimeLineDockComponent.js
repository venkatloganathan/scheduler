import {WindowRequestInteractionSource} from 'desktop';
import TaskComponent from "./DockComponent";
import DefinitionTypes from "./defintion/DefinitionTypes";

class TimeLineDockComponent extends TaskComponent {
  constructor(className) {
    super(className);
  }

  updateWindowRequest() {
    this.windowRequest.source = WindowRequestInteractionSource.USER_INTERACTION;
    this.windowRequest.type = DefinitionTypes.TIME_LINE;
    this.windowRequest.data = 'hello world';
  }


}

export default TimeLineDockComponent;