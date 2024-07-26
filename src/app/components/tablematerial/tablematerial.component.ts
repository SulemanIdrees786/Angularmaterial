import { CommonModule, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCommonModule, MatOption } from '@angular/material/core';
import {
  MatDialogActions,
  MatDialogModule,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatList, MatSelectionList } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatTableModule,
} from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { DialogData } from '../dialog/dialog.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { existsSync } from 'node:fs';
import { MatSortModule, MatSort, MatSortHeader } from '@angular/material/sort';
export interface PeriodicElement {
  name: string;
  position: number | null;
  weight: number | null;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-tablematerial',
  standalone: true,
  imports: [
    CommonModule,
    MatCommonModule,
    MatTableModule,
    MatColumnDef,
    MatCellDef,
    MatCell,
    MatRow,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
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
    TablematerialComponent,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTable,
    MatDialogModule,
    MatButtonToggleModule,
    MatPaginator,
    MatIconButton,
    MatSortModule,
    MatSort,
    MatSortHeader,
  ],
  templateUrl: './tablematerial.component.html',
  styleUrl: './tablematerial.component.css',
})
export class TablematerialComponent implements AfterViewInit {
  // dataSource = new MatTableDataSource<PeriodicElement>([
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ]);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource: PeriodicElement[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'action',
  ];

  // constructor(public dialog: MatDialog) {}
  // opendialog(): void {
  //   const dialogref = this.dialog.open(AdddialogtableComponent, {
  //   });
  //   dialogref.afterClosed().subscribe((result) => {
  //     console.log('the dialog was closed ');
  //   });
  // }

  // newData: PeriodicElement = {
  //   position: null,
  //   name: '',
  //   weight: null,
  //   symbol: '',
  // };

  // addData() {
  //   //  const newData: PeriodicElement = {
  //   //    position: this.newData.position,
  //   //    name: this.newData.name,
  //   //    weight: this.newData.weight,
  //   //    symbol: this.newData.symbol,
  //   //  };
  //   this.dataSource.push({
  //     position: this.newData.position,
  //     name: this.newData.name,
  //     weight: this.newData.weight,
  //     symbol: this.newData.symbol,
  //   });
  //   console.log(this.dataSource);
  //   this.dataSource = [...this.dataSource];
  //   // this.dataSource._updateChangeSubscription();
  //   // this.dataSource.push(newData)
  //   this.clearForm();
  // }

  // clearForm() {
  //   this.newData.position = null;
  //   this.newData.name = '';
  //   this.newData.weight = null;
  //   this.newData.symbol = '';
  // }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) {}
  // update data dialog
  opendialog(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(Updatedialogtable, {
      height: '400px',
      width: '200px', // Set a fixed width or 'auto'

      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog is closed');

      if (result) {
        const index = this.dataSource.data.findIndex(
          (el) => el.position === result.position
        );
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            ELEMENT_DATA
          );
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    });
  }

  // Add Data Dialog

  openDialog(): void {
    const dialogRef = this.dialog.open(AdddialogtableComponent, {
      height: '400px',
      width: '200px', // Set a fixed width or 'auto'

      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.dataSource.data.push(result); // Assuming result is the new data object
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.dataSource = [...this.dataSource]; // Update the table
      }
    });
    console.log(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  removeData(element: PeriodicElement): void {
    const index = this.dataSource.data.findIndex((el) => el === element);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.updatePosition();
      this.dataSource.paginator = this.paginator; // Update paginator after removing data
      this.dataSource.sort = this.sort;
    }
  }
  updatePosition(): void {
    this.dataSource.data.forEach(
      (element, index) => (element.position = index + 1)
    );
  }
}

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatDialogActions,
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
    MatDialogTitle,
    MatDialogContent,
    MatIconButton,
  ],
  selector: 'AddDialogTable',
  templateUrl: './AddDialogTable.html',
})
export class AdddialogtableComponent {
  newData: PeriodicElement = {
    position: null,
    name: '',
    weight: null,
    symbol: '',
  };
  constructor(
    public dialogRef: MatDialogRef<AdddialogtableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  addData(): void {
    if(this.newData.name !==''&& this.newData.symbol!==''&& this.newData.weight!==null){
      this.newData.position = ELEMENT_DATA.length + 1;
      this.dialogRef.close(this.newData); // Pass the new data back to the parent component
    }
   
  }

  // onNoClick(): void {
  //   this.dialogRef.close(); // Close the dialog without adding new data
  // }
}

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatDialogActions,
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
    MatDialogTitle,
    MatDialogContent,
    MatIconButton,
  ],
  selector: 'update-dialog-table',
  templateUrl: './Updatedialogtable.html',
})
export class Updatedialogtable {
  updatedData!: PeriodicElement;

  constructor(
    public dialogRef: MatDialogRef<Updatedialogtable>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement
  ) {
    // Create a copy of the data to avoid directly modifying the original

    this.updatedData = { ...data };
  }
  saveChanges(): void {
    this.dialogRef.close(this.updatedData);
  }
  cancel(): void {
    this.dialogRef.close();
  }
}