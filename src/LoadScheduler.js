import {SinglePagedWindowManager, SinglePagedApplicationManager, SinglePagedTaskManager} from 'desktop';
import TaskBarContainer from "./task/TaskBarContainer";
import SampleDefinition from '../src/defintion/SampleDefinition';

class LoadScheduler {
  initialise() {

    //Assign User definitions into Window Container manager
    SinglePagedWindowManager.windowDefinitionCollection = [SampleDefinition];

    SinglePagedApplicationManager.isPromotionWindowContainerVisible = false;
    SinglePagedApplicationManager.interactionWindowContainerVisible = false;
    SinglePagedApplicationManager.notificationWindowContainerVisible = false;
    SinglePagedApplicationManager.dialogWindowContainerVisible = false;
    SinglePagedApplicationManager.dropdownWindowContainerVisible = false;
    SinglePagedApplicationManager.tooltipWindowContainerVisible = false;
    SinglePagedApplicationManager.taskWindowContainerHeight = 50;
    SinglePagedApplicationManager.initialiseWindowContainers();

    const taskBarContainer = new TaskBarContainer('task-bar-container');
    SinglePagedTaskManager.taskWindowContainer.addToTaskContainer(taskBarContainer);
  }
}

export default LoadScheduler;