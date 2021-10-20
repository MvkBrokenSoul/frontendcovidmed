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
  Covidtracker(){
    this.covidTracker.getCovidDetails().subscribe((res:any)=>{
      this.coviddetails=res
      console.log(this.coviddetails)
    })}
}
