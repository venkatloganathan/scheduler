import {WindowAppContainerWrapper} from 'desktop';
import DateDayComponent from "../../components/day/DateDayComponent";
import TimeLineHeaderContainer from "../view/header/TimeLineHeaderContainer";
import TimeLineCalendarContainer from "../view/calendar/TimeLineCalendarContainer";

const DATE_COMPONENT_WIDTH = 200;
const DATE_COMPONENT_HEIGHT = 170;

const HORIZONTAL_GAP = 10;
const VERTICAL_GAP = 10;
const HEADER_CONTAINER_HEIGHT = 50;


class TimeLineWindowAppContainerWrapper extends WindowAppContainerWrapper {
  constructor(className) {
    super(className);
  }

  createChildren() {
    let componentX = HORIZONTAL_GAP;
    let componentY = VERTICAL_GAP;

    this.dateComponent = new DateDayComponent('component__date');
    this.dateComponent.measure(DATE_COMPONENT_WIDTH, DATE_COMPONENT_HEIGHT);
    this.dateComponent.setPosition(componentX, componentY);

    this.dateComponent.addListener(DateDayComponent.SELECTED_DATE, this.dateComponentSelectHandler.bind(this));
    this.dateComponent.addListener(DateDayComponent.GO_BACK, this.dateComponentGoBackHandler.bind(this));
    this.dateComponent.addListener(DateDayComponent.GO_FORWARD, this.dateComponentGoForwardHandler.bind(this));

    componentX = DATE_COMPONENT_WIDTH + (HORIZONTAL_GAP * 2);
    this.headerContainer = new TimeLineHeaderContainer('time-line-header-container');
    this.headerContainer.setPosition(componentX, componentY);

    componentY = HEADER_CONTAINER_HEIGHT + (VERTICAL_GAP * 2);
    this.plannerContainer = new TimeLineCalendarContainer('time-line-planer-container');
    this.plannerContainer.setPosition(componentX, componentY);
  }

  attachChildren() {
    this.addChild(this.dateComponent);
    this.addChild(this.headerContainer);
    this.addChild(this.plannerContainer);
    this.dateComponentGoBackHandler();
    this.dateComponentSelectHandler();
  }

  updateDisplayList(width, height) {
    super.updateDisplayList(width, height);
    const containerWidth = width - DATE_COMPONENT_WIDTH - (HORIZONTAL_GAP * 3);
    this.headerContainer.measure(containerWidth, HEADER_CONTAINER_HEIGHT);
    const containerHeight = height - HEADER_CONTAINER_HEIGHT - (VERTICAL_GAP * 2);
    this.plannerContainer.measure(containerWidth, containerHeight);
  }

  dateComponentSelectHandler() {
    this.headerContainer.selectedDate = this.dateComponent.selectedDate;
    this.plannerContainer.selectedDate = this.dateComponent.selectedDate;
  }

  dateComponentGoBackHandler() {
    this.plannerContainer.goBack(this.dateComponent.firstDate, this.dateComponent.lastDate);
    this.headerContainer.updateDate(this.dateComponent.firstDate, this.dateComponent.lastDate);
  }

  dateComponentGoForwardHandler() {
    this.plannerContainer.goForward(this.dateComponent.firstDate, this.dateComponent.lastDate);
    this.headerContainer.updateDate(this.dateComponent.firstDate, this.dateComponent.lastDate);
  }
}

export default TimeLineWindowAppContainerWrapper;