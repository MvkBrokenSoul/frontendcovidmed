import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  url ='http://localhost:3000/user';
  constructor(private http :HttpClient) { }

  addUser(user: User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }
  getUserlist(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  getUseById(id:any): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`,);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user._id}`,user)
  }

}
