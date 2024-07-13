import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import {
  FormsModule,
  NgModel,
  NgModelGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
    FormsModule,MatCheckboxModule
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
}
