import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { medDeta } from 'src/app/admin/models/medDeta.model';
import { MedicineDetaService } from 'src/app/admin/services/medicineDeta/medicine-deta.service';
import { Cart } from '../../models/cart.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/authservice/auth.service';
import { CartServiceService } from '../../service/cardService/cart-service.service';
import { UserService } from '../../service/userDbservice/user.service';

@Component({
  selector: 'app-med-details',
  templateUrl: './med-details.component.html',
  styleUrls: ['./med-details.component.css']
})
export class MedDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private meddataservice:MedicineDetaService,private auth:AuthService , private userService:UserService,private cartservice:CartServiceService,) {
    this.medname=String(this.route.snapshot.paramMap.get('medname'));
   }
  
   medname:string=''
  meddata:medDeta[]=[]
  filteredmeddata: medDeta[]=[];

  cart_item:Cart={
    _id: '',
    user_email: '',
    med_image: '',
    med_name: '',
    med_power: '',
    med_quentity: 0,
    med_price: 0,
    med_type: ''
  }
  user: User={
    _id: '',
    name: '',
    email: '',
    phno: 0,
    password: ''
  };
  cart_data:Cart[]=[]
  ngOnInit(): void {
    this.userService.getUseById(this.auth.getToken()).subscribe(
      (res)=>{
        this.user = res
      },(err)=>{
       console.log(err.message)
      }
    )
    this.meddataservice.getMedList().subscribe(
      (res:any)=>{
        this.meddata=res
        this.filteredmeddata = this.meddata?.filter(x=> x.medicine_name == this.medname)
        console.log(this.filteredmeddata)
      },(err)=>{
        console.log(err.message)
      }
    )
  }
  user_email:string=''
  onClick(item:medDeta){
    this.user_email = this.user.email;

   this.cart_item.user_email=this.user_email;
   this.cart_item.med_image = item.medicine_image;
   this.cart_item.med_name = item.medicine_name;
   this.cart_item.med_power = item.medicine_power;
   this.cart_item.med_price = item.medicine_price;
   this.cart_item.med_quentity = 1;
   this.cart_item.med_type = item.medicine_type;
   this.cartservice.addCartitem(this.cart_item).subscribe((res) =>{

  } ,(err)=>{
    console.log(err.message)
  });
  this.cartservice.getCartitem().subscribe((res:any) =>{
    this.cart_data=res
  } ,(err)=>{
    console.log(err.message)
  });
  
  console.log(this.cart_data.length)
}
  
}
