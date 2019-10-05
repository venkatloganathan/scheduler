import {WindowAppContainerWrapper} from 'desktop';
import DateComponent from "../../components/date/DateComponent";

class TimeLineWindowAppContainerWrapper extends WindowAppContainerWrapper {
  constructor(className) {
    super(className);
  }

  createChildren() {
    const renderX = 700;
    const renderY = 50;

    const rendererWidth = 170;
    const rendererHeight = 150;

    this.dateComponent = new DateComponent('component__date');
    this.dateComponent.measure(rendererWidth, rendererHeight);
    this.dateComponent.setPosition(renderX, renderY);
   }

  attachChildren() {
    this.addChild(this.dateComponent);
  }
}

export default TimeLineWindowAppContainerWrapper;