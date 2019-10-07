import {EventsDispatcher} from 'desktop';

const secondInMilliSeconds = 1000;
const minuteInMilliSeconds = secondInMilliSeconds * 60;
const hourInMilliSeconds = minuteInMilliSeconds * 60;
const dayInMilliSeconds = hourInMilliSeconds * 24;
const weekInMilliSeconds = dayInMilliSeconds * 7;

let fullMonth = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

let day = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

let fullDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class DateProperties extends EventsDispatcher {
  static get FIRST_DAY() {
    return 0;
  };

  static get SECOND_DAY() {
    return 1;
  };

  static get THIRD_DAY() {
    return 2;
  };

  static get FOURTH_DAY() {
    return 3;
  };

  static get FIFTH_DAY() {
    return 4;
  };

  static get SIXTH_DAY() {
    return 5;
  };

  static get SEVENTH_DAY() {
    return 6;
  };

  static get MAX_DAYS_IN_WEEK() {
    return 7;
  };

  static get MAX_DAYS() {
    return 31;
  }

  static get SECOND_IN_MILLISECONDS() {
    return secondInMilliSeconds;
  };

  static get MINUTE_IN_MILLISECONDS() {
    return minuteInMilliSeconds;
  };

  static get HOUR_IN_MILLISECONDS() {
    return hourInMilliSeconds;
  };

  static get DAY_IN_MILLISECONDS() {
    return dayInMilliSeconds;
  };

  static get WEEK_IN_MILLISECONDS() {
    return weekInMilliSeconds;
  };

  static get MONTH() {
    return fullMonth;
  }

  static get DAY() {
    return day;
  }

  static get FULL_DAY() {
    return fullDay;
  }

  constructor() {
    super();
  }
}

export default DateProperties;