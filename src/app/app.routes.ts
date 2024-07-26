import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardsComponent } from './components/cards/cards.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BodyComponent } from './components/body/body.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialoganimationComponent } from './components/dialoganimation/dialoganimation.component';
import { ExpansionpanelComponent } from './components/expansionpanel/expansionpanel.component';
import { FormsfieldComponent } from './components/formsfield/formsfield.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RadioripplesComponent } from './components/radioripples/radioripples.component';
import { SortheaderComponent } from './components/sortheader/sortheader.component';
import { TablematerialComponent } from './components/tablematerial/tablematerial.component';
import { TreematerialComponent } from './components/treematerial/treematerial.component';
import { NestedtreematerialComponent } from './components/nestedtreematerial/nestedtreematerial.component';
import { FlattreematerialComponent } from './components/flattreematerial/flattreematerial.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'body', component: BodyComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'dialoganimation', component: DialoganimationComponent },
  { path: 'expansionpanel', component: ExpansionpanelComponent },
  { path: 'formsfield', component: FormsfieldComponent },
  { path: 'gridlist', component: GridlistComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'radioripples', component: RadioripplesComponent },
  { path: 'sortheader', component: SortheaderComponent },
  { path: 'tablematerial', component: TablematerialComponent },
  {
    path:'flattreematerial',component:FlattreematerialComponent
  },
   {
    path:'nestedtreematerial',component:NestedtreematerialComponent
  },
   {
    path:'treematerial',component:TreematerialComponent
  }
];
