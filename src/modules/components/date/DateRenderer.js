import {VisualDivElement} from 'desktop';

class DateRenderer extends VisualDivElement {

  constructor(className) {
    super(className, false);
    this.callLifeCycle();
  }
}

export default DateRenderer;