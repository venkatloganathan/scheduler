import {
  VisualSpanElement,
  VisualMouseEvent,
  VisualDivElement,
  WindowRequest,
  SinglePagedTaskManager
} from 'desktop';

class TaskComponent extends VisualDivElement {
  constructor(className) {
    super(className);
    this.windowRequest = new WindowRequest();
    this.updateWindowRequest();
  }

  updateWindowRequest() {

  }

  createChildren() {
    super.createChildren();
    this.iconElement = new VisualSpanElement('task-component__icon');
  }

  addEventListeners() {
    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.addDOMEventListener(VisualMouseEvent.CLICK, this.closeClickHandler);
  }

  attachChildren() {
    this.addChild(this.iconElement);
  }

  closeClickHandler() {
    SinglePagedTaskManager.loadWindow(this.windowRequest);
  }
}

TaskComponent.TASK_REQUEST = 'taskRequest';

export default TaskComponent;