import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, viewChild, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-expansionpanel',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatExpansionPanel,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatAccordion,
    MatButtonModule,
    MatNativeDateModule,
  ],
  templateUrl: './expansionpanel.component.html',
  styleUrl: './expansionpanel.component.css',
})
export class ExpansionpanelComponent {
  panelOpenState = false;
  
  accordion = viewChild.required(MatAccordion);
  //  accordion: MatAccordion;
}
