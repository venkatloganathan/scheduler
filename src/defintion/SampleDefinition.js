import {WindowDefinition} from 'desktop';
import DefinitionTypes from "./DefinitionTypes";

class SampleDefinition extends WindowDefinition {
  constructor() {
    super();
    this.type = DefinitionTypes.SAMPLE;
    this.moduleName = 'example';
    this.basePath = '/Scheduler/build/modules';
  }
}

const instance = new SampleDefinition();
Object.freeze(instance);
export default instance;