import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../models/user.model';
import { OtpserviceService } from '../service/otpservice/otpservice.service';
import { UserService } from '../service/userDbservice/user.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  forgetForm!: FormGroup;
  constructor(private fb: FormBuilder,private userService: UserService,private router:Router,private Otpservice:OtpserviceService ) { this.updatedPass()}
  Users:User[]=[]
  getUser(){
    this.userService.getUserlist().subscribe((res:any) => {
      this.Users = res;
    })}

    notAllowdEmail:string[]=[]
    getEmaulList(){
      this.getUser();
      for(var list of this.Users){
      this.notAllowdEmail.push(list.email)
      }
    }
    emailValidate(control:FormControl){
      this.getEmaulList();
      if(this.notAllowdEmail.lastIndexOf(control.value)==-1){
        return{'emailIsNotAllowed':true};
      }
      return null;
    }

  ngOnInit(): void {
    this.forgetForm=this.fb.group({
      _id: [''],
      name:[''],
    email:['',[Validators.required,this.emailValidate.bind(this)]],
    phno:[''],
    password:['',Validators.required],
    })
  }
  updatedPass(){
    this.getUser();
      for(var list of this.Users){
        if(this.forgetForm.get('email')?.value==list.email)
        this.forgetForm.get('_id')?.setValue(list._id);
        this.forgetForm.get('name')?.setValue(list.name);
        this.forgetForm.get('phno')?.setValue(list.phno);
      }
  }

  modal:Boolean=false;
  getOTP!:string;
  checkOTP!:string;
  modelClose(){
    this.modal=false;
  }
  onSubmit(){
    this.updatedPass()
    if(this.checkOTP==this.getOTP){
    if(this.forgetForm.valid){
      this.userService.updateUser(this.forgetForm.value).subscribe(
        (res) => {
          this.router.navigate(['/user/login']);
          console.log("Success")
        },
        (err) =>{
          alert(err.message);
        }
      )
  }}else{
    alert("Wrong Otp")
    this.modal=false;
    this.getOTP=""
  }
}

generateOTP(){
 
  if(this.forgetForm.valid){
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    this.checkOTP=OTP;
    this.modal=true;
    this.Otpservice.sendOPT(OTP,this.forgetForm.get('email')?.value).subscribe(
      (res)=>{
        console.log("sent otp");
      },
      (err)=>{
        console.log(err);
      }
      );
  }
 
}
}
