import {WindowAppContainerWrapper} from 'desktop';
import TimeLineMonthlyRenderer from "../renderer/TimeLineMonthlyRenderer";

class TimeLineWindowAppContainerWrapper extends WindowAppContainerWrapper {
  constructor(className) {
    super(className);
  }

  createChildren() {

    const hGap = 4;
    const vGap = 4;
    const rendererWidth = 220;
    const rendererHeight = 150;

    let renderX = hGap;
    let renderY = vGap;

    this.timeLineMonthlyRenderer1 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer1.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer1.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer1.setDate('1');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer2 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer2.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer2.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer2.setDate('2');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer3 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer3.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer3.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer3.setDate('3');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer4 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer4.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer4.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer4.setDate('4');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer5 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer5.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer5.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer5.setDate('5');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer6 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer6.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer6.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer6.setDate('6');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer7 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer7.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer7.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer7.setDate('7');

    renderX = hGap;
    renderY += vGap + rendererHeight;

    this.timeLineMonthlyRenderer8 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer8.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer8.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer8.setDate('8');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer9 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer9.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer9.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer9.setDate('9');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer10 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer10.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer10.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer10.setDate('10');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer11 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer11.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer11.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer11.setDate('11');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer12 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer12.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer12.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer12.setDate('12');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer13 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer13.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer13.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer13.setDate('13');

    renderX += rendererWidth + hGap;

    this.timeLineMonthlyRenderer14 = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
    this.timeLineMonthlyRenderer14.measure(rendererWidth, rendererHeight);
    this.timeLineMonthlyRenderer14.setPosition(renderX, renderY);
    this.timeLineMonthlyRenderer14.setDate('14');
  }

  attachChildren() {
    this.addChild(this.timeLineMonthlyRenderer1);
    this.addChild(this.timeLineMonthlyRenderer2);
    this.addChild(this.timeLineMonthlyRenderer3);
    this.addChild(this.timeLineMonthlyRenderer4);
    this.addChild(this.timeLineMonthlyRenderer5);
    this.addChild(this.timeLineMonthlyRenderer6);
    this.addChild(this.timeLineMonthlyRenderer7);

    this.addChild(this.timeLineMonthlyRenderer8);
    this.addChild(this.timeLineMonthlyRenderer9);
    this.addChild(this.timeLineMonthlyRenderer10);
    this.addChild(this.timeLineMonthlyRenderer11);
    this.addChild(this.timeLineMonthlyRenderer12);
    this.addChild(this.timeLineMonthlyRenderer13);
    this.addChild(this.timeLineMonthlyRenderer14);


    this.timeLineMonthlyRenderer1.updateDimension();
    this.timeLineMonthlyRenderer2.updateDimension();
    this.timeLineMonthlyRenderer3.updateDimension();
    this.timeLineMonthlyRenderer4.updateDimension();
    this.timeLineMonthlyRenderer5.updateDimension();
    this.timeLineMonthlyRenderer6.updateDimension();
    this.timeLineMonthlyRenderer7.updateDimension();

    this.timeLineMonthlyRenderer8.updateDimension();
    this.timeLineMonthlyRenderer9.updateDimension();
    this.timeLineMonthlyRenderer10.updateDimension();
    this.timeLineMonthlyRenderer11.updateDimension();
    this.timeLineMonthlyRenderer12.updateDimension();
    this.timeLineMonthlyRenderer13.updateDimension();
    this.timeLineMonthlyRenderer14.updateDimension();
  }
}

export default TimeLineWindowAppContainerWrapper;