import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatentDetails } from '../../models/patentdetails.model';

@Injectable({
  providedIn: 'root'
})
export class PatentDetailsService {


  url ='http://localhost:3000/patentdetails';
  constructor(private http :HttpClient) { }

  addPatentDetails(patentpetails: PatentDetails): Observable<PatentDetails>{
    return this.http.post<PatentDetails>(this.url,patentpetails);
  }
  getPatentDetails(): Observable<PatentDetails[]>{
    return this.http.get<PatentDetails[]>(this.url);
  }
  getPatentDetailsId(id:any): Observable<PatentDetails>{
    return this.http.get<PatentDetails>(`${this.url}/${id}`,);
  }
  updatePatentDetails(patentpetails: PatentDetails): Observable<PatentDetails>{
    return this.http.put<PatentDetails>(`${this.url}/${patentpetails._id}`,patentpetails)
  }
  deletePatentDetails(id:any): Observable<PatentDetails>{
    return this.http.delete<PatentDetails>(`${this.url}/${id}`)
  }
}

