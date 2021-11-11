import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medDeta } from '../../models/medDeta.model';
@Injectable({
  providedIn: 'root'
})
export class MedicineDetaService {
  url = "http://localhost:3000/medadd";
  constructor(private http:HttpClient) { }

  addMed(med_deta:any){
    return this.http.post(this.url,med_deta)
  }
  getMedList():Observable<medDeta>{
    return this.http.get<medDeta>(this.url)
  }
  updateMed(med_deta:medDeta):Observable<medDeta>{
    return this.http.put<medDeta>(`${this.url}/${med_deta._id}`,med_deta)
  }
}
