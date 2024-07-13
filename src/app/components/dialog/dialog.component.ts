import { CommonModule, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import {
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatDialog,MatDialogActions,MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatList } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,MatDialogActions,
    MatFormField,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    MatInput,
    MatCommonModule,
    FormsModule,
    MatDialogModule,
    MatDialogTitle,
    MatButtonModule,
    MatDividerModule,MatDialogContent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  name!: string;
  animal!: string;

  constructor(public dialog: MatDialog,) {}
  opendialog(): void {
    const dialogref = this.dialog.open(DialogopenComponent, {
      data: { name: this.name, animal: this.animal },
    });
    dialogref.afterClosed().subscribe((result) => {
      console.log('the dialog was closed ');
      this.animal = result;
    });
  }
}

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormField,MatDialogActions,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    MatInput,
    MatCommonModule,
    FormsModule,
    MatDialogModule,
    MatList,
    MatDividerModule,
    MatDialogTitle,MatDialogContent
  ],
  selector: 'dialog-open',
  templateUrl: './dialog-open.component.html',
})
export class DialogopenComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogopenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick() {
    this.dialogRef.close();
  }
}


