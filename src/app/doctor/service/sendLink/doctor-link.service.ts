import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctoLink } from '../../dcModels/doctorLink.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorLinkService {


  url ='http://localhost:3000/doctorlink';
  constructor(private http :HttpClient) { }

  addLink(doctolink: doctoLink): Observable<doctoLink>{
    return this.http.post<doctoLink>(this.url,doctolink);
  }
  getLinklist(): Observable<doctoLink[]>{
    return this.http.get<doctoLink[]>(this.url);
  }
  getLinkById(id:any): Observable<doctoLink>{
    return this.http.get<doctoLink>(`${this.url}/${id}`,);
  }
}

