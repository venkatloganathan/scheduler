import {VisualDivElement, VisualMouseEvent, Utils} from 'desktop';
import TimeLineMonthlyContainer from "./monthly/TimeLineMonthlyContainer";

class TimeLineCalendarContainer extends VisualDivElement {
  constructor(className) {
    super(className, false);
    this._selectedDate = null;
    this.callLifeCycle();
  }

  createChildren() {
    this.timeLineMonthlyContainer = new TimeLineMonthlyContainer('time-line-renderer-container__monthly');
    this.timeLineMonthlyContainer.setPosition(0, 0);
  }

  attachChildren() {
    this.addChild(this.timeLineMonthlyContainer);
  }

  set selectedDate(date) {
    this._selectedDate = date;
    this.timeLineMonthlyContainer.setSelectedDate(date);
  }

  goBack(firstDate, lastDate) {
    this.timeLineMonthlyContainer.goBack(firstDate, lastDate);
  }

  goForward(firstDate, lastDate) {
    this.timeLineMonthlyContainer.goForward(firstDate, lastDate);
  }
}

export default TimeLineCalendarContainer;