import {VisualDivElement} from 'desktop';

class DateDayRenderer extends VisualDivElement {

  constructor(className) {
    super(className, false);
    this.callLifeCycle();
    this.dateAsNumber = 0;
    this.previous = false;
    this.forward = false;
  }

  setDateAsNumber(dateAsNumber, previous = false, forward = false) {
    this.dateAsNumber = dateAsNumber;
    this.previous = previous;
    this.forward = forward;
    this.setText(dateAsNumber);
  }
}

export default DateDayRenderer;