import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardsComponent } from "../cards/cards.component";
import { MatButton, MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionPanel, MatAccordion, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatGridListModule, MatGridTile, MatGridList, MatGridTileText } from '@angular/material/grid-list';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatList, MatListItemIcon, MatListModule } from '@angular/material/list';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CheckboxComponent,
    CommonModule,
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
    RouterLink,
    RouterOutlet,
    CardsComponent,MatMenu,MatButton,MatButtonModule,MatMenuModule,MatMenuTrigger
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private route: Router) {}
  panelOpenState =false
  hasRoute(route: string) {
    return this.route.url === route;
  }
}
