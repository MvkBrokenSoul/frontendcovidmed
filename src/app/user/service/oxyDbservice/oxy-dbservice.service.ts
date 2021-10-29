import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oxybook } from '../../models/oxybook.model';

@Injectable({
  providedIn: 'root'
})
export class OxyDbserviceService {


  url ='http://localhost:3000/oxyuserdetails';
  constructor(private http :HttpClient) { }

  addoxy(oxybookser: Oxybook): Observable<Oxybook>{
    return this.http.post<Oxybook>(this.url,oxybookser);
  }
  getoxylist(): Observable<Oxybook[]>{
    return this.http.get<Oxybook[]>(this.url);
  }
  getoxyById(id:any): Observable<Oxybook>{
    return this.http.get<Oxybook>(`${this.url}/${id}`,);
  }
  updateoxy(oxybookser: Oxybook): Observable<Oxybook>{
    return this.http.put<Oxybook>(`${this.url}/${oxybookser._id}`,oxybookser)
  }
}
