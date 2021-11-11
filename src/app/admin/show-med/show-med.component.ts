import { Component, OnInit } from '@angular/core';
import { medDeta } from '../models/medDeta.model';
import { MedicineDetaService } from '../services/medicineDeta/medicine-deta.service';

@Component({
  selector: 'app-show-med',
  templateUrl: './show-med.component.html',
  styleUrls: ['./show-med.component.css']
})
export class ShowMedComponent implements OnInit {

  constructor( private medAddService:MedicineDetaService) { }

  ngOnInit(): void {

    this.getMedicine()

  }

  medicine:medDeta[]=[]

  getMedicine(){
    this.medAddService.getMedList().subscribe((res:any)=>{
      this.medicine = res
      console.log(this.medicine)
    })
  }
}
