import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CovidtrackerService {

  constructor(private http: HttpClient) { }
  url="https://disease.sh/v3/covid-19/countries"
  getCovidDetails(){
    return this.http.get(this.url);
  }
}
