import { Component } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatBottomSheetModule, MatButtonModule, MatListModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css',
})
export class BottomSheetComponent {
  constructor(private _bottomsheet: MatBottomSheet) {}

  openbottomsheet(): void {
    this._bottomsheet.open(BottomSheetRefComponenet);
  }
}

@Component({
  standalone: true,
  imports: [MatBottomSheetModule, MatButtonModule, MatListModule],
  selector: 'bottom-sheet-ref',
  templateUrl: './bottom-sheet-ref.component.html',
})
export class BottomSheetRefComponenet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetRefComponenet>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
