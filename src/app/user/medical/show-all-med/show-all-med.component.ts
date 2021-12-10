import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { medDeta } from 'src/app/admin/models/medDeta.model';
import { MedicineDetaService } from 'src/app/admin/services/medicineDeta/medicine-deta.service';

@Component({
  selector: 'app-show-all-med',
  templateUrl: './show-all-med.component.html',
  styleUrls: ['./show-all-med.component.css']
})
export class ShowAllMedComponent implements OnInit {

  constructor(private route: ActivatedRoute,private meddataservice:MedicineDetaService ) {
    this.type=String(this.route.snapshot.paramMap.get('type'));
   }
   type:string=''
   meddata:medDeta[]=[]
  filteredmeddata:medDeta[]=[]
  ngOnInit(): void {
    this.meddataservice.getMedList().subscribe(
      (res:any)=>{
        this.meddata=res
        this.filteredmeddata = this.meddata?.filter(x=> x.medicine_type == this.type)
        this.filteredmeddata = this.filteredmeddata.reverse()
        
      },(err)=>{
        console.log(err.message)
      }
    )
  }

}
