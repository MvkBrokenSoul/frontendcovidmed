import { Component, OnInit } from '@angular/core';
import { faShoppingCart,faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-med-nav',
  templateUrl: './med-nav.component.html',
  styleUrls: ['./med-nav.component.css']
})
export class MedNavComponent implements OnInit {

  cart = faShoppingCart;
  bell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
