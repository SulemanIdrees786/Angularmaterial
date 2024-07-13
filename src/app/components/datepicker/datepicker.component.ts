import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule,MatCommonModule, } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDateRangePicker} from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField, MatHint, MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatCommonModule,
    MatFormFieldModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatDatepicker,
    MatInputModule,
    MatDateRangePicker,
    NgIf,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
  
})
export class DatepickerComponent {
  range1 = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  startDate = new Date(1990,0,1);

}
