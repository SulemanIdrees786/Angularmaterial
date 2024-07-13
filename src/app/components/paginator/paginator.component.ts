import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption, MatCommonModule, ThemePalette } from '@angular/material/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatHint,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectionList } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule, MatRadioGroup } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    MatPaginatorModule,
    CommonModule,
    MatFormField,
    MatDivider,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIcon,
    MatLabel,
    MatInput,
    MatHint,
    MatSelectionList,
    MatOption,
    MatCommonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatRadioGroup,
    MatFormFieldModule,
    MatDialogActions,
    MatFormField,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    MatInput,
    MatCommonModule,
    FormsModule,
    MatDialogModule,
    MatDialogTitle,
    MatButtonModule,
    MatDividerModule,
    MatDialogContent,
    MatSlideToggleModule,
    MatProgressBarModule,MatCardContent,MatCard,MatSlider,MatSliderModule,MatCardModule
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
