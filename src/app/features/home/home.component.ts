import { Component } from '@angular/core';
import { EclDatePickerDatePickedEvent } from '@eui/ecl-core';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    PUBLICATION_DATE_TO = 'some fake date constant..';

    onDatePicked(evt: EclDatePickerDatePickedEvent, pubDate: string, someBoolean: boolean) {
        console.log(evt, pubDate, someBoolean);
    }

}
