import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCommonModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition, MatSnackBarAction, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  selector: 'app-radioripples',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
    MatInputModule,
    MatRadioModule,
    MatRadioButton,
    MatRadioGroup,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelect,
    NgIf,
    NgFor,
    MatCommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSnackBarAction,
    MatInputModule,
  ],
  templateUrl: './radioripples.component.html',
  styleUrl: './radioripples.component.css',
})
export class RadioripplesComponent {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  showFiller = false;
  isChecked = false;

  onToggleChange(event: any) {
    this.isChecked = event.checked;
  }
  horizontalPosition: MatSnackBarHorizontalPosition='start';
  verticalPosition : MatSnackBarVerticalPosition='bottom';
  durationInSeconds = 5;
  constructor(private _snackbar: MatSnackBar) {}

  opensnack(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
