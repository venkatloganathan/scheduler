import {WindowRequestInteractionSource} from 'desktop';
import TaskComponent from "./DockComponent";
import DefinitionTypes from "./defintion/DefinitionTypes";

class SettingsDockComponent extends TaskComponent {
  constructor(className) {
    super(className);
  }

  updateWindowRequest() {
    this.windowRequest.source = WindowRequestInteractionSource.USER_INTERACTION;
    this.windowRequest.type = DefinitionTypes.SETTINGS;
    this.windowRequest.data = 'hello world';
  }


}

export default SettingsDockComponent;