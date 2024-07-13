import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

export interface User {
  name: string;
}

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter2 = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  // control = new FormControl('');
  // myControl = new FormControl<string | User>(''); //<string | User>('');
  // options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }]; //[{name:'mary'}, 'Option 2', 'Option 3']; //['England', 'Pakistan', 'Italy'];

  // streets: string[] = [
  //   'Champs-Élysées',
  //   'Lombard Street',
  //   'Abbey Road',
  //   'Fifth Avenue',
  // ];
  // filteredStreets!: Observable<string[]>;
  // filteredOptions!: Observable<User[]>;
  // stateForm = this._formBuilder.group({ stateGroup: '' });

  // ngOnInit(): void {
  //   // this.filteredStreets = this.control.valueChanges.pipe(
  //   //   startWith(''),
  //   //   map((value) => this._filter1(value || ''))
  //   // );
  //   // this.filteredOptions = this.myControl.valueChanges.pipe(
  //   //   startWith(''),
  //   //   map((value) => {
  //   //     const name = typeof value === 'string' ? value : value?.name;
  //   //     return name ? this._filter(name as string) : this.options.slice();
  //   //   })
  //   // );
  //   this.stateGroupOptions = this.stateForm
  //     .get('stateGroups')!
  //     .valueChanges.pipe(
  //       startWith(''),
  //       map((value) => this._filterGroup(value || ''))
  //     );
  // }
  // private _filter(name: string): User[] {
  //   const filtervalue = name.toLowerCase();
  //   return this.options.filter((option) =>
  //     option.name.toLowerCase().includes(filtervalue)
  //   );
  // }
  // displayFn(user: User): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter1(value: string): string[] {
  //   const filtervalue = this._normalizeValue(value);
  //   return this.streets.filter((street) =>
  //     this._normalizeValue(street).includes(filtervalue)
  //   );
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }

  // ngOnInit():void{
  //   this.myControl.valueChanges.subscribe((input) => {
  //     // Filter options based on input (e.g., case-insensitive)
  //     this.filteredOptions = this.options.filter((option) =>
  //       option.toLowerCase().includes(input!.toLowerCase())
  //     );
  //   });
  // }
  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateGroupOptions!: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stateGroupOptions = this.stateForm
      .get('stateGroup')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filterGroup(value || ''))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map((group) => ({
          letter: group.letter,
          names: _filter2(group.names, value),
        }))
        .filter((group) => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
