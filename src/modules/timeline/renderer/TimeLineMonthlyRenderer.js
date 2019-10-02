import {VisualDivElement, VisualSpanElement} from 'desktop';

class TimeLineMonthlyRenderer extends VisualDivElement {
  constructor(className) {
    super(className);
  }

  createChildren() {
    this.dateComponent = new VisualSpanElement('time-line-renderer-container__date');
    this.dateComponent.measure(20, 20);
  }

  attachChildren() {
    this.addChild(this.dateComponent);
    this.dateComponent.updateDimension();
  }

  setDate(date){
    this.dateComponent.setText(date);
  }

}

export default TimeLineMonthlyRenderer;