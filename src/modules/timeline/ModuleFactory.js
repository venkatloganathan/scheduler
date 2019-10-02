import {ModuleTemplate} from 'desktop';
import TimeLineWindowAppContainerWrapper from "./wrapper/TimeLineWindowAppContainerWrapper";

class ModuleFactory {

  loadFactory() {
    const moduleTemplate = new ModuleTemplate();
    moduleTemplate.setAppContainerWrapper(TimeLineWindowAppContainerWrapper, 'time-line-window-app-container-wrapper');
    return moduleTemplate.defaultTemplateFactory;
  }

}

export default ModuleFactory;