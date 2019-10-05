import {VisualDivElement, VisualSpanElement, VisualMouseEvent, Utils} from 'desktop';
import DateRenderer from "./DateRenderer";

const FIRST_DAY = 0;
const SECOND_DAY = 1;
const THIRD_DAY = 2;
const FOURTH_DAY = 3;
const FIFTH_DAY = 4;
const SIXTH_DAY = 5;
const SEVENTH_DAY = 6;

const MAX_DAYS_IN_WEEK = 7;
const MAX_DAYS = 31;


class DateComponent extends VisualDivElement {

  constructor(className) {
    super(className, false);
    this.cellHeight = 25;
    this.firstDate = null;
    this.lastDate = null;
    this.startOfDay = 1;
    this.cachedYear = 0;
    this.cachedMonth = 0;
    this.dayCollection = [];
    this.dateCollection = [];
    this.dayOrderedCollection = [];
    this.firstDayCollection = [];
    this.secondDayCollection = [];
    this.thirdDayCollection = [];
    this.fourthDayCollection = [];
    this.fifthDayCollection = [];
    this.sixthDayCollection = [];
    this.seventhDayCollection = [];
    this.cachedEndDate = MAX_DAYS;
    this.totalRows = 0;
    this._headerHeight = 28;
    this._headerGap = 10;
    this.callLifeCycle();
  }

  createChildren() {
    this.leftArrowElement = new VisualSpanElement('component__date__back');
    this.dayMonthTextElement = new VisualDivElement('component__date__day_month');
    this.rightArrowElement = new VisualSpanElement('component__date__forward');
    this.leftArrowElement.setText('<');
    this.rightArrowElement.setText('>');
    for (let i = 0; i < MAX_DAYS_IN_WEEK; i++) {
      const renderer = new DateRenderer('component__date__day_cell');
      this.dayCollection[i] = renderer;
      renderer.setText(DateComponent.DAY[i]);
    }
    for (let i = 0; i < MAX_DAYS; i++) {
      const renderer = new DateRenderer('component__date__date_cell');
      this.dateCollection[i] = renderer;
      renderer.setText(i + 1);
    }
    const currentDate = new Date();
    this.setCalendar(currentDate.getFullYear(), currentDate.getMonth());
    //this.setCalendar(2019, 2);
  }

  addEventListeners() {
    this.leftArrowElement.addDOMEventListener(VisualMouseEvent.CLICK, this.goBackHandler.bind(this));
    this.rightArrowElement.addDOMEventListener(VisualMouseEvent.CLICK, this.goForwardHandler.bind(this));
  }

  attachChildren() {
    this.addChild(this.leftArrowElement);
    this.addChild(this.dayMonthTextElement);
    this.addChild(this.rightArrowElement);
    for (let i = 0; i < MAX_DAYS_IN_WEEK; i++) {
      this.addChild(this.dayCollection[i]);
    }
    for (let i = 0; i < MAX_DAYS; i++) {
      this.addChild(this.dateCollection[i]);
    }
  }

  setStartOfDay(start = 0) {
    if (start < 0 || start > 6) {
      start = 0;
    }
    if (this.startOfDay === start) {
      return;
    }
    this.startOfDay = start;
    this.populateRows(1, this.lastDate.getDate(), this.firstDate.getDay());
  }

  setCalendar(year, month = 0) {
    if (this.cachedYear === year && this.cachedMonth === month) {
      return;
    }
    this.cachedYear = year;
    this.cachedMonth = month;
    this.firstDate = new Date(Date.UTC(year, month, 1));
    this.firstDate.setUTCHours(0);
    this.firstDate.setUTCMinutes(0);
    this.firstDate.setUTCSeconds(0);
    this.firstDate.setUTCMilliseconds(0);
    const firstDay = this.firstDate.getDay();
    console.log('------------------------------------------------------');
    this.lastDate = new Date(Date.UTC(year, month + 1, 1));
    this.lastDate.setUTCHours(0);
    this.lastDate.setUTCMinutes(0);
    this.lastDate.setUTCSeconds(0);
    this.lastDate.setUTCMilliseconds(0);
    this.lastDate.setTime(this.lastDate.getTime() - DateComponent.DAY_IN_MILLISECONDS);
    const displayText = `${DateComponent.MONTH[month]} ${year}`;
    this.dayMonthTextElement.setText(displayText);
    console.log('First Date', this.firstDate.toDateString(), 'Last Date', this.lastDate.toDateString());
    this.populateRows(1, this.lastDate.getDate(), firstDay);
  }

  goBackHandler() {
    let currentMonth = this.firstDate.getMonth();
    let currentYear = this.firstDate.getFullYear();
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    this.setCalendar(currentYear, currentMonth);
  }

  goForwardHandler() {
    let currentMonth = this.firstDate.getMonth();
    let currentYear = this.firstDate.getFullYear();
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    this.setCalendar(currentYear, currentMonth);
  }

  populateRows(startDate, endDate, startDay) {
    const visibleDifference = this.cachedEndDate - endDate;
    if (visibleDifference > 0) {
      for (let i = MAX_DAYS; i > endDate; i--) {
        this.dateCollection[i - 1].setVisible(false);
      }
    } else if (visibleDifference < 0) {
      for (let i = this.cachedEndDate; i < MAX_DAYS; i++) {
        this.dateCollection[i].setVisible(true);
      }
    }

    this.cachedEndDate = endDate;

    console.log('First Day', startDay);

    this.totalRows = 0;
    this.dayOrderedCollection.length = 0;
    this.firstDayCollection.length = 0;
    this.secondDayCollection.length = 0;
    this.thirdDayCollection.length = 0;
    this.fourthDayCollection.length = 0;
    this.fifthDayCollection.length = 0;
    this.sixthDayCollection.length = 0;
    this.seventhDayCollection.length = 0;
    let str = '';
    let startDayIndex = startDay;
    let lastProcessedIndex = 0;
    let i = 0;
    let dayStr = '';
    let previousStartDayIndex = 0;
    let totalRows = 0;
    let endOfWeek = MAX_DAYS_IN_WEEK - 1;

    for (let i = this.startOfDay; i < DateComponent.DAY.length; i++) {
      dayStr += `${DateComponent.DAY[i]} `;
      this.dayOrderedCollection.push(this.dayCollection[i]);
    }

    for (let i = 0; i < this.startOfDay; i++) {
      dayStr += `${DateComponent.DAY[i]} `;
      this.dayOrderedCollection.push(this.dayCollection[i]);
    }

    console.log(dayStr);
    let diff = startDayIndex - this.startOfDay;
    console.log('Start Difference', diff);
    startDayIndex = 0;
    if (diff < 0) {
      diff = endOfWeek;
    }
    for (let i = diff; i >= 1; i--) {
      str += '00 ';
      this.populateCollection(startDayIndex);
      startDayIndex++;
    }
    for (let i = 1; i <= endDate; i++) {
      const ii = i >= 10 ? i.toString() : `0${i}`;
      str += ii + ' ';
      this.populateCollection(startDayIndex, i);
      if (startDayIndex === endOfWeek) {
        console.log(str);
        str = '';
        startDayIndex = 0;
        lastProcessedIndex = i;
        this.totalRows++;
      } else {
        startDayIndex++;
      }
    }
    if (lastProcessedIndex !== endDate) {
      console.log(str);
      this.totalRows++;
    }
    if (startDayIndex !== 0) {
      for (let i = startDayIndex; i < MAX_DAYS_IN_WEEK; i++) {
        this.populateCollection(startDayIndex);
        startDayIndex++;
      }
    }
    console.log('Total Rows', this.totalRows, lastProcessedIndex, startDayIndex);
    this.renderCells();
  }

  populateCollection(startDay, day = null, previous = false, forward = false) {
    day = Utils.isDefinedAndNotNull(day) ? this.dateCollection[day - 1] : null;
    switch (startDay) {
      case FIRST_DAY:
        this.firstDayCollection.push(day);
        break;
      case SECOND_DAY:
        this.secondDayCollection.push(day);
        break;
      case THIRD_DAY:
        this.thirdDayCollection.push(day);
        break;
      case FOURTH_DAY:
        this.fourthDayCollection.push(day);
        break;
      case FIFTH_DAY:
        this.fifthDayCollection.push(day);
        break;
      case SIXTH_DAY:
        this.sixthDayCollection.push(day);
        break;
      case SEVENTH_DAY:
        this.seventhDayCollection.push(day);
        break;
    }
  }

  getCollection(startDay) {
    switch (startDay) {
      case FIRST_DAY:
        return this.firstDayCollection;
      case SECOND_DAY:
        return this.secondDayCollection;
      case THIRD_DAY:
        return this.thirdDayCollection;
      case FOURTH_DAY:
        return this.fourthDayCollection;
      case FIFTH_DAY:
        return this.fifthDayCollection;
      case SIXTH_DAY:
        return this.sixthDayCollection;
      case SEVENTH_DAY:
        return this.seventhDayCollection;
    }
    return null;
  }

  updateDisplayList(width, height) {
    this.renderCells();
  }

  set headerGap(gap) {
    if (this._headerGap === gap) {
      return;
    }
    this._headerGap = gap;
    this.renderCells();
  }

  set headerHeight(height) {
    if (this._headerHeight === height) {
      return;
    }
    this._headerHeight = height;
    this.renderCells();
  }

  renderCells() {
    if (isNaN(this.width) || isNaN(this.height)) {
      return;
    }
    let renderX = 0;
    let renderY = 0;
    let dayCollection = null;
    let dayRenderer = null;
    let dateRenderer = null;
    const cellWidth = parseInt(this.width / MAX_DAYS_IN_WEEK, 10);
    const cellHeight = parseInt((this.height - this._headerGap - this._headerHeight) / (this.totalRows + 1), 10);
    for (let dayIndex = 0; dayIndex < MAX_DAYS_IN_WEEK; dayIndex++) {
      renderY = this._headerGap;
      dayRenderer = this.dayOrderedCollection[dayIndex];
      dayRenderer.setPosition(renderX, renderY);
      dayRenderer.measure(cellWidth, cellHeight);
      dayCollection = this.getCollection(dayIndex);
      renderY += cellHeight;
      for (let rowIndex = 0; rowIndex < this.totalRows; rowIndex++) {
        dateRenderer = dayCollection[rowIndex];
        if (dateRenderer) {
          dateRenderer.setPosition(renderX, renderY);
          dateRenderer.measure(cellWidth, cellHeight);
        }
        renderY += cellHeight;
      }
      renderX += cellWidth;
    }
  }

  destroy() {
    super.destroy();
    this.firstDate = null;
    this.lastDate = null;

    this.dayCollection.length = 0;
    this.dayCollection = null;

    this.dateCollection.length = 0;
    this.dateCollection = null;

    this.dayOrderedCollection.length = 0;
    this.dayOrderedCollection= null;

    this.firstDayCollection.length = 0;
    this.firstDayCollection = null;

    this.secondDayCollection.length = 0;
    this.secondDayCollection = null;

    this.thirdDayCollection.length = 0;
    this.thirdDayCollection = 0;

    this.fourthDayCollection.length = 0;
    this.fourthDayCollection = null;

    this.fifthDayCollection.length = 0;
    this.fifthDayCollection = null;

    this.sixthDayCollection.length = 0;
    this.sixthDayCollection = null;

    this.seventhDayCollection.length = 0;
    this.seventhDayCollection = null;
  }

}

DateComponent.SECOND_IN_MILLISECONDS = 1000;
DateComponent.MINUTE_IN_MILLISECONDS = 1000 * 60;
DateComponent.HOUR_IN_MILLISECONDS = DateComponent.MINUTE_IN_MILLISECONDS * 60;
DateComponent.DAY_IN_MILLISECONDS = DateComponent.HOUR_IN_MILLISECONDS * 24;
DateComponent.WEEK_IN_MILLISECONDS = DateComponent.DAY_IN_MILLISECONDS * 7;

DateComponent.MONTH = ['January', 'February', 'March', 'April', 'May', 'June', '' +
'July', 'August', 'September', 'October', 'November', 'December'];

DateComponent.DAY = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

export default DateComponent;