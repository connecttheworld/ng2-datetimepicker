import {Component} from '@angular/core';

@Component({ 
    moduleId: 'ng2-datetimepicker',
    selector: 'datetime-picker',
    templateUrl: './datetimepicker.component.ts',
    styleUrls: ['./datetimerpicker.component.css']
})

export class DatetimePicker  {
    
    weekdays: Object[] = [
        {display: 'Sun', long: 'Sunday', id: 0},
        {display: 'Mon', long: 'Monday', id: 1},
        {display: 'Tue', long: 'Tuesday', id: 2},
        {display: 'Wed', long: 'Wednesday', id: 3},
        {display: 'Thu', long: 'Thursday', id: 4},
        {display: 'Fri', long: 'Friday', id: 5},
        {display: 'Sat', long: 'Saturday', id: 6}];

    months: Object[] = [
        {long: 'January', id: 0},
        {long: 'February', id: 1},
        {long: 'March', id: 2},
        {long: 'April', id: 3},
        {long: 'May', id: 4},
        {long: 'June', id: 5},
        {long: 'July', id: 6},
        {long: 'August', id: 7},
        {long: 'September', id: 8},
        {long: 'October', id: 9},
        {long: 'November', id: 10},
        {long: 'December', id: 11}];

    constructor () {}
}
