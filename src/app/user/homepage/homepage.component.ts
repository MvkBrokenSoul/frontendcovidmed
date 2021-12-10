import { Component, OnInit } from '@angular/core';
import { covidDetails } from '../models/covidDetails.model';
import { CovidtrackerService } from '../service/covidtrackerapi/covidtracker.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private covidTracker:CovidtrackerService) { }

  ngOnInit(): void {
    this.Covidtracker()
  }
  coviddetails:covidDetails={
    active: '',
    death: '',
    discharge: ''
  }
  covid:any[]=[]
  Covidtracker(){
    this.covidTracker.getCovidDetails().subscribe((res:any)=>{
      this.covid=res
      for(let item of this.covid){
        if(item.country == 'India'){
          this.coviddetails.active = item.cases;
          this.coviddetails.death = item.deaths;
          this.coviddetails.discharge=item.recovered;
        }
      }
      console.log(this.coviddetails)
    })}
}
