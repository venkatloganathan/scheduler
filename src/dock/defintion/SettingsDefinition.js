import {WindowDefinition} from 'desktop';
import DefinitionTypes from "./DefinitionTypes";

class SettingsDefinition extends WindowDefinition {
  constructor() {
    super();
    this.type = DefinitionTypes.SETTINGS;
    this.moduleName = 'settings';
    this.basePath = '/Scheduler/build/modules';
  }
}

const instance = new SettingsDefinition();
Object.freeze(instance);
export default instance;