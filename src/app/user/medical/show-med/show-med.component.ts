import { Component, Input, OnInit } from '@angular/core';
import { medDeta } from 'src/app/admin/models/medDeta.model';
import { MedicineDetaService } from 'src/app/admin/services/medicineDeta/medicine-deta.service';

@Component({
  selector: 'app-show-med',
  templateUrl: './show-med.component.html',
  styleUrls: ['./show-med.component.css']
})
export class ShowMedComponent implements OnInit {

  constructor(private meddataservice:MedicineDetaService) { }

  ngOnInit(): void {
    this.meddataservice.getMedList().subscribe(
      (res:any)=>{
        this.meddata=res
    
        this.filteredmeddata = this.meddata?.filter(x=> x.medicine_type == this.type)
        this.filteredmeddata = this.filteredmeddata.slice(0,4).reverse()
       
      },(err)=>{
        console.log(err.message)
      }
    )
    
  }
  meddata:medDeta[]=[]
  filteredmeddata:medDeta[]=[]
  @Input() type!:string

}
