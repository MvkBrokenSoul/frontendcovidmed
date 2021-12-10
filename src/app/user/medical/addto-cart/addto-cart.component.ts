import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../models/cart.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/authservice/auth.service';
import { CartServiceService } from '../../service/cardService/cart-service.service';
import { UserService } from '../../service/userDbservice/user.service';

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.css']
})
export class AddtoCartComponent implements OnInit {

  
  user: User={
    _id: '',
    name: '',
    email: '',
    phno: 0,
    password: ''
  };
  constructor(private auth:AuthService , private userService:UserService,private cartservice:CartServiceService,private router:Router) {
  }

  ngOnInit(): void {
    this.userService.getUseById(this.auth.getToken()).subscribe(
      (res)=>{
        this.user = res
      },(err)=>{
       console.log(err.message)
      }
    )
  }
 
  user_email:string='';
  @Input() url:string='';
  @Input() med_image:string='';
  @Input() med_name:string='';
  @Input() med_power:string='';
  @Input() med_price:string='';
  @Input() med_type:string='';
  med_quentity:number=1;
  cart_item:Cart={
    _id:'',
    user_email: '',
    med_image: '',
    med_name: '',
    med_power: '',
    med_quentity: 1,
    med_price: 0,
    med_type: ''
  }
  cart_data:Cart[]=[]
  localitem:string='';
  

  onClick(){
   
   this.user_email = this.user.email;

   this.cart_item.user_email=this.user_email;
   this.cart_item.med_image = this.med_image;
   this.cart_item.med_name = this.med_name;
   this.cart_item.med_power = this.med_power;
   this.cart_item.med_price = +this.med_price;
   this.cart_item.med_type = this.med_type;
   console.log(" the number",this.cart_item)
    this.cartservice.addCartitem(this.cart_item).subscribe((res) =>{

    } ,(err)=>{
      console.log(err.message)
    });
    
   }
   
}
