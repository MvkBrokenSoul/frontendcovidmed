import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart,faBell } from '@fortawesome/free-solid-svg-icons';
import { Cart } from '../../models/cart.model';
import { CartServiceService } from '../../service/cardService/cart-service.service';
@Component({
  selector: 'app-med-nav',
  templateUrl: './med-nav.component.html',
  styleUrls: ['./med-nav.component.css']
})
export class MedNavComponent implements OnInit {
  
  search:string='';
  cart = faShoppingCart;
  bell = faBell;
  constructor(private cartService:CartServiceService,private router:Router) { }
  cartdata:Cart[]=[]
  ngOnInit(): void {
    this.cartService.getCartitem().subscribe((res:any)=>{
        this.cartdata = res;
    },(err)=>{
      console.log(err.message)
    })
  }
}
