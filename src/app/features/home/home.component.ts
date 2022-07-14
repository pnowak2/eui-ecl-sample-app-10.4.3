import { Component } from '@angular/core';
import { EclDatePickerDatePickedEvent } from '@eui/ecl-core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    fg: FormGroup;

    constructor(private fb: FormBuilder) {
        this.fg = fb.group({
            lu: [false, Validators.requiredTrue],
            be: [false, Validators.requiredTrue],
            pl: [{ value: true, disabled: true }],
        });

        this.fg.valueChanges.subscribe(changes => {
            console.log(changes);
            console.log(this.fg.get('lu'))
        });

        this.fg.markAllAsTouched();
    }

}
