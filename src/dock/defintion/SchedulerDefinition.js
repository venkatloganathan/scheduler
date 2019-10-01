import {WindowDefinition} from 'desktop';
import DefinitionTypes from "./DefinitionTypes";

class SchedulerDefinition extends WindowDefinition {
  constructor() {
    super();
    this.type = DefinitionTypes.SCHEDULER;
    this.moduleName = 'scheduler';
    this.basePath = '/Scheduler/build/modules';
  }
}

const instance = new SchedulerDefinition();
Object.freeze(instance);
export default instance;