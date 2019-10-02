import {SinglePagedWindowManager, SinglePagedApplicationManager, SinglePagedTaskManager} from 'desktop';
import DockContainer from "./dock/DockContainer";
import SettingsDefinition from './dock/defintion/SettingsDefinition';
import SchedulerDefinition from './dock/defintion/SchedulerDefinition';
import TimeLineDefinition from './dock/defintion/TimeLineDefinition';

class LoadScheduler {
  initialise() {

    //Assign User definitions into Window Container manager
    SinglePagedWindowManager.windowDefinitionCollection = [SchedulerDefinition, SettingsDefinition, TimeLineDefinition];

    SinglePagedApplicationManager.isPromotionWindowContainerVisible = false;
    SinglePagedApplicationManager.interactionWindowContainerVisible = false;
    SinglePagedApplicationManager.notificationWindowContainerVisible = false;
    SinglePagedApplicationManager.dialogWindowContainerVisible = false;
    SinglePagedApplicationManager.dropdownWindowContainerVisible = false;
    SinglePagedApplicationManager.tooltipWindowContainerVisible = false;
    SinglePagedApplicationManager.taskWindowContainerHeight = 50;
    SinglePagedApplicationManager.initialiseWindowContainers();

    const taskBarContainer = new DockContainer('dock-container');
    SinglePagedTaskManager.taskWindowContainer.addToTaskContainer(taskBarContainer);
  }
}

export default LoadScheduler;