import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartServiceService } from '../../service/cardService/cart-service.service';

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {

  constructor(
    private cartService:CartServiceService
  ) {


   }
    allcart:Cart[]=[]
  ngOnInit(): void {

    this.getdata()

  }

  getdata(){
    this.cartService.getCartitem().subscribe((res:any)=>{
      this.allcart = res;
      console.log(this.allcart)
    })
  }
  Delete(id:any){
    this.cartService.deleteCartitem(id).subscribe(res=>{
      this.getdata()
    },(err)=>{
      console.log(err.massage)
    })
  }
  buy(){
    // this.cartService.deleteallCartitem().subscribe(res=>{})
    alert("the item will deleverd withen today")
    this.cartService.deleteallCartitem().subscribe(res=>{
      console.log("success")
      this.getdata()
    },(err)=>{
      console.log(err.massage)
    })
  }
}
