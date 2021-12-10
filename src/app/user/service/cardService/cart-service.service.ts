import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';
import { User } from '../../models/user.model';
@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  cart:Cart[]=[]
  url ='http://localhost:3000/cart';
  constructor(private http :HttpClient) { }
  addCartitem(cart:Cart){
    return this.http.post(this.url,cart)
  }
  getCartitem(){
    return this.http.get(this.url)
  }
  deleteCartitem(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  deleteallCartitem(){
    return this.http.delete(this.url)
  }
  updateCartitem(cart:Cart){
    return this.http.delete(`${this.url}/${cart._id}`)
  }
  
}
