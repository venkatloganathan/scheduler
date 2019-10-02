import {WindowDefinition} from 'desktop';
import DefinitionTypes from "./DefinitionTypes";

class TimeLineDefinition extends WindowDefinition {
  constructor() {
    super();
    this.type = DefinitionTypes.TIME_LINE;
    this.moduleName = 'timeline';
    this.basePath = '/Scheduler/build/modules';
  }
}

const instance = new TimeLineDefinition();
Object.freeze(instance);
export default instance;