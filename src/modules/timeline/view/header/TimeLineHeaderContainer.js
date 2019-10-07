import {VisualDivElement, VisualMouseEvent, Utils} from 'desktop';
import TimeLineCalendarContainer from "../calendar/TimeLineCalendarContainer";
import DateProperties from "../../../components/day/DateProperties";

const HORIZONTAL_GAP = 10;
const VERTICAL_GAP = 10;

class TimeLineHeaderContainer extends VisualDivElement {
  constructor(className) {
    super(className, false);
    this._selectedDate = null;
    this.callLifeCycle();
  }

  createChildren() {
    let componentX = 0;
    let componentY = 0;

    this.labelComponent = new VisualDivElement('time-line-header-container__label');
    this.labelComponent.setPosition(componentX, componentY);
  }

  attachChildren() {
    this.addChild(this.labelComponent);
  }

  // set selectedDate(date) {
  //   this._selectedDate = date;
  //   const displayText = date ? `${date.getDate()} ${DateProperties.MONTH[date.getMonth()]} ${date.getFullYear()}` : '';
  //   this.labelComponent.setText(displayText);
  // }

  updateDate(firstDate, lastDate) {
      const displayText = firstDate ? `${DateProperties.MONTH[firstDate.getMonth()]} ${firstDate.getFullYear()}` : '';
      this.labelComponent.setText(displayText);
  }

}

export default TimeLineHeaderContainer;