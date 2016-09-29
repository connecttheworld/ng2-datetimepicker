import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DatetimePicker} from './datetimepicker.component';

@NgModule({
    id: 'ng2-datetimepicker',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, BrowserModule],
    declarations: [DatetimePicker],
    exports: [DatetimePicker],
    bootstrap: [DatetimePicker]
})

export class DatetimePickerModule { }
