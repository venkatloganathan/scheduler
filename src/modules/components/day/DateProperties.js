class DateProperties {
}

DateProperties.FIRST_DAY = 0;
DateProperties.SECOND_DAY = 1;
DateProperties.THIRD_DAY = 2;
DateProperties.FOURTH_DAY = 3;
DateProperties.FIFTH_DAY = 4;
DateProperties.SIXTH_DAY = 5;
DateProperties.SEVENTH_DAY = 6;

DateProperties.MAX_DAYS_IN_WEEK = 7;
DateProperties.MAX_DAYS = 31;

DateProperties.SECOND_IN_MILLISECONDS = 1000;
DateProperties.MINUTE_IN_MILLISECONDS = 1000 * 60;
DateProperties.HOUR_IN_MILLISECONDS = DateProperties.MINUTE_IN_MILLISECONDS * 60;
DateProperties.DAY_IN_MILLISECONDS = DateProperties.HOUR_IN_MILLISECONDS * 24;
DateProperties.WEEK_IN_MILLISECONDS = DateProperties.DAY_IN_MILLISECONDS * 7;

DateProperties.MONTH = ['January', 'February', 'March', 'April', 'May', 'June', '' +
'July', 'August', 'September', 'October', 'November', 'December'];

DateProperties.DAY = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//const instance = new DateProperties();
export default DateProperties;