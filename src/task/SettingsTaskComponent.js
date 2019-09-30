import {WindowRequestInteractionSource} from 'desktop';
import TaskComponent from "./TaskComponent";
import DefinitionTypes from "../defintion/DefinitionTypes";

class SettingsTaskComponent extends TaskComponent {
  constructor(className) {
    super(className);
  }

  updateWindowRequest() {
    this.windowRequest.source = WindowRequestInteractionSource.USER_INTERACTION;
    this.windowRequest.type = DefinitionTypes.SAMPLE;
    this.windowRequest.data = 'hello world';
  }


}

export default SettingsTaskComponent;