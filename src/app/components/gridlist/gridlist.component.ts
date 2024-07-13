import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatButtonModule,
  MatIconAnchor,
  MatIconButton,
} from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelContent,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import {
  MatGridList,
  MatGridListModule,
  MatGridTile,
  MatGridTileText,
} from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {
  MatList,
  MatListItemIcon,
  MatListModule,
} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import {
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
} from '@angular/material/menu';
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
} from '@angular/material/radio';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-gridlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCommonModule,
    MatGridListModule,
    NgFor,
    MatGridTile,
    MatGridList,
    MatGridTileText,
    MatDividerModule,
    MatIconModule,
    MatIcon,
    MatIconAnchor,
    MatList,
    MatListItemIcon,
    MatListModule,
    RouterLink,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanelContent,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIconModule,
    MatIconButton,
    MatMenuModule,
    MatMenuTrigger,
    MatMenuItem,
    MatButtonModule,
    MatRadioButton,
    MatRadioGroup,
    MatRadioModule,
  ],
  templateUrl: './gridlist.component.html',
  styleUrl: './gridlist.component.css',
})
export class GridlistComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  typesofshoes: string[] = [
    'boots',
    'clogs',
    'loafers',
    'moccasins',
    'sneakers',
  ];

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  panelOpenState = false;
  panelOpenState1 = false;
}
