import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



import {MatBadge, MatBadgeModule} from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [ CommonModule, MatBadgeModule, MatBadge,MatButtonModule,MatCommonModule,MatIcon],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
