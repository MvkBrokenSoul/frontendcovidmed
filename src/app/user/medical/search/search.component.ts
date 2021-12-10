import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { medDeta } from 'src/app/admin/models/medDeta.model';
import { MedicineDetaService } from 'src/app/admin/services/medicineDeta/medicine-deta.service';
import { Cart } from '../../models/cart.model';
import { CartServiceService } from '../../service/cardService/cart-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,private cartService:CartServiceService,private meddataservice:MedicineDetaService
  ) { }

  search2:string='';
  cart = faShoppingCart;
  bell = faBell;
  cartdata:Cart[]=[]
  meddata:medDeta[]=[]
  ngOnInit(): void {
    this.searchtype=String(this.route.snapshot.paramMap.get('search_type'));
    console.log(this.searchtype)
    this.cartService.getCartitem().subscribe((res:any)=>{
      this.cartdata = res;

  },(err)=>{
    console.log(err.message)
  })

  this.meddataservice.getMedList().subscribe((res:any)=>{
    this.meddata = res
    this.search()
  },(err)=>{
    console.log(err.message)
  })

  }
  searchtype:string = ''
  searchitem:string = ''
  itemtype:string = ''
  onClick(){
    this.searchtype = this.search2
    this.searchitem= ''
    this.itemtype = ''
    this.filteredmeddata=[]
    this.search()

  }
  filteredmeddata:medDeta[]=[]
  search(){
    for(let item of this.meddata){
      if(item.medicine_company.trim().toLowerCase().slice(0,3)==this.searchtype.trim().toLowerCase().slice(0,3)){
        this.searchitem = item.medicine_company
        this.itemtype = "company"
      }
      else if (item.medicine_type.trim().toLowerCase().slice(0,3)==this.searchtype.trim().toLowerCase().slice(0,3)){
        this.searchitem = item.medicine_type
        this.itemtype = "type"
      }
      else if (item.medicine_name.trim().toLowerCase().slice(0,3)==this.searchtype.trim().toLowerCase().slice(0,3)){
        this.searchitem = item.medicine_name
        this.itemtype = "name"
      }
    }
    if(this.itemtype=="company" ){
      this.filteredmeddata = this.meddata?.filter(x=> x.medicine_company == this.searchitem)
        this.filteredmeddata = this.filteredmeddata.reverse()
    }
    else if(this.itemtype=="type" ){
      this.filteredmeddata = this.meddata?.filter(x=> x.medicine_type == this.searchitem)
        this.filteredmeddata = this.filteredmeddata.reverse()
    }
    else if(this.itemtype=="name" ){
      this.filteredmeddata = this.meddata?.filter(x=> x.medicine_name == this.searchitem)
        this.filteredmeddata = this.filteredmeddata.reverse()
    }
  }


}
