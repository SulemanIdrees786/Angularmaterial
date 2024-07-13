import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatButtonModule,
} from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    CommonModule,
    MatDivider,
    MatButtonModule,
    MatCommonModule,
    MatIcon,
    MatButtonToggleModule,
    FormsModule
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  isChecked = false;
  handleToggleChange(){

  };
}
