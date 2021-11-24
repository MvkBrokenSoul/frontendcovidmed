import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalHomeComponent } from './medical-home/medical-home.component';
import { MedNavComponent } from './med-nav/med-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MedicalHomeComponent,
    MedNavComponent
  ],
  imports: [
    CommonModule,
    MedicalRoutingModule,
    FontAwesomeModule
  ]
})
export class MedicalModule { }
