import {VisualDivElement, VisualSpanElement, VisualMouseEvent, Utils} from 'desktop';
import DateDayRenderer from "../../../../components/day/DateDayRenderer";

const FIRST_DAY = 0;
const SECOND_DAY = 1;
const THIRD_DAY = 2;
const FOURTH_DAY = 3;
const FIFTH_DAY = 4;
const SIXTH_DAY = 5;
const SEVENTH_DAY = 6;

const MAX_DAYS_IN_WEEK = 7;
const MAX_DAYS = 31;

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
		this.cachedEndDate = MAX_DAYS;
		this.totalRows = 0;
		this._headerHeight = 28;
		this._headerGap = 10;

		this.currentDate = new Date();
		this.selectedDate = null;

		this.todayStyleName = 'today';
		this.selectedStyleName = 'selected';
		this.holidayStyleName = 'holiday';
		this.weekendStyleName = 'weekend';

		this.callLifeCycle();
	}

	createChildren() {
		this.leftArrowElement = new VisualSpanElement('component__date__back');
		this.dayMonthTextElement = new VisualDivElement('component__date__day_month');
		this.rightArrowElement = new VisualSpanElement('component__date__forward');
		this.leftArrowElement.setText('<');
		this.rightArrowElement.setText('>');
		for (let i = 0; i < MAX_DAYS_IN_WEEK; i++) {
			const renderer = new DateDayRenderer('component__date__day_cell');
			this.dayCollection[i] = renderer;
			renderer.setText(DateDayComponent.DAY[i]);
		}
		for (let i = 0; i < MAX_DAYS; i++) {
			const renderer = new DateDayRenderer('component__date__date_cell');
			this.dateCollection[i] = renderer;
			renderer.setDateAsNumber(i + 1);
			renderer.addDOMEventListener(VisualMouseEvent.CLICK, this.dateSelected.bind(this, renderer));
		}
		this.setCalendar(this.currentDate.getFullYear(), this.currentDate.getMonth());
		this.selectedDate = this.currentDate;
		//this.setCalendar(2019, 2);
	}
}

export default TimeLineMonthlyContainer;