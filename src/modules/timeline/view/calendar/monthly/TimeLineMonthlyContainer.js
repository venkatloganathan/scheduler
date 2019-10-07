import {VisualDivElement, VisualMouseEvent, Utils} from 'desktop';
import DateDayRenderer from "../../../../components/day/DateDayRenderer";
import DateProperties from "../../../../components/day/DateProperties";
import TimeLineMonthlyRenderer from "./TimeLineMonthlyRenderer";

const DAY_RENDERER_HEIGHT = 25;
const RENDER_PADDING = 5;

const PADDING_GAP = DateProperties.MAX_DAYS_IN_WEEK * RENDER_PADDING;

class TimeLineMonthlyContainer extends VisualDivElement {
  constructor(className) {
    super(className, false);
    this.firstDate = null;
    this.lastDate = null;
    this.manipulatedDate = null;
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
    this.cachedEndDate = DateProperties.MAX_DAYS;
    this.totalRows = 0;
    this._headerHeight = 28;
    this._headerGap = 10;

    this.currentDate = new Date();
    this.selectedDate = null;

    this.todayStyleName = 'today';
    this.selectedStyleName = 'selected';
    this.holidayStyleName = 'holiday';
    this.weekendStyleName = 'weekend';

    //this.weekendDays = [5, 6];
    //this.holidaysCollection = [new Date(2019, 11, 25), new Date(2020, 0, 1)];
    //this.customSelectionCollection = [{
    //  date: new Date(2019, 9, 5), style: 'end-of-month'
    //}];
    this.enableAutoAdjustWidthAndHeight();
    this.callLifeCycle();
  }

  createChildren() {
    for (let i = 0; i < DateProperties.MAX_DAYS_IN_WEEK; i++) {
      const renderer = new DateDayRenderer('time-line-renderer-container__day');
      this.dayCollection[i] = renderer;
      renderer.setText(DateProperties.FULL_DAY[i]);
    }
    for (let i = 0; i < DateProperties.MAX_DAYS; i++) {
      const renderer = new TimeLineMonthlyRenderer('time-line-renderer-container__monthly');
      this.dateCollection[i] = renderer;
      renderer.setDateAsNumber(i + 1);
      renderer.addDOMEventListener(VisualMouseEvent.CLICK, this.dateSelected.bind(this, renderer));
    }
  }

  attachChildren() {
    for (let i = 0; i < DateProperties.MAX_DAYS_IN_WEEK; i++) {
      this.addChild(this.dayCollection[i]);
    }
    for (let i = 0; i < DateProperties.MAX_DAYS; i++) {
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
    this.manipulatedDate = new Date(year, month, 1);
    this.manipulatedDate.setHours(0);
    this.manipulatedDate.setMinutes(0);
    this.manipulatedDate.setHours(0);
    this.manipulatedDate.setMilliseconds(0);
    console.log('------------------------------------------------------');
    this.lastDate = new Date(Date.UTC(year, month + 1, 1));
    this.lastDate.setUTCHours(0);
    this.lastDate.setUTCMinutes(0);
    this.lastDate.setUTCSeconds(0);
    this.lastDate.setUTCMilliseconds(0);
    this.lastDate.setTime(this.lastDate.getTime() - DateProperties.DAY_IN_MILLISECONDS);
    console.log('First Date', this.firstDate.toDateString(), 'Last Date', this.lastDate.toDateString());
    this.populateRows(1, this.lastDate.getDate(), firstDay);
  }

  dateSelected(dateRenderer, event) {
    const selectedDate = new Date();
    selectedDate.setFullYear(this.firstDate.getFullYear());
    selectedDate.setMonth(this.firstDate.getMonth());
    selectedDate.setDate(dateRenderer.dateAsNumber);
    this.setSelectedDate(selectedDate);
    this.dispatch(DateDayComponent.SELECTED_DATE, selectedDate);
  }

  setSelectedDate(date) {
    this.selectedDate = date;
    if (!this.lastDate || !this.firstDate) {
      return;
    }
    this.populateRows(1, this.lastDate.getDate(), this.firstDate.getDay());
  }

  goBack(firsDate, lastDate) {
    this.firstDate = firsDate;
    this.lastDate = lastDate;
    let currentMonth = this.firstDate.getMonth();
    let currentYear = this.firstDate.getFullYear();
    this.setCalendar(currentYear, currentMonth);
  }

  goForward(firsDate, lastDate) {
    this.firstDate = firsDate;
    this.lastDate = lastDate;
    let currentMonth = this.firstDate.getMonth();
    let currentYear = this.firstDate.getFullYear();
    this.setCalendar(currentYear, currentMonth);
  }

  populateRows(startDate, endDate, startDay) {
    this.currentDate = new Date();
    this.currentDate.setHours(0);
    this.currentDate.setMinutes(0);
    this.currentDate.setHours(0);
    this.currentDate.setMilliseconds(0);
    const visibleDifference = this.cachedEndDate - endDate;
    if (visibleDifference > 0) {
      for (let i = DateProperties.MAX_DAYS; i > endDate; i--) {
        this.dateCollection[i - 1].setVisible(false);
      }
    } else if (visibleDifference < 0) {
      for (let i = this.cachedEndDate; i < DateProperties.MAX_DAYS; i++) {
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
    let endOfWeek = DateProperties.MAX_DAYS_IN_WEEK - 1;

    for (let i = this.startOfDay; i < DateProperties.DAY.length; i++) {
      dayStr += `${DateProperties.DAY[i]} `;
      this.dayOrderedCollection.push(this.dayCollection[i]);
    }

    for (let i = 0; i < this.startOfDay; i++) {
      dayStr += `${DateProperties.DAY[i]} `;
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
      for (let i = startDayIndex; i < DateProperties.MAX_DAYS_IN_WEEK; i++) {
        this.populateCollection(startDayIndex);
        startDayIndex++;
      }
    }
    console.log('Total Rows', this.totalRows, lastProcessedIndex, startDayIndex);
    this.renderCells();
  }

  populateCollection(startDay, day = null, previous = false, forward = false) {
    let dateComponent = null;
    if (Utils.isDefinedAndNotNull(day)) {
      dateComponent = this.dateCollection[day - 1];
      this.applyStyles(dateComponent, startDay, day);
    }
    switch (startDay) {
      case DateProperties.FIRST_DAY:
        this.firstDayCollection.push(dateComponent);
        break;
      case DateProperties.SECOND_DAY:
        this.secondDayCollection.push(dateComponent);
        break;
      case DateProperties.THIRD_DAY:
        this.thirdDayCollection.push(dateComponent);
        break;
      case DateProperties.FOURTH_DAY:
        this.fourthDayCollection.push(dateComponent);
        break;
      case DateProperties.FIFTH_DAY:
        this.fifthDayCollection.push(dateComponent);
        break;
      case DateProperties.SIXTH_DAY:
        this.sixthDayCollection.push(dateComponent);
        break;
      case DateProperties.SEVENTH_DAY:
        this.seventhDayCollection.push(dateComponent);
        break;
    }
  }

  applyStyles(dateComponent, startDay, day) {
    day--;
    dateComponent.removeAllClasses();
    let weekendStyleApplied = false;
    let currentDateStyleApplied = false;
    let holidayStyleApplied = false;
    let customStyleApplied = false;
    let selectedStyleApplied = false;

    this.manipulatedDate.setTime(this.firstDate.getTime() + (day * DateProperties.DAY_IN_MILLISECONDS));

    if (this.selectedDate && this.selectedDate.getDate() === this.manipulatedDate.getDate() &&
      this.selectedDate.getMonth() === this.manipulatedDate.getMonth() &&
      this.selectedDate.getFullYear() === this.manipulatedDate.getFullYear()) {
      selectedStyleApplied = true;
    }

    if (!selectedStyleApplied && this.weekendDays) {
      for (let i = 0; i < this.weekendDays.length; i++) {
        if (this.weekendDays[i] === startDay) {
          weekendStyleApplied = true;
          break;
        }
      }
    }

    if (!selectedStyleApplied && this.currentDate.getDate() === this.manipulatedDate.getDate() &&
      this.currentDate.getMonth() === this.manipulatedDate.getMonth() &&
      this.currentDate.getFullYear() === this.manipulatedDate.getFullYear()) {
      currentDateStyleApplied = true;
    }

    if (!currentDateStyleApplied && this.customSelectionCollection) {
      let customSelection = null;
      for (let i = 0; i < this.customSelectionCollection.length; i++) {
        customSelection = this.customSelectionCollection[i];
        if (customSelection.date.getDate() === this.manipulatedDate.getDate() &&
          customSelection.date.getMonth() === this.manipulatedDate.getMonth() &&
          customSelection.date.getFullYear() === this.manipulatedDate.getFullYear()) {
          console.log('Comparing Current day', customSelection.date.toDateString(), 'Manipulated day', this.manipulatedDate.toDateString());
          weekendStyleApplied = false;
          customStyleApplied = true;
          dateComponent.addClass(customSelection.style);
          break;
        }
      }
    }

    if (!currentDateStyleApplied && !customStyleApplied && this.holidaysCollection) {
      let holidayDate = null;
      for (let i = 0; i < this.holidaysCollection.length; i++) {
        holidayDate = this.holidaysCollection[i];
        if (holidayDate.getDate() === this.manipulatedDate.getDate() &&
          holidayDate.getMonth() === this.manipulatedDate.getMonth() &&
          holidayDate.getFullYear() === this.manipulatedDate.getFullYear()) {
          console.log('Comparing Current day', holidayDate.toDateString(), 'Manipulated day', this.manipulatedDate.toDateString());
          holidayStyleApplied = true;
          break;
        }
      }
    }

    if (selectedStyleApplied) {
      dateComponent.addClass(this.selectedStyleName);
    } else if (currentDateStyleApplied) {
      dateComponent.addClass(this.todayStyleName);
    } else if (holidayStyleApplied) {
      dateComponent.addClass(this.holidayStyleName);
    } else if (weekendStyleApplied) {
      dateComponent.addClass(this.weekendStyleName);
    }
  }

  getCollection(startDay) {
    switch (startDay) {
      case DateProperties.FIRST_DAY:
        return this.firstDayCollection;
      case DateProperties.SECOND_DAY:
        return this.secondDayCollection;
      case DateProperties.THIRD_DAY:
        return this.thirdDayCollection;
      case DateProperties.FOURTH_DAY:
        return this.fourthDayCollection;
      case DateProperties.FIFTH_DAY:
        return this.fifthDayCollection;
      case DateProperties.SIXTH_DAY:
        return this.sixthDayCollection;
      case DateProperties.SEVENTH_DAY:
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
    const cellWidth = parseInt((this.width - PADDING_GAP) / (DateProperties.MAX_DAYS_IN_WEEK), 10);
    const cellHeight = parseInt((this.height - this._headerGap - this._headerHeight - DAY_RENDERER_HEIGHT - PADDING_GAP) / this.totalRows, 10);
    for (let dayIndex = 0; dayIndex < DateProperties.MAX_DAYS_IN_WEEK; dayIndex++) {
      renderY = this._headerGap;
      dayRenderer = this.dayOrderedCollection[dayIndex];
      dayRenderer.setPosition(renderX, renderY);
      dayRenderer.measure(cellWidth, DAY_RENDERER_HEIGHT);
      dayCollection = this.getCollection(dayIndex);
      renderY += DAY_RENDERER_HEIGHT;
      for (let rowIndex = 0; rowIndex < this.totalRows; rowIndex++) {
        dateRenderer = dayCollection[rowIndex];
        if (dateRenderer) {
          dateRenderer.setPosition(renderX, renderY);
          dateRenderer.measure(cellWidth, cellHeight);
        }
        renderY += cellHeight + RENDER_PADDING;
      }
      renderX += cellWidth + RENDER_PADDING;
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
    this.dayOrderedCollection = null;

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

export default TimeLineMonthlyContainer;