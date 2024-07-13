import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BodyComponent } from "./components/body/body.component";
import { BadgeComponent } from "./components/badge/badge.component";
import { BottomSheetComponent } from "./components/bottom-sheet/bottom-sheet.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { HeaderComponent } from "./components/header/header.component";
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatCommonModule } from '@angular/material/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonsComponent,
    CheckboxComponent,
    HeaderComponent,MatDividerModule,MatDivider,MatCommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  constructor(private route: Router) {}

  hasRoute(route: string) {
    return this.route.url === route;
  }
  
}
