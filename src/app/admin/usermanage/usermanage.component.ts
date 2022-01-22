import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user.model';
import { UserService } from 'src/app/user/service/userDbservice/user.service';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.css']
})
export class UsermanageComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  users:User[] = []

  getUser(){
    this.userservice.getUserlist().subscribe((res)=>{
      this.users = res
      console.log(this.users)
    })
  }

}
