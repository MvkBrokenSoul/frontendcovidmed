import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedDetailsComponent } from './med-details/med-details.component';
import { MedicalHomeComponent } from './medical-home/medical-home.component';
import { SearchComponent } from './search/search.component';
import { ShowAllMedComponent } from './show-all-med/show-all-med.component';
import { ShowcartComponent } from './showcart/showcart.component';

const routes: Routes = [
  {path: '',component:MedicalHomeComponent},
  {path: 'showallmed/:type',component:ShowAllMedComponent},
  {path: 'detailedmed/:medname',component:MedDetailsComponent},
  {path:'showcart',component:ShowcartComponent},
  {path:'search/:search_type',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
