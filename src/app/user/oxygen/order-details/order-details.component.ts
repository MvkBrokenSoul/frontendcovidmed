import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oxybook } from '../../models/oxybook.model';
import { OxyDbserviceService } from '../../service/oxyDbservice/oxy-dbservice.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,private oxyService:OxyDbserviceService
  ) { }
  height:string="50%";
    item_id:string=''
    oxyDta:Oxybook={
      _id: '',
      name: '',
      email: '',
      phno: 0,
      address: '',
      pin: 0,
      andharNo: 0,
      causeforOxy: '',
      CovidAuth: false,
      date: new Date(),
      deletveryStat: ''
    }
  ngOnInit(): void {
    this.item_id = String(this.route.snapshot.paramMap.get('id'));
    this.oxyService.getoxyById(this.item_id).subscribe(
      (res:any)=>{
        this.oxyDta=res
        if (this.oxyDta.deletveryStat=='Yes'){
          this.height='0%'
        }
      }
    )
    
  
  }

}
