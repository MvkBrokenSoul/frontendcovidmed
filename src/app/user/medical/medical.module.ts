import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalHomeComponent } from './medical-home/medical-home.component';
import { MedNavComponent } from './med-nav/med-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowMedComponent } from './show-med/show-med.component';
import { ShowAllMedComponent } from './show-all-med/show-all-med.component';
import { MedDetailsComponent } from './med-details/med-details.component';
import { AddtoCartComponent } from './addto-cart/addto-cart.component';
import { ShowcartComponent } from './showcart/showcart.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    MedicalHomeComponent,
    MedNavComponent,
    ShowMedComponent,
    ShowAllMedComponent,
    MedDetailsComponent,
    AddtoCartComponent,
    ShowcartComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MedicalRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ]
})
export class MedicalModule { }
