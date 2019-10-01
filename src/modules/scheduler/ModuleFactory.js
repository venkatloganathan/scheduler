import {ModuleTemplate} from 'desktop';

class ModuleFactory {

  loadFactory() {
    const moduleTemplate = new ModuleTemplate();
    return moduleTemplate.defaultTemplateFactory;
  }

}

export default ModuleFactory;