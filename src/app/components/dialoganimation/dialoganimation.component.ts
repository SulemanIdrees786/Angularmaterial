import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';


@Component({
  selector: 'app-dialoganimation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDialogActions,
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
    MatDividerModule,
    MatDialogContent,
  ],
  templateUrl: './dialoganimation.component.html',
  styleUrl: './dialoganimation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialoganimationComponent {
  readonly dialog = inject(MatDialog);
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimation2Component, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}


@Component({
  selector: 'dialog-animation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatDialogActions,
    NgIf,
    ReactiveFormsModule,
    MatInput,
    MatCommonModule,
    FormsModule,
    MatDialogModule,
    MatDialogTitle,
    MatButtonModule,
    MatDividerModule,
    MatDialogClose,
    MatCommonModule,
    MatDialogContent,
  ],
  templateUrl: './dialog-animation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimation2Component {
  readonly dialogRef = inject(MatDialogRef<DialogAnimation2Component>);
}
