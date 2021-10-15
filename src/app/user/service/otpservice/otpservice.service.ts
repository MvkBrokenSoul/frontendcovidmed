import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  constructor(private http :HttpClient) { }
  url ='http://localhost:3000/otpsend';
  sendOPT(OTP:any,Email:any){
    return this.http.get(`${this.url}/${OTP}/${Email}`,);
  }
}
